import React,{Component} from 'react'
import {Link} from 'react-router-dom';

class Home extends Component{
    constructor(props){
        super(props)
        this.state ={
        }
    }
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="main-item">
                                <div className="row">
                                    <div className="col-sm-8 left-content-item">
                                        <Link to="/chi-tiet" ><img src="images/0.jpg" className="img-responsive" />
                                            <div className="icon-play" />
                                        </Link>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="right-content-item">
                                            <h2><Link to="/chi-tiet"  className="jump_focus">Tiệc
                                                tùng phải thế này hello tieu de nay rat dai</Link></h2>
                                            <div className="uinfo">
                                                bởi <a href="#">Bách Nhiên Tử</a>
                                                <span>1 giờ trước</span>
                                            </div>
                                            <div className="count-like-share">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><span className="view"><img src="icon/view_icon.png" /></span>100
                                                    </li>
                                                    <li className="list-inline-item"><span className="comment"><img src="icon/comment_icon.png" /></span>100
                                                    </li>
                                                    <li className="list-inline-item"><span className="like"><img src="icon/icon_camxuc2.png" /></span>100
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="list-emotion">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_like.gif" /></a></li>
                                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_love.gif" /></a></li>
                                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_haha.gif" /></a></li>
                                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_wow.gif" /></a></li>
                                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_sad.gif" /></a></li>
                                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_angry.gif" /></a></li>
                                                </ul>
                                            </div>
                                            <div className="your_selected">
                                                Bạn: <span><img src="icon/icon_like.gif" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main-item">
                                <div className="row">
                                    <div className="col-sm-8 left-content-item">
                                        <a href="#"><img src="images/0.jpg" className="img-responsive" />
                                            <div className="icon-play" />
                                        </a>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="right-content-item">
                                            <h2><a target="_blank" href className="jump_focus">Tiệc
                                                tùng phải thế này hello tieu de nay rat dai</a></h2>
                                            <div className="uinfo">
                                                bởi <a href="#">Bách Nhiên Tử</a>
                                                <span>1 giờ trước</span>
                                            </div>
                                            <div className="count-like-share">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><span className="view"><img src="icon/view_icon.png" /></span>100
                                                    </li>
                                                    <li className="list-inline-item"><span className="comment"><img src="icon/comment_icon.png" /></span>100
                                                    </li>
                                                    <li className="list-inline-item"><span className="like"><img src="icon/icon_camxuc2.png" /></span>100
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="your_selected">
                                                Bạn: <span><img src="icon/icon_like.gif" /></span>
                                            </div>
                                            <div className="list-emotion">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_like.gif" /></a></li>
                                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_love.gif" /></a></li>
                                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_haha.gif" /></a></li>
                                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_wow.gif" /></a></li>
                                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_sad.gif" /></a></li>
                                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_angry.gif" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main-item">
                                <div className="row">
                                    <div className="col-sm-8 left-content-item">
                                        <a href="#"><img src="images/0.jpg" className="img-responsive" /></a>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="right-content-item">
                                            <h2><a target="_blank" href className="jump_focus">Tiệc
                                                tùng phải thế này hello tieu de nay rat dai</a></h2>
                                            <div className="uinfo">
                                                bởi <a href="#">Bách Nhiên Tử</a>
                                                <span>1 giờ trước</span>
                                            </div>
                                            <div className="count-like-share">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><span className="view"><img src="icon/view_icon.png" /></span>100
                                                    </li>
                                                    <li className="list-inline-item"><span className="comment"><img src="icon/comment_icon.png" /></span>100
                                                    </li>
                                                    <li className="list-inline-item"><span className="like"><img src="icon/icon_camxuc2.png" /></span>100
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="your_selected">
                                                Bạn: <span><img src="icon/icon_like.gif" /></span>
                                            </div>
                                            <div className="list-emotion">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_like.gif" /></a></li>
                                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_love.gif" /></a></li>
                                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_haha.gif" /></a></li>
                                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_wow.gif" /></a></li>
                                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_sad.gif" /></a></li>
                                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_angry.gif" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main-item">
                                <div className="row">
                                    <div className="col-sm-8 left-content-item">
                                        <a href="#"><img src="images/0.jpg" className="img-responsive" /></a>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="right-content-item">
                                            <h2><a target="_blank" href className="jump_focus">Tiệc
                                                tùng phải thế này hello tieu de nay rat dai</a></h2>
                                            <div className="uinfo">
                                                bởi <a href="#">Bách Nhiên Tử</a>
                                                <span>1 giờ trước</span>
                                            </div>
                                            <div className="count-like-share">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><span className="view"><img src="icon/view_icon.png" /></span>100
                                                    </li>
                                                    <li className="list-inline-item"><span className="comment"><img src="icon/comment_icon.png" /></span>100
                                                    </li>
                                                    <li className="list-inline-item"><span className="like"><img src="icon/icon_camxuc2.png" /></span>100
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="your_selected">
                                                Bạn: <span><img src="icon/icon_like.gif" /></span>
                                            </div>
                                            <div className="list-emotion">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_like.gif" /></a></li>
                                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_love.gif" /></a></li>
                                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_haha.gif" /></a></li>
                                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_wow.gif" /></a></li>
                                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_sad.gif" /></a></li>
                                                    <li className="list-inline-item"><a href="#"><img src="icon/icon_angry.gif" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="row top-user-home">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><h3>Top danh hài</h3></li>
                                    <li className="list-inline-item"><a className="active"> Tuần </a></li>
                                    <li className="list-inline-item"><a> Tháng </a></li>
                                    <li className="list-inline-item"><a className="all"> Tất cả </a></li>
                                </ul>
                            </div>
                            <div className="row top-user-list">
                                <div className="col-sm-6 pading-left0">
                                    <div className="row">
                                        <div className="col-4"><a href="#"><img src="images/avatar_user.jpg" className="img-responsive img-user" /></a></div>
                                        <div className="col-8">
                                            <p className="name"><a href="#">Trần Văn Tiến</a></p>
                                            <p><img src="icon/view_icon.png" /><span>&nbsp;100</span></p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4"><a href="#"><img src="images/avatar_user.jpg" className="img-responsive img-user" /></a></div>
                                        <div className="col-8">
                                            <p className="name"><a href="#">Trần Văn Tiến</a></p>
                                            <p><img src="icon/view_icon.png" /><span>&nbsp;100</span></p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4"><a href="#"><img src="images/avatar_user.jpg" className="img-responsive img-user" /></a></div>
                                        <div className="col-8">
                                            <p className="name"><a href="#">Trần Văn Tiến</a></p>
                                            <p><img src="icon/view_icon.png" /><span>&nbsp;100</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 pading-left0">
                                    <div className="row">
                                        <div className="col-4"><a href="#"><img src="images/avatar_user.jpg" className="img-responsive img-user" /></a></div>
                                        <div className="col-8">
                                            <p className="name"><a href="#">Trần Văn Tiến</a></p>
                                            <p><img src="icon/view_icon.png" /><span>&nbsp;100</span></p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4"><a href="#"><img src="images/avatar_user.jpg" className="img-responsive img-user" /></a></div>
                                        <div className="col-8">
                                            <p className="name"><a href="#">Trần Văn Tiến</a></p>
                                            <p><img src="icon/view_icon.png" /><span>&nbsp;100</span></p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4"><a href="#"><img src="images/avatar_user.jpg" className="img-responsive img-user" /></a></div>
                                        <div className="col-8">
                                            <p className="name"><a href="#">Trần Văn Tiến</a></p>
                                            <p><img src="icon/view_icon.png" /><span>&nbsp;100</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;