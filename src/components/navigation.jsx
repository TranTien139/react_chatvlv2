import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
const axios = require('axios');
const domain = require('../../config_domain.js');

class Navigation extends Component {

    constructor(props){
        super(props);
        this.state = {
            path: '',
            check_login: false
        }
    }

    componentWillMount(){
        let path = window.location.pathname;
        if(path){
            path = path.split('/');
            path = path[1];
            this.setState({path: path});
        }

        let check_login = localStorage.getItem('dangnhap');

        if(check_login) {
            this.setState({check_login: true});
        }

    }

    logout = ()=>{
        axios.post(domain.domain+'/users/logout?access_token='+localStorage.getItem('dangnhap')).then(data=>{
            localStorage.removeItem('dangnhap');
            this.setState({check_login: false});
        }).catch(err=>{

        });
    }

    render() {

        const head = this.state.check_login === false ?
            <ul className="list-inline">
                <li className="list-inline-item"><Link to="/dang-nhap">Đăng nhập</Link></li>
            </ul> : <ul className="list-inline">
                <li className="list-inline-item"><Link to={"/thanh-vien/"}><img src="images/avatar.jpg" /></Link></li>
                <li className="list-inline-item fullname">
                    <Link to={"/thanh-vien/"}>Trần Tiến</Link>
                    <div className="box-logout">
                        <ul className="list-group">
                            <li className="list-group-item"><a onClick={this.logout.bind(this)}>Đăng Xuất</a></li>
                        </ul>
                    </div>
                </li>
                <li className="list-inline-item"><Link to="/dang-bai">Đăng bài</Link></li>
            </ul>


        return(
        <div>
            <header id="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link className={this.state.path ? "navbar-brand logo " : "navbar-brand logo active"} to="/">Chất vl</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse top-menu" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <Link className={this.state.path === "bai-noi-bat" ? "nav-link active" : "nav-link"} to="/bai-noi-bat">bài hot</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={this.state.path === "hinh-anh" ? "nav-link active" : "nav-link"} to="/hinh-anh">hình ảnh</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={this.state.path === "video" ? "nav-link active" : "nav-link"} to="/video">video</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={this.state.path === "tim-kiem" ? "nav-link active" : "nav-link"} to="/tim-kiem">tìm kiếm</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={this.state.path === "thao-luan" ? "nav-link active" : "nav-link"} to="/thao-luan">thảo luận</Link>
                                </li>
                            </ul>
                            <div className="profile-top">
                                {head}
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
        )
    }
}

export default Navigation;

