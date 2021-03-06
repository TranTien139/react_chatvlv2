import React,{Component} from 'react'
import ListArticle from '../components/list_article.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getArticleNew, getTopUser} from '../actions/getArticle.js';
import Loading from '../components/loading.jsx';

import TopUser from '../components/top_user.jsx';
import {checkLogin} from '../actions/authAction.js';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            article: [],
            page: 1,
            TopUser: [],
            isTopUser:1,
            loading: false,
            scrolling: false
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.NextPage = this.NextPage.bind(this);
    }

    componentDidMount(){
         if(!this.props.page.pageHome) {
            this.props.getArticleNew(1);
             this.props.getTopUser(1);
        }

        document.title = 'Trang chủ';

        this.props.page.pageHome = 2;
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        let scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        let clientHeight = window.innerHeight;
        let scrolledToBottom = Math.ceil(scrollTop + clientHeight + 100) >= scrollHeight;

        if(scrolledToBottom && this.props.article.isloading === false && this.props.page.pageHome <=4){
            this.NextPage(this.props.page.pageHome);
        }
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
                            { list_article.map((object)=>{
                                return <ListArticle checklogin={check} key={Math.random()} data={object} />
                            })
                            }

                            { this.props.article.isloading === true ? <Loading /> : <div id="more-comment-wrap"><a onClick={this.NextPage.bind(this, this.props.page.pageHome)} className="more-comment">XEM THÊM...</a></div> }

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