import React,{Component} from 'react'
import ListArticle from '../components/list_article.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getArticleHot} from '../actions/getArticle.js';
import Loading from '../components/loading.jsx';
import {checkLogin} from '../actions/authAction.js';

class Hot extends Component{
    constructor(props){
        super(props)
        this.state ={
            hot: [],
            page: 1,
            name:''
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.NextPage = this.NextPage.bind(this);
    }


    componentDidMount(){

            if (!this.props.page.hot) {
                this.props.getArticleHot(1);
            }
            this.props.page.hot = 2;
            document.title = 'Các bài viết hot';
            window.addEventListener('scroll', this.handleScroll);

    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        let scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        let clientHeight = window.innerHeight;
        let scrolledToBottom = Math.ceil(scrollTop + clientHeight + 100) >= scrollHeight;

        if(scrolledToBottom && this.props.hot.isloading === false && this.props.page.hot<=4){
            this.NextPage(this.props.page.hot);
        }
    }

    NextPage = (page)=>{
        this.props.hot.isloading = true;
        this.props.page.hot = page + 1;
        this.setState({page: 1});
        this.props.getArticleHot(page);
    }

    render(){

        let list_article = this.props.hot.hot;
        let check = checkLogin();
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">

                            { list_article.map((object,index)=>{
                                return <ListArticle checklogin={check} key={Math.random()} data={object} />
                            })
                            }
                            { this.props.hot.isloading === true ? <Loading /> : <div id="more-comment-wrap"><a onClick={this.NextPage.bind(this, this.props.page.hot)} className="more-comment">XEM THÊM...</a></div> }

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
        getArticleHot: getArticleHot,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Hot);