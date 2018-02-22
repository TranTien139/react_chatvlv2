import React,{Component} from 'react'
import ListArticle from '../components/list_article.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getArticleImage} from '../actions/getArticle.js';
import Loading from '../components/loading.jsx';
import {checkLogin} from '../actions/authAction.js';
import {ToastContainer} from "react-toastr";

class Image extends Component{
    constructor(props){
        super(props)
        this.state ={
            image: [],
            page: 1
        }
        this.handleData = this.handleData.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleData(data) {
        this.message.error(data, 'Cảnh báo', {
            closeButton: true,
        });
    }

    componentDidMount(){
        if (!this.props.page.image) {
            this.props.getArticleImage(1);
        }
        this.props.page.image = 2;

        document.title = 'Bài viết hình ảnh';

        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        let myDiv = document.getElementById('main-container');
        let scrollTop = document.body.scrollTop;
        let height = myDiv.clientHeight - 500;

        if(scrollTop - height > 0 && height> 1200 && this.props.image.isloading === false){
            this.NextPage(this.props.page.image);
        }
    }

    NextPage = (page)=>{
        this.props.image.isloading = true;
        this.props.page.image = page + 1;
        this.setState({page: 1});
        this.props.getArticleImage(page);

    }

    render(){

        let list_article = this.props.image.image;
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
                            { this.props.image.isloading === true ? <Loading /> : <div id="more-comment-wrap"><a onClick={this.NextPage.bind(this, this.props.page.image)} className="more-comment">XEM THÊM...</a></div> }

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
        image: state.image,
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getArticleImage: getArticleImage
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Image);