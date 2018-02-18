import React,{Component} from 'react';
const axios = require('axios');
const domain = require('../../config_domain.js');
import {Link} from 'react-router-dom';
import {setStorage} from '../actions/authAction.js';

class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }

    login = (event)=>{
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
                    setStorage(token, data);
                    window.location.href = '/';
                });
            }
        }).catch(err=>{
        });
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <div className="container">
                    <form onSubmit={this.login.bind(this)}>
                       <div className="row">
                           <div className="col-sm-6 offset-3">
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
            </div> )
    }
}

export default Login;