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
        this.handleData = this.handleData.bind(this);
    }

    handleData(data) {
        this.message.error(data, 'Cảnh báo', {
            closeButton: true,
        });
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
                            { this.props.video.isloading ? <Loading /> : <div id="more-comment-wrap"><a onClick={this.NextPage.bind(this, this.props.page.video)} className="more-comment">XEM THÊM...</a></div> }

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