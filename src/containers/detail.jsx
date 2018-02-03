import React, {Component} from 'react';
const axios = require('axios');
const domain = require('../../config_domain.js');
import {Link} from 'react-router-dom'
import {NiceTime} from '../../functions/common.js';
import Loading from '../components/loading.jsx';
import HotDaily from '../components/hot_daily.jsx';

class Detail extends Component {
    constructor(props){
        super(props)
        this.state ={
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
        promise.then(data=>{
            this.setState({detail:data});
        }).catch(err=>{});
    }

    render() {
        let detail = this.state.detail;
        return detail ?  (
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
                                {/* list 1*/}
                                <div className="item-comment">
                                    <div className="box-avatar-cmt float-left">
                                        <img src="images/avatar.jpg" className="img-fluid"/>
                                    </div>
                                    <div className="box-content-cmt float-left">
                                        <div className="name"><cite>Nguyễn Trần Thành</cite></div>
                                        <div className="time">
                                            <time>20:40 Ngày 08/07/2017</time>
                                        </div>
                                        <div className="clearfix"/>
                                        <div className="content-comment">
                                            <p>Cô mà công khai nói xấu cháu mình như vậy là đúng sao? Không hiểu mọi
                                                người nghĩ gì
                                                nhỉ? :)</p>
                                        </div>
                                        <div className="count-like-share">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <div className="comment-reply-link"><a href="#">Trả lời</a></div>
                                                </li>
                                                <li className="list-inline-item"><span className="comment"><a href="#">Xem thêm</a></span>100
                                                    trả lời
                                                </li>
                                                <li className="list-inline-item"><span className="like"><a href="#">thích</a></span>Bạn
                                                    và 100 người thích bình luận này
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="clearfix"/>
                                        <div className="list-reply-comment">
                                            <div className="box-avatar-cmt float-left">
                                                <img src="images/avatar.jpg" className="img-fluid"/>
                                            </div>
                                            <div className="box-content-cmt float-left">
                                                <div className="name"><cite>Nguyễn Trần Thành</cite></div>
                                                <div className="time">
                                                    <time>20:40 Ngày 08/07/2017</time>
                                                </div>
                                                <div className="clearfix"/>
                                                <div className="content-comment">
                                                    <p>Cô mà công khai nói xấu cháu mình như vậy là đúng sao? Không hiểu
                                                        mọi người nghĩ gì
                                                        nhỉ? :)</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clearfix"/>
                                        <div className="box-reply-comment">
                                            <div className="float-left avatar">
                                                <img src="images/avatar.jpg" className="img-fluid"/>
                                            </div>
                                            <div className="float-left get-content">
                                                <div contentEditable="true" id="reply"
                                                     placeholder="Bạn nghĩ gì về bình luận này"/>
                                            </div>
                                            <button className="box-send-comment float-right">
                                                Gửi bình luận
                                            </button>
                                            <div className="clearfix"/>
                                        </div>
                                    </div>
                                    <div className="clearfix"/>
                                </div>
                                {/* list 2*/}
                                <div className="item-comment">
                                    <div className="box-avatar-cmt float-left">
                                        <img src="images/avatar.jpg" className="img-fluid"/>
                                    </div>
                                    <div className="box-content-cmt float-left">
                                        <div className="name"><cite>Nguyễn Trần Thành</cite></div>
                                        <div className="time">
                                            <time>20:40 Ngày 08/07/2017</time>
                                        </div>
                                        <div className="clearfix"/>
                                        <div className="content-comment">
                                            <p>Cô mà công khai nói xấu cháu mình như vậy là đúng sao? Không hiểu mọi
                                                người nghĩ gì
                                                nhỉ? :)</p>
                                        </div>
                                        <div className="count-like-share">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <div className="comment-reply-link"><a href="#">Trả lời</a></div>
                                                </li>
                                                <li className="list-inline-item"><span className="comment"><a href="#">Xem thêm</a></span>100
                                                    trả lời
                                                </li>
                                                <li className="list-inline-item"><span className="like"><a href="#">thích</a></span>Bạn
                                                    và 100 người thích bình luận này
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="clearfix"/>
                                        <div className="list-reply-comment">
                                            <div className="box-avatar-cmt float-left">
                                                <img src="images/avatar.jpg" className="img-fluid"/>
                                            </div>
                                            <div className="box-content-cmt float-left">
                                                <div className="name"><cite>Nguyễn Trần Thành</cite></div>
                                                <div className="time">
                                                    <time>20:40 Ngày 08/07/2017</time>
                                                </div>
                                                <div className="clearfix"/>
                                                <div className="content-comment">
                                                    <p>Cô mà công khai nói xấu cháu mình như vậy là đúng sao? Không hiểu
                                                        mọi người nghĩ gì
                                                        nhỉ? :)</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clearfix"/>
                                        <div className="box-reply-comment">
                                            <div className="float-left avatar">
                                                <img src="images/avatar.jpg" className="img-fluid"/>
                                            </div>
                                            <div className="float-left get-content">
                                                <div contentEditable="true" id="reply"
                                                     placeholder="Bạn nghĩ gì về bình luận này"/>
                                            </div>
                                            <button className="box-send-comment float-right">
                                                Gửi bình luận
                                            </button>
                                            <div className="clearfix"/>
                                        </div>
                                    </div>
                                    <div className="clearfix"/>
                                </div>
                                <div id="more-comment-wrap">
                                    <a href="javascript:void(0);" className="more-comment">XEM THÊM...</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <h4 className="hot-daily">Tin hot trong ngày</h4>
                            <HotDaily />
                        </div>
                    </div>
                </div>
            </div>
        ) : <Loading />
    }
}

export default Detail;