import React, {Component} from 'react';
const axios = require('axios');
const domain = require('../../config_domain.js');
import {Link} from 'react-router-dom'
import {NiceTime} from '../../functions/common.js';
import Loading from '../components/loading.jsx';
import HotDaily from '../components/hot_daily.jsx';
import Comment from  '../components/comment.jsx';
import {checkLogin} from '../actions/authAction.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ToastContainer} from "react-toastr";

class Detail extends Component {
    constructor(props){
        super(props)
        this.state ={
            isloading: true,
            islike: false,
            icon: '',
            page_comment:1,
            next_comment: false
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
            axios.post(domain.domain+'/comment/getCommentByArticle',{user_id: "0","article_id":id_article, size:10, page:this.state.page_comment}).then(res=>{
                res = res.data;
                res = res.data;
                resolve(res);
            }).catch(err=>{
                reject('');
            });
        });

        Promise.all([promise,promise1,comment]).then((data)=>{
            let next_cmt = data[2].next_page === -1 ? false : true;
            this.setState({detail: data[0], hot_daily:data[1],comment: data[2].results,next_comment:next_cmt});
            document.title = data[0].title;
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
            axios.post(domain.domain+'/comment/getCommentByArticle',{user_id: "0","article_id":id_article, size:10, page:this.state.page_comment}).then(res=>{
                res = res.data;
                res = res.data;
                resolve(res);
            }).catch(err=>{
                reject('');
            });
        });

        Promise.all([promise,promise1,comment]).then((data)=>{
            let next_cmt = data[2].next_page === -1 ? false : true;
            this.setState({detail: data[0], hot_daily:data[1],comment: data[2].results,next_comment:next_cmt});
            document.title = data[0].title;
        });
    }

    LoadMoreComment = ()=>{
        let id_article =  this.props.match.params.id;
        let comment = new Promise((resolve, reject)=>{
            axios.post(domain.domain+'/comment/getCommentByArticle',{user_id: "0","article_id":id_article, size:10, page: this.state.page_comment+1 }).then(res=>{
                res = res.data;
                res = res.data;
                resolve(res);
            }).catch(err=>{
                reject('');
            });
        });
        comment.then(data=>{
            let next_cmt = data.next_page === -1 ? false : true;
            let page_comment = this.state.page_comment+1;
            let data_cmt = this.state.comment.concat(data.results);

            this.setState({comment: data_cmt,next_comment:next_cmt,page_comment:page_comment});
        });
    }

    Emotion = (action,article_id)=>{
        let check = checkLogin();
        if(check) {
            let promise = new Promise((resolve, reject) => {
                axios.post(domain.domain + '/articles/likeArticle', {
                    user_id: check.id,
                    article_id: article_id,
                    type: action
                }).then(res => {
                    res = res.data;
                    resolve(res);
                }).catch(err => {
                    reject([]);
                });
            });

            promise.then(data => {
                if(data.code === 200) {
                    this.setState({islike:true,icon:action});
                }
            }).catch(err => {
            });
        }else {
            this.message.error('Bạn phải đăng nhập mới được thực hiện hành động này', 'Cảnh báo', {
                closeButton: true,
            });
        }
    }

    sendComment = (event)=>{
        event.preventDefault();
        var text = this.refs.comment.innerHTML.trim();
        let check = checkLogin();
        if(check){
            if(text.length <= 3){
                return this.message.error('Bạn phải nhập nội dung ít nhất 3 kí tự', 'Cảnh báo', {
                    closeButton: true,
                });
            }
             axios.post(domain.domain + '/comment/addComment', {
                    user_id: check.id,
                    content: text,
                    article_id: this.props.match.params.id
             }).then(res => {
                    res = res.data;
                    res = res.data;
                    let old_comment = this.state.comment;
                    if(!old_comment){
                        old_comment = [];
                    }
                    old_comment.unshift(res);
                    this.setState({comment:old_comment});
                    this.refs.comment.innerHTML = '';
                    this.message.success('Bạn đã bình luận thành công', 'Thành công', {
                        closeButton: true,
                    });
             }).catch(err => {
                 this.message.error('Có lỗi xảy ra', 'Cảnh báo', {
                     closeButton: true,
                 });
             });

        }else {
            this.message.error('Bạn phải đăng nhập mới được thực hiện hành động này', 'Cảnh báo', {
                closeButton: true,
            });
        }
    };


    render() {
        let detail = this.state.detail;
        let hot_daily = this.state.hot_daily;
        let comment_list = this.state.comment;

        let check_like = false;
        let icon = '';
        let check = null;
        if(detail) {
            check = checkLogin();
            if (check && detail.likes) {
                let check_likes = detail.likes.filter(obj => {
                    return obj.user_id.toString() === check.id.toString();
                });
                if (check_likes.length > 0) {
                    check_like = true;
                    icon = check_likes[0].type;
                }
            }
        }

        return detail && hot_daily && comment_list ?  (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 detail-article">
                            <h1 className="main-title">{detail.title}</h1>
                            <div className="row">
                                <div className="col-sm-3">
                                    { this.state.icon !== '' || check_like === true ? <div className="list-emotion-detai">Bạn: <span><img src={"icon/icon_"+(this.state.icon || icon)+".gif"} /></span></div> : '' }
                                </div>
                                <div className="col-sm-9">
                                    <div className="list-emotion-detail">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a onClick={this.Emotion.bind(this,'like',detail.id)} title="like"><img src="icon/icon_like.gif" /></a></li>
                                            <li className="list-inline-item"><a onClick={this.Emotion.bind(this,'love',detail.id)} title="love"><img src="icon/icon_love.gif" /></a></li>
                                            <li className="list-inline-item"><a onClick={this.Emotion.bind(this,'haha',detail.id)} title="haha"><img src="icon/icon_haha.gif" /></a></li>
                                            <li className="list-inline-item"><a onClick={this.Emotion.bind(this,'wow',detail.id)} title="wow"><img src="icon/icon_wow.gif" /></a></li>
                                            <li className="list-inline-item"><a onClick={this.Emotion.bind(this,'sad',detail.id)} title="sad"><img src="icon/icon_sad.gif" /></a></li>
                                            <li className="list-inline-item"><a onClick={this.Emotion.bind(this,'angry',detail.id)} title="angry"><img src="icon/icon_angry.gif" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            { detail.linkVideo !=='' ?  <div className="wrapper"><div className="h_iframe">
                                <img className="ratio" src="http://placehold.it/16x9"/>
                                <iframe src={"https://www.youtube.com/embed/"+detail.linkVideo}
                                                        frameBorder={0}  allowFullScreen>
                            </iframe></div></div>: <div className="text-center"><img className="img-fluid text-center"  src={detail.image} /> </div> }

                            <div className="row">
                                <div className="col-sm-6 top-user-list user-info">
                                    <div className="float-left">
                                        <Link to={'/thanh-vien/' + detail.getUser.userSlug}><img src={detail.getUser.image}
                                                         className="img-fluid img-user"/></Link>
                                    </div>
                                    <div className="float-left">
                                        <p className="name"><Link to={'/thanh-vien/' + detail.getUser.userSlug}>{detail.getUser.name}</Link></p>
                                        <p>Xuất bản: <span>&nbsp;{ NiceTime(detail.published_at) }</span></p>
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
                                <form onSubmit={this.sendComment.bind(this)}>
                                <div className="main-box-comment">
                                    <div className="float-left avatar">
                                        { check !== null? <img src={check.image} className="img-fluid"/> :<img src="images/avatar.jpg" className="img-fluid"/> }
                                    </div>
                                    <div className="float-left get-content">
                                        <div contentEditable="true" id="comment" ref="comment" placeholder="Bạn nghĩ gì về bài viết này?"/>
                                    </div>
                                    <button className="box-send-comment float-right" type="submit">
                                        Gửi bình luận
                                    </button>
                                    <div className="clearfix"/>
                                </div>
                                </form>
                            </div>
                            <div className="box-list-comment">

                                { comment_list.map((object, index) => {
                                    return <Comment key={Math.random()} object_comment={object} />
                                })
                                }
                                {this.state.next_comment === true ?
                                    <div id="more-comment-wrap">
                                        <a className="more-comment" onClick={this.LoadMoreComment.bind(this)}>XEM THÊM...</a>
                                    </div>:''
                                }

                            </div>
                        </div>
                        <div className="col-sm-4">
                            <h4 className="hot-daily">Tin hot trong ngày</h4>
                            <HotDaily hot_daily={hot_daily} />
                        </div>
                    </div>
                </div>

                <ToastContainer
                    ref={ref => this.message = ref}
                    className="toast-top-right"
                />

            </div>
        ) : <Loading />
    }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);