import React,{Component} from 'react';
const axios = require('axios');
const domain = require('../../config_domain.js');

class Login extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }

    login = (event)=>{
        let input_login = {"email":this.email.value,"password":this.password.value};
        let promise = new Promise((resolve, reject)=>{
            axios.post(domain.domain+'/users/login',input_login).then(res=>{
                res = res.data;
                resolve(res);
            }).catch(err=>{
                reject(err);
            });
        });

        promise.then(data=>{
            let token = data.id;
            if(token){
                localStorage.setItem('dangnhap',token);
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
                               <div className="form-group form-check">
                                   <label className="form-check-label">
                                       <input className="form-check-input" type="checkbox" /> Nhớ mật khẩu
                                   </label>
                               </div>
                               <button type="submit" className="btn btn-primary">Đăng nhập</button>
                           </div>
                       </div>
                    </form>
                </div>
            </div> )
    }
}

export default Login;