import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import ListArticle from '../components/list_article.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getArticleNew} from '../actions/getArticle.js';
import Loading from '../components/loading.jsx';
const axios =  require('axios');
const domain = require('../../config_domain.js');

import TopUser from '../components/top_user.jsx';

class Home extends Component{
    constructor(props){
        super(props)
        this.state ={
            article: [],
            page: 1,
            TopUser: []
        }
    }

    componentWillMount(){
    }

    componentDidMount(){

         if(!this.props.page.pageHome) {
            this.props.getArticleNew(1);
        }

        this.props.page.pageHome = 2;

        let promise = new Promise((resolve, reject)=>{
            axios.post(domain.domain+'/users/getTopUser',{user_id: "0",type: 1 }).then(res=>{
                res = res.data;
                res = res.data.results;
                resolve(res);
            }).catch(err=>{
                reject([]);
            });
        });

        promise.then(data=>{
            this.setState({TopUser:data});
        }).catch(err=>{
        })
    }

    componentWillReceiveProps(nextProps) {
    }

    NextPage = (page)=>{
        this.props.article.isloading = true;
        this.props.page.pageHome = page + 1;
        this.setState({page:1});
        this.props.getArticleNew(page);
    }

    render(){
        let list_article = this.props.article.article;
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">

                            <ListArticle data={list_article} />
                            { this.props.article.isloading ? <Loading /> : <div id="more-comment-wrap"><a onClick={this.NextPage.bind(this, this.props.page.pageHome)} className="more-comment">XEM THÊM...</a></div> }

                        </div>

                        <TopUser top_user = {this.state.TopUser} />

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        article: state.article,
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getArticleNew: getArticleNew
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);