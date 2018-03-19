import React,{Component} from 'react';
const axios = require('axios');
const domain = require('../../config_domain.js');
import {Link} from 'react-router-dom';
import {setStorage} from '../actions/authAction.js';
import {ToastContainer} from "react-toastr";
import {Redirect} from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {ChangeToSlug} from "../../functions/common.js";

class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            loginError: false,
            redirect: false,
            redirectLink: '/'
        }
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentWillMount(){
        let redirect = window.location.search;
        if(redirect){
            redirect =  redirect.replace('?redirect=','');
            this.setState({redirectLink: redirect});
        }
        document.title = 'Đăng nhập';
    }

    login = (event)=>{
        event.preventDefault();
        let input_login = {"email":this.email.value,"password":this.password.value};
        this.handleLogin(input_login);
    }

    handleLogin = (input_login)=>{
        axios.post(domain.domain+'/users/login',input_login).then(res=>{
            res = res.data;
            let token = res.id;
            if(token && res.userId){
                let getUserInfo = new Promise((resolve,reject)=>{
                    axios.post(domain.domain+'/user_generals/getUserInfo',{"id": res.userId}).then(respon=>{
                        respon = respon.data;
                        respon = respon.data;
                        resolve(respon)
                    }).catch(err=>{
                        reject(err);
                    });
                });
                getUserInfo.then(data=>{
                    this.message.success('Bạn đã đăng nhập thành công', 'Thành công', {
                        closeButton: true,
                    });
                    setStorage(token, data);
                    let redirectLink = this.state.redirectLink;
                    setTimeout(function () {
                        window.location.href = redirectLink;
                    }, 1000);

                }).catch(err=>{
                    this.message.error('Có lỗi xảy ra khi đăng nhập', 'Cảnh báo', {
                        closeButton: true,
                    });
                });
            }
        }).catch(err=>{
            this.message.error('Bạn đã nhập sai email hoặc mật khẩu ', 'Cảnh báo', {
                closeButton: true,
            });
        });
    }

    signup(res, type) {
        let postData;
        if (type === 'facebook' && res.accessToken) {
            let slug = ChangeToSlug(res.name) +'@'+ Math.floor(Math.random() * Math.floor(10000));
            postData = {
                id_social: res.id,
                level: "member",
                image: res.picture.data.url,
                userSlug: slug,
                name: res.name,
                email: res.email || res.id + "@facebook.com",
                password: "123456",
                created_at: Date.now()
            };
        }

        // if (type === 'google' && res.w3.U3) {
        //     let slug = ChangeToSlug(res.w3.ig) +'@'+ Math.floor(Math.random() * Math.floor(10000));
        //     postData = {
        //         id_social: res.El,
        //         level: "member",
        //         image: res.w3.Paa,
        //         userSlug: slug,
        //         name: res.w3.ig,
        //         email: res.w3.U3 || res.id + "@google.com",
        //         password: "123456",
        //         created_at: Date.now()
        //     };
        // }

        if (postData) {

            let getUserInfo = new Promise((resolve,reject)=>{
                axios.post(domain.domain+'/user_generals/getUserInfoEmail',{"email": postData.email}).then(respon=>{
                    respon = respon.data;
                    respon = respon.data;
                    resolve(respon)
                }).catch(err=>{
                    reject(err);
                });
            });

            getUserInfo.then(data=>{
                if(data) {
                    let input_login = {"email":data.email,"password":"123456"};
                    this.handleLogin(input_login);
                }else{
                    axios.post(domain.domain+'/users',postData).then(res=>{
                        res = res.data;
                        let input_login = {"email":res.email,"password":"123456"};
                        this.handleLogin(input_login);
                    });
                }
            }).catch(err=>{
                this.message.error('Có lỗi xảy ra khi đăng nhập', 'Cảnh báo', {
                    closeButton: true,
                });
            });

        } else {
            console.log("deo co du lieu");
        }
    }

    render(){
        const responseFacebook = (response) => {
            this.signup(response, 'facebook');
        }

        // const responseGoogle = (response) => {
        //     console.log("google console");
        //     console.log(response);
        //     this.signup(response, 'google');
        // }

        return(
            <div>
                <div className="container">
                    <form onSubmit={this.login.bind(this)}>
                       <div className="row">
                           <div className="col-sm-3"></div>
                           <div className="col-sm-6">
                               <div className="form-group">
                                   <label htmlFor="email">Địa chỉ email: </label>
                                   <input type="email" className="form-control" ref={(email) => this.email = email} required />
                               </div>
                               <div className="form-group">
                                   <label htmlFor="pwd">Mật khẩu: </label>
                                   <input type="password" className="form-control" ref={(password)=>this.password = password} required />
                               </div>
                               <button type="submit" className="btn btn-primary">Đăng nhập</button>&nbsp;&nbsp;
                               <Link to={'/dang-ki'}>Đăng kí</Link>
                           </div>
                       </div>
                    </form>

                    <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6">
                            <hr/>
                            <FacebookLogin
                                appId="1809357332636523"
                                autoLoad={false}
                                fields="name,email,picture"
                                callback={responseFacebook}
                                cssClass="btn btn-success"
                                icon="fa-facebook"
                                textButton="  Đăng nhập với facebook"
                            />
                        </div>
                    </div>

                    {/*<GoogleLogin*/}
                        {/*clientId="401817212429-ep1krpisq390lgfpjp6f26lpt56vp0ca.apps.googleusercontent.com"*/}
                        {/*buttonText="Login with Google"*/}
                        {/*onSuccess={responseGoogle}*/}
                        {/*onFailure={responseGoogle}/>*/}

                </div>

                <ToastContainer
                    ref={ref => this.message = ref}
                    className="toast-top-right"
                />

            </div> )
    }
}

export default Login;