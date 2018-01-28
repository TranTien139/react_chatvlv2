import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navigation extends Component {
    render() {
        return(
        <div>
            <header id="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link className="navbar-brand logo" to="/">Chất vl</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse top-menu" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <Link className="nav-link active" to="/bai-noi-bat">bài hot</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/hinh-anh">hình ảnh</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/video">video</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/tim-kiem">tìm kiếm</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/thao-luan">thảo luận</Link>
                                </li>
                            </ul>
                            <div className="profile-top">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><a href="#"><img src="images/avatar.jpg" /></a></li>
                                    <li className="list-inline-item fullname">
                                        <a href="#">Trần Tiến</a>
                                        <div className="box-logout">
                                            <ul className="list-group">
                                                <li className="list-group-item"><a href="#">Đăng Xuất</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="list-inline-item"><a href="#">Đăng bài</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
        )
    }
}

export  default Navigation;
