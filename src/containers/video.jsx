import React,{Component} from 'react'
import ListArticle from '../components/list_article.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getArticleVideo} from '../actions/getArticle.js';
import Loading from '../components/loading.jsx';
import {checkLogin} from '../actions/authAction.js';
import {ToastContainer} from "react-toastr";

class Video extends Component{
    constructor(props){
        super(props)
        this.state ={
            video: [],
            page: 1
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.NextPage = this.NextPage.bind(this);
    }

    componentDidMount(){
       if (!this.props.page.video) {
         this.props.getArticleVideo(1);
        }
        this.props.page.video = 2;
        document.title = 'Bài viết video';
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

        if(scrolledToBottom && this.props.video.isloading === false && this.props.page.video<=4){
            this.NextPage(this.props.page.video);
        }
    }

    NextPage = (page)=>{
        this.props.video.isloading = true;
        this.props.page.video = page + 1;
        this.setState({page: 1});
        this.props.getArticleVideo(page);
    }

    render(){
        let list_article = this.props.video.video;

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
                            { this.props.video.isloading === true ? <Loading /> : <div id="more-comment-wrap"><a onClick={this.NextPage.bind(this, this.props.page.video)} className="more-comment">XEM THÊM...</a></div> }

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        video: state.video,
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getArticleVideo: getArticleVideo,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Video);