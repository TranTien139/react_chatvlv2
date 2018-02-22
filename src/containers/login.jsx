import React,{Component} from 'react';
const axios = require('axios');
const domain = require('../../config_domain.js');
import {Link} from 'react-router-dom';
import {setStorage} from '../actions/authAction.js';
import {ToastContainer} from "react-toastr";

class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
        this.login = this.login.bind(this);
    }

    componentWillMount(){
        document.title = 'Đăng nhập';
    }

    login = (event)=>{
        event.preventDefault();
        let input_login = {"email":this.email.value,"password":this.password.value};
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
                    setTimeout(function () {
                        window.location.href = '/';
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

    render(){
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
                </div>

                <ToastContainer
                    ref={ref => this.message = ref}
                    className="toast-top-right"
                />

            </div> )
    }
}

export default Login;