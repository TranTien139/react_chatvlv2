import React,{Component} from 'react';
const axios = require('axios');
const domain = require('../../config_domain.js');
import {Link} from 'react-router-dom';
const bcrypt   = require('bcrypt-nodejs');

class Register extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }

    register = (event)=>{
        event.preventDefault();

        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var checkemail = re.test(this.email.value);
        var slug = this.ChangeToSlug(this.name.value) +'@'+ Math.floor(Math.random() * Math.floor(10000));
        let pass = bcrypt.hashSync(this.password.value, bcrypt.genSaltSync(8), null);

        let input_register = {"id_social": "","level":"member","image":this.image.value,"userSlug":slug,"name":this.name.value,"email":this.email.value,"password":pass, "created_at": Date.now()};

        if(checkemail && this.password.value === this.repassword.value) {
            axios.post(domain.domain+'/users',input_register).then(res=>{
                res = res.data;
                console.log('Đăng kí thành công');
                window.location.href = '/';
            }).catch(err=>{
                console.log('Đăng kí thất bại');
            });
        }else {
            alert('Bạn nhập sai thông tin');
        }

    }

    ChangeToSlug(title) {
    var slug;
    slug = title.toLowerCase();
    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    slug = slug.replace(/ /g,'-');
    return slug;
}

    render(){
        return(
            <div>
                <div className="container">
                    <form onSubmit={this.register.bind(this)}>
                        <div className="row">
                            <div className="col-sm-6 offset-3">
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
            </div> )
    }
}

export default Register;