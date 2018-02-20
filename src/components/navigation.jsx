import React, {Component} from 'react';
import {Link} from 'react-router-dom';
const axios = require('axios');
const domain = require('../../config_domain.js');
import {getToken,removeStorage,checkLogin} from '../actions/authAction.js';


class Navigation extends Component {

    constructor(props){
        super(props);
        this.state = {
            path: '',
            check_login: false,
            userInfo: ''
        }
    }

    componentWillMount(){
        let path = window.location.pathname;
        if(path){
            path = path.split('/');
            path = path[1];
            this.setState({path: path});
        }

        let check_login = checkLogin();
        if(check_login) {
            this.setState({check_login: true,userInfo: check_login});
        }

    }

    logout = ()=>{
        let gettoken = getToken();
        axios.post(domain.domain+'/users/logout?access_token='+ gettoken).then(data=>{
            removeStorage();
            this.setState({check_login: false});
            window.location.href = '';
        }).catch(err=>{
            removeStorage();
            this.setState({check_login: false});
            window.location.href = '';
        });
    }

    render() {
        const head = this.state.check_login === false ?
            <ul className="list-inline">
                <li className="list-inline-item"><Link to="/dang-nhap">Đăng nhập</Link></li>
            </ul> : <ul className="list-inline">
                <li className="list-inline-item"><Link to={"/thanh-vien/" + this.state.userInfo.userSlug}><img src={this.state.userInfo.image} /></Link></li>
                <li className="list-inline-item fullname">
                    <Link to={"/thanh-vien/" + this.state.userInfo.userSlug}>{this.state.userInfo.name}</Link>
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

