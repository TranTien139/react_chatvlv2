import React, {Component} from 'react'

class Detail extends Component {
    constructor(props){
        super(props)
        this.state ={
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 detail-article">
                            <h1 className="main-title">Cập nhật tin tức U23 Việt Nam trước trận Chung kết U23 Châu Á với
                                U23 Uzbekistan
                                ngày 27.01.2018</h1>
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
                            <iframe width="100%" height={500} src="https://www.youtube.com/embed/f_zUFsaLOGY"
                                    frameBorder={0} allow="encrypted-media" allowFullScreen>
                            </iframe>
                            <div className="row">
                                <div className="col-sm-6 top-user-list user-info">
                                    <div className="float-left">
                                        <a href="#"><img src="images/avatar_user.jpg"
                                                         className="img-responsive img-user"/></a>
                                    </div>
                                    <div className="float-left">
                                        <p className="name"><a href="#">Trần Văn Tiến</a></p>
                                        <p><img src="icon/view_icon.png"/><span>&nbsp;100</span></p>
                                    </div>
                                </div>
                                <div className="col-sm-6 ">
                                    <div className="count-like-share like-share-detail float-right">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><span className="view"><img
                                                src="icon/view_icon.png"/></span>100
                                            </li>
                                            <li className="list-inline-item"><span className="comment"><img
                                                src="icon/comment_icon.png"/></span>100
                                            </li>
                                            <li className="list-inline-item"><span className="like"><img
                                                src="icon/icon_camxuc2.png"/></span>100
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
                            <div className="row item-daily-post">
                                <div className="col-5"><a href="#"><img src="images/0.jpg" className="img-fluid"/></a>
                                </div>
                                <div className="col-7">
                                    <h3 className="title"><a href="#">Cập nhật tin tức U23 Việt Nam trước trận Chung kết
                                        U23 Châu Á với U23 Uzbekistan
                                        ngày 27.01.2018</a></h3>
                                    <p>Đăng bởi <span><a href="#">Trần Tiến</a></span></p>
                                    <p>12 giờ trước</p>
                                </div>
                            </div>
                            <div className="row item-daily-post">
                                <div className="col-5"><a href="#"><img src="images/0.jpg" className="img-fluid"/></a>
                                </div>
                                <div className="col-7">
                                    <h3 className="title"><a href="#">Cập nhật tin tức U23 Việt Nam trước trận Chung kết
                                        U23 Châu Á với U23 Uzbekistan
                                        ngày 27.01.2018</a></h3>
                                    <p>Đăng bởi <span><a href="#">Trần Tiến</a></span></p>
                                    <p>12 giờ trước</p>
                                </div>
                            </div>
                            <div className="row item-daily-post">
                                <div className="col-5"><a href="#"><img src="images/0.jpg" className="img-fluid"/></a>
                                </div>
                                <div className="col-7">
                                    <h3 className="title"><a href="#">Cập nhật tin tức U23 Việt Nam trước trận Chung kết
                                        U23 Châu Á với U23 Uzbekistan
                                        ngày 27.01.2018</a></h3>
                                    <p>Đăng bởi <span><a href="#">Trần Tiến</a></span></p>
                                    <p>12 giờ trước</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail;