import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import ListArticle from '../components/list_article.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getArticleNew} from '../actions/getArticle.js';
import Loading from '../components/loading.jsx';

import TopUser from '../components/top_user.jsx';

class Home extends Component{
    constructor(props){
        super(props)
        this.state ={
            article: [],
            page:1
        }
    }

    componentWillMount(){
    }

    componentDidMount(){
        if(this.state.page === 1) {
            this.props.getArticleNew(1);
        }
    }

    NextPage = (page)=>{
        this.props.article.isloading = true;
        this.setState({page: page});
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
                            { this.props.article.isloading ? <Loading /> : <div id="more-comment-wrap"><a onClick={this.NextPage.bind(this, this.state.page +1)} className="more-comment">XEM THÊM...</a></div> }

                        </div>

                        <TopUser />

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        article: state.article
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getArticleNew: getArticleNew
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);