import React,{Component} from 'react'
import ListArticle from '../components/list_article.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getArticleVideo} from '../actions/getArticle.js';
import Loading from '../components/loading.jsx';

class Video extends Component{
    constructor(props){
        super(props)
        this.state ={
            video: [],
            page: 1
        }
    }

    componentWillMount(){
    }

    componentDidMount(){
       if (!this.props.page.video) {
         this.props.getArticleVideo(1);
        }
        this.props.page.video = 2;
    }

    NextPage = (page)=>{
        this.props.video.isloading = true;
        this.props.page.video = page + 1;
        this.setState({page: 1});
        this.props.getArticleVideo(page);
    }

    render(){
        let list_article = this.props.video.video;

        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">

                            <ListArticle data={list_article} />
                            { this.props.video.isloading ? <Loading /> : <div id="more-comment-wrap"><a onClick={this.NextPage.bind(this, this.props.page.video)} className="more-comment">XEM THÊM...</a></div> }

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