import React,{Component} from 'react'
import ListArticle from '../components/list_article.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getArticleHot,getArticleImage,getArticleVideo} from '../actions/getArticle.js';
import Loading from '../components/loading.jsx';
import {checkLogin} from '../actions/authAction.js';
import {ToastContainer} from "react-toastr";

class Hot extends Component{
    constructor(props){
        super(props)
        this.state ={
            hot: [],
            page: 1,
            name:''
        }
        this.handleData = this.handleData.bind(this);
    }

    handleData(data) {
        this.message.error(data, 'Cảnh báo', {
            closeButton: true,
        });
    }

    componentDidMount(){

            if (!this.props.page.hot) {
                this.props.getArticleHot(1);
            }
            this.props.page.hot = 2;

    }

    NextPage = (page)=>{
        this.props.hot.isloading = true;
        if(this.props.location.pathname === '/bai-noi-bat') {
            this.props.page.hot = page + 1;
            this.setState({page: 1});
            this.props.getArticleHot(page);
        }else if(this.props.location.pathname === '/hinh-anh'){
            this.props.page.image = page + 1;
            this.setState({page: 1});
            this.props.getArticleImage(page);
        }else {
            this.props.page.video = page + 1;
            this.setState({page: 1});
            this.props.getArticleVideo(page);
        }
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
                                return <ListArticle checklogin={check} handlerFromParant={this.handleData} key={Math.random()} data={object} />
                            })
                            }
                            { this.props.hot.isloading ? <Loading /> : <div id="more-comment-wrap"><a onClick={this.NextPage.bind(this, this.props.page.hot)} className="more-comment">XEM THÊM...</a></div> }

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