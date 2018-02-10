import React, {Component} from 'react';
const axios = require('axios');
const domain = require('../../config_domain.js');
import {Link} from 'react-router-dom'
import {NiceTime} from '../../functions/common.js';
import Loading from '../components/loading.jsx';
import HotDaily from '../components/hot_daily.jsx';
import Comment from  '../components/comment.jsx';

class Detail extends Component {
    constructor(props){
        super(props)
        this.state ={
            isloading: true
        }
    }

    componentWillMount(){

        let id_article = this.props.match.params.id;

        let promise = new Promise((resolve, reject)=>{
            axios.post(domain.domain+'/articles/getArticleDetail',{user_id: "0",id_article: id_article }).then(res=>{
                res = res.data;
                res = res.data;
                resolve(res);
            }).catch(err=>{
                reject('');
            });
        });

        let promise1 = new Promise((resolve, reject)=>{
            axios.post(domain.domain+'/articles/getRandomArticle',{user_id: "0"}).then(res=>{
                res = res.data;
                res = res.data;
                resolve(res);
            }).catch(err=>{
                reject('');
            });
        });

        let comment = new Promise((resolve, reject)=>{
            axios.post(domain.domain+'/comment/getCommentByArticle',{user_id: "0","article_id":id_article}).then(res=>{
                res = res.data;
                res = res.data.results;
                resolve(res);
            }).catch(err=>{
                reject('');
            });
        });

        Promise.all([promise,promise1,comment]).then((data)=>{
            console.log(data);
            this.setState({detail: data[0], hot_daily:data[1],comment: data[2]});
        });
    }

    componentWillReceiveProps(nextProps){
        let id_article = nextProps.match.params.id;

        let promise = new Promise((resolve, reject)=>{
            axios.post(domain.domain+'/articles/getArticleDetail',{user_id: "0",id_article: id_article }).then(res=>{
                res = res.data;
                res = res.data;
                resolve(res);
            }).catch(err=>{
                reject('');
            });
        });

        let promise1 = new Promise((resolve, reject)=>{
            axios.post(domain.domain+'/articles/getRandomArticle',{user_id: "0"}).then(res=>{
                res = res.data;
                res = res.data;
                resolve(res);
            }).catch(err=>{
                reject('');
            });
        });

        let comment = new Promise((resolve, reject)=>{
            axios.post(domain.domain+'/comment/getCommentByArticle',{user_id: "0","article_id":id_article}).then(res=>{
                res = res.data;
                res = res.data.results;
                resolve(res);
            }).catch(err=>{
                reject('');
            });
        });

        Promise.all([promise,promise1,comment]).then((data)=>{
            this.setState({detail: data[0], hot_daily:data[1], comment: data[2]});
        });
    }


    render() {
        let detail = this.state.detail;
        let hot_daily = this.state.hot_daily;
        let comment_list = this.state.comment;

        return detail && hot_daily && comment_list ?  (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 detail-article">
                            <h1 className="main-title">{detail.title}</h1>
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="list-emotion-detail">
                                        Bạn: <span><img src="icon/icon_like.gif"/></span>
                                    </div>
                                </div>
                                <div className="col-sm-9">
                                    <div className="list-emotion-detail">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#"><img src="icon/icon_like.gif"/></a>
                                            </li>
                                            <li className="list-inline-item"><a href="#"><img src="icon/icon_love.gif"/></a>
                                            </li>
                                            <li className="list-inline-item"><a href="#"><img src="icon/icon_haha.gif"/></a>
                                            </li>
                                            <li className="list-inline-item"><a href="#"><img src="icon/icon_wow.gif"/></a>
                                            </li>
                                            <li className="list-inline-item"><a href="#"><img src="icon/icon_sad.gif"/></a>
                                            </li>
                                            <li className="list-inline-item"><a href="#"><img
                                                src="icon/icon_angry.gif"/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            { detail.linkVideo !=='' ?  <iframe width="100%" height={500} src={"https://www.youtube.com/embed/"+detail.linkVideo}
                                                        frameBorder={0} allow="encrypted-media" allowFullScreen>
                            </iframe>: <div className="text-center"><img class="fluid text-center"  src={detail.image} /> </div> }

                            <div className="row">
                                <div className="col-sm-6 top-user-list user-info">
                                    <div className="float-left">
                                        <Link to={'/user/' + detail.getUser.userSlug}><img src={detail.getUser.image}
                                                         className="img-fluid img-user"/></Link>
                                    </div>
                                    <div className="float-left">
                                        <p className="name"><Link to={'/user/' + detail.getUser.userSlug}>{detail.getUser.name}</Link></p>
                                        <p><img src="icon/view_icon.png"/><span>&nbsp;{ NiceTime(detail.published_at) }</span></p>
                                    </div>
                                </div>
                                <div className="col-sm-6 ">
                                    <div className="count-like-share like-share-detail float-right">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><span className="view"><img
                                                src="icon/view_icon.png"/></span>&nbsp;{ detail.total_view || 0 }
                                            </li>
                                            <li className="list-inline-item"><span className="comment"><img
                                                src="icon/comment_icon.png"/></span>&nbsp;{ detail.total_comment || 0 }
                                            </li>
                                            <li className="list-inline-item"><span className="like"><img
                                                src="icon/icon_camxuc2.png"/></span>&nbsp;{ detail.total_like || 0 }
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="box-cmment">
                                <div className="main-box-comment">
                                    <div className="float-left avatar">
                                        <img src="images/avatar.jpg" className="img-fluid"/>
                                    </div>
                                    <div className="float-left get-content">
                                        <div contentEditable="true" id="comment"
                                             placeholder="Bạn nghĩ gì về bài viết này?"/>
                                    </div>
                                    <button className="box-send-comment float-right">
                                        Gửi bình luận
                                    </button>
                                    <div className="clearfix"/>
                                </div>
                            </div>
                            <div className="box-list-comment">

                                <Comment comment_list ={comment_list} />

                                <div id="more-comment-wrap">
                                    <a href="javascript:void(0);" className="more-comment">XEM THÊM...</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <h4 className="hot-daily">Tin hot trong ngày</h4>
                            <HotDaily hot_daily={hot_daily} />
                        </div>
                    </div>
                </div>
            </div>
        ) : <Loading />
    }
}

export default Detail;