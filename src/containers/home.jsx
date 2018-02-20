import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import ListArticle from '../components/list_article.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getArticleNew, getTopUser} from '../actions/getArticle.js';
import Loading from '../components/loading.jsx';
const axios =  require('axios');
const domain = require('../../config_domain.js');

import TopUser from '../components/top_user.jsx';
import {checkLogin} from '../actions/authAction.js';
import {ToastContainer} from "react-toastr";

class Home extends Component{
    constructor(props){
        super(props)
        this.state ={
            article: [],
            page: 1,
            TopUser: [],
            isTopUser:1,
            loading: false
        }
        this.handleData = this.handleData.bind(this);
    }

    componentDidMount(){
        var seft = this;
         if(!this.props.page.pageHome) {
            this.props.getArticleNew(1);
             this.props.getTopUser(1);
        }

        this.props.page.pageHome = 2;
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        let myDiv = document.getElementById('main-container');
        let scrollTop = document.body.scrollTop;
        let height = myDiv.clientHeight - 500;

        if(scrollTop - height >0 && height> 1000){
            // console.log('vao day roi');
            // $( ".more-comment" ).trigger( "click" );
        }
    }

    handleData(data) {
        this.message.error(data, 'Cảnh báo', {
            closeButton: true,
        });
    }


    NextPage = (page)=>{
        this.props.article.isloading = true;
        this.props.page.pageHome = page + 1;
        this.setState({page:1});
        this.props.getArticleNew(page);
    }

    getTopUser = (number)=>{
        let name = 'TopUser' + number;
        if(this.props.gettopuser[name].length === 0) {
            this.props.getTopUser(number);
        }
        this.setState({isTopUser:number});

    }

    render(){
        let list_article = this.props.article.article;

        let top_user = this.props.gettopuser.TopUser3;
        if(this.state.isTopUser ===1) {
            top_user = this.props.gettopuser.TopUser1;
        } else if(this.state.isTopUser ===2){
            top_user = this.props.gettopuser.TopUser2;
        }

        let check = checkLogin();
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            { list_article.map((object,index)=>{
                                return <ListArticle checklogin={check} handlerFromParant={this.handleData} key={Math.random()} data={object} />
                            })
                            }

                            { this.props.article.isloading ? <Loading /> : <div id="more-comment-wrap"><a onClick={this.NextPage.bind(this, this.props.page.pageHome)} className="more-comment">XEM THÊM...</a></div> }

                        </div>

                        <div key={Math.random()} className="col-sm-4">
                            <div className="row top-user-home">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><h3>Top danh hài</h3></li>
                                    <li className="list-inline-item"><a className="active" onClick={this.getTopUser.bind(this,1)}> Tuần </a></li>
                                    <li className="list-inline-item"><a onClick={this.getTopUser.bind(this,2)}> Tháng </a></li>
                                    <li className="list-inline-item"><a className="all" onClick={this.getTopUser.bind(this,3)}> Tất cả </a></li>
                                </ul>
                            </div>
                            <TopUser top_user={top_user} />
                        </div>

                    </div>
                </div>

                <ToastContainer
                    ref={ref => this.message = ref}
                    className="toast-top-right"
                />

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        article: state.article,
        page: state.page,
        gettopuser: state.gettopuser
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getArticleNew: getArticleNew,
        getTopUser:getTopUser
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);