import React,{Component} from 'react'
import ListArticle from '../components/list_article.jsx';
import Loading from '../components/loading.jsx';
const axios =  require('axios');
const domain = require('../../config_domain.js');
import {checkLogin} from '../actions/authAction.js';
import {ToastContainer} from "react-toastr";

class Member extends Component{
    constructor(props){
        super(props)
        this.state ={
            article: '',
            page: 1,
            isloading: true
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.NextPage = this.NextPage.bind(this);
    }

    componentDidMount(){

        let slug_user = this.props.match.params.slug;

        document.title = 'Thành viên';

        let promise = new Promise((resolve, reject)=>{
            axios.post(domain.domain+'/articles/getArticleNew',{user_id: "0", slug_user:slug_user, size:10,page: this.state.page}).then(res=>{
                res = res.data;
                res = res.data.results;
                resolve(res);
            }).catch(err=>{
                reject([]);
            });
        });

        Promise.all([promise]).then((data)=>{
            this.setState({article: data[0],isloading: false});
        });

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

        if(scrolledToBottom && this.state.isloading === false && this.state.page<=4){
            his.NextPage(this.state.page +1);
        }
    }


    NextPage = (page)=>{
        this.setState({isloading:true, page: page});

        let slug_user = this.props.match.params.slug;

        let promise = new Promise((resolve, reject)=>{
            axios.post(domain.domain+'/articles/getArticleNew',{user_id: "0", slug_user:slug_user, size:10,page: this.state.page}).then(res=>{
                res = res.data;
                res = res.data.results;
                resolve(res);
            }).catch(err=>{
                reject([]);
            });
        });

        promise.then((data)=>{
            let more_article = this.state.article;
            more_article = more_article.concat(data);
            let isloading = false;
            if(data.length === 0){
                isloading = 1;
            }
            this.setState({article: more_article, isloading: isloading});
        });
    }

    render(){
        let list_article = this.state.article;
        let check = checkLogin();

        return list_article ? (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">

                            { list_article.map((object,index)=>{
                                return <ListArticle checklogin={check} key={Math.random()} data={object} />
                            })
                            }
                            { this.state.isloading === true ? <Loading /> : <div id="more-comment-wrap"><a onClick={this.NextPage.bind(this, this.state.page +1)} className="more-comment">XEM THÊM...</a></div> }

                        </div>

                    </div>
                </div>
            </div>
        ) : <Loading />;
    }
}

export default Member;