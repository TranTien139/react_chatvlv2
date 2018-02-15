import React,{Component} from 'react'
import ListArticle from '../components/list_article.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getArticleImage} from '../actions/getArticle.js';
import Loading from '../components/loading.jsx';

class Image extends Component{
    constructor(props){
        super(props)
        this.state ={
            image: [],
            page: 1
        }
    }

    componentWillMount(){
    }

    componentDidMount(){
        if (!this.props.page.image) {
            this.props.getArticleImage(1);
        }
        this.props.page.image = 2;

    }

    NextPage = (page)=>{
        this.props.image.isloading = true;
        this.props.page.image = page + 1;
        this.setState({page: 1});
        this.props.getArticleImage(page);

    }

    render(){

        let list_article = this.props.image.image;

        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">

                            <ListArticle data={list_article} />
                            { this.props.image.isloading ? <Loading /> : <div id="more-comment-wrap"><a onClick={this.NextPage.bind(this, this.props.page.image)} className="more-comment">XEM THÊM...</a></div> }

                        </div>

                    </div>
                </div>
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