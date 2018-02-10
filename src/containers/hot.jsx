import React,{Component} from 'react'
import ListArticle from '../components/list_article.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getArticleHot} from '../actions/getArticle.js';
import Loading from '../components/loading.jsx';
const axios =  require('axios');
const domain = require('../../config_domain.js');

import TopUser from '../components/top_user.jsx';

class Hot extends Component{
    constructor(props){
        super(props)
        this.state ={
            hot: [],
            page: 1,
            TopUser: []
        }
    }


    componentDidMount(){

        if(!this.props.page.hot) {
            this.props.getArticleHot(1);
        }
        this.props.page.hot = 2;

        // let promise = new Promise((resolve, reject)=>{
        //     axios.post(domain.domain+'/users/getTopUser',{user_id: "0",type: 1 }).then(res=>{
        //         res = res.data;
        //         res = res.data.results;
        //         resolve(res);
        //     }).catch(err=>{
        //         reject([]);
        //     });
        // });
        // promise.then(data=>{
        //     this.setState({TopUser:data});
        // }).catch(err=>{
        // })
    }

    NextPage = (page)=>{
        this.props.hot.isloading = true;
        this.props.page.hot = page + 1;
        this.setState({page:1});
        this.props.getArticleHot(page);
    }

    render(){
        let list_article = this.props.hot.hot;
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">

                            <ListArticle data={list_article} />
                            { this.props.hot.isloading ? <Loading /> : <div id="more-comment-wrap"><a onClick={this.NextPage.bind(this, this.props.page.hot)} className="more-comment">XEM THÊM...</a></div> }

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        hot: state.hot,
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getArticleHot: getArticleHot
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Hot);