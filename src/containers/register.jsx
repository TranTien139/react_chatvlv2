import React,{Component} from 'react';
const axios = require('axios');
const domain = require('../../config_domain.js');
import {Link} from 'react-router-dom';
const bcrypt   = require('bcrypt-nodejs');
import {ToastContainer} from "react-toastr";
import {ChangeToSlug} from "../../functions/common.js";

class Register extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
        this.register = this.register.bind(this);
    }

    componentWillMount(){
        document.title = 'Đăng kí thành viên';
    }

    register = (event)=>{
        event.preventDefault();

        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var checkemail = re.test(this.email.value);
        var slug = ChangeToSlug(this.name.value) +'@'+ Math.floor(Math.random() * Math.floor(10000));
        let pass = bcrypt.hashSync(this.password.value, bcrypt.genSaltSync(8), null);

        let input_register = {"id_social": "","level":"member","image":this.image.value,"userSlug":slug,"name":this.name.value,"email":this.email.value,"password":pass, "created_at": Date.now()};

        if(checkemail && this.password.value === this.repassword.value) {
            axios.post(domain.domain+'/users',input_register).then(res=>{
                res = res.data;
                this.message.success('Bạn đã đăng kí user thành công', 'Thành công', {
                    closeButton: true,
                });
                setTimeout(function () {
                    window.location.href = '/';
                }, 1000);
            }).catch(err=>{
                this.message.error('Có lỗi xảy ra khi đăng kí', 'Cảnh báo', {
                    closeButton: true,
                });
            });
        }else {
            this.message.error('Bạn đã nhập sai các thông tin cần nhập ', 'Cảnh báo', {
                closeButton: true,
            });
        }

    }

    render(){
        return(
            <div>
                <div className="container">
                    <form onSubmit={this.register.bind(this)}>
                        <div className="row">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="email">Địa chỉ email: </label>
                                    <input type="email" className="form-control" ref={(email) => this.email = email} required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name">Họ tên: </label>
                                    <input type="text" className="form-control" ref={(name) => this.name = name} required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="image">Ảnh đại diện: </label>
                                    <input type="text" className="form-control" ref={(image) => this.image = image} required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="pwd">Mật khẩu: </label>
                                    <input type="password" className="form-control" ref={(password)=>this.password = password} required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="pwd">Nhập lại mật khẩu: </label>
                                    <input type="password" className="form-control" ref={(repassword)=>this.repassword = repassword} required />
                                </div>

                                <button type="submit" className="btn btn-primary">Đăng kí</button>
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

export default Register;