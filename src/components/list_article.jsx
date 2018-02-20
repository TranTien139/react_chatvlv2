import React from 'react';
import {Link} from 'react-router-dom';
import {NiceTime} from '../../functions/common.js';
const axios =  require('axios');
const domain = require('../../config_domain.js');

class ListArticle extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            islike: false,
            icon: ''
        }
    }

    Emotion = (action,article_id)=>{
        let check = this.props.checklogin;
        if(check) {
            let promise = new Promise((resolve, reject) => {
                axios.post(domain.domain + '/articles/likeArticle', {
                    user_id: check.id,
                    article_id: article_id,
                    type: action
                }).then(res => {
                    res = res.data;
                    resolve(res);
                }).catch(err => {
                    reject([]);
                });
            });

            promise.then(data => {
               if(data.code === 200) {
                    this.setState({islike:true,icon:action});
                }
            }).catch(err => {
            });
        }else {
            this.props.handlerFromParant('Bạn phải đăng nhập mới được thực hiện hành động này');
        }
    }

    render() {
        let object =  this.props.data;

        let check_like = false;
        let icon = '';
        let check = this.props.checklogin;
        if(check && object.likes) {
            let check_likes = object.likes.filter(obj => {
                return obj.user_id.toString() === check.id.toString();
            });
            if(check_likes.length>0){
                check_like = true;
                icon = check_likes[0].type;
            }
        }

        return (
            <div key={Math.random()} className="main-item">
                <div className="row">
                    <div className="col-sm-8 left-content-item text-center">
                        <Link to={"/chi-tiet/"+ object.id} ><img src={object.image} className="img-fluid" />
                            { object.type === 'video'?  <div className="icon-play" />:''  }
                        </Link>
                    </div>
                    <div className="col-sm-4">
                        <div className="right-content-item">
                            <h2><Link to={"/chi-tiet/"+ object.id}  className="jump_focus">{object.title}</Link></h2>
                            <div className="uinfo">
                                bởi <Link to={'/thanh-vien/'+object.getUser.userSlug }>{object.getUser.name}</Link>
                                <span>&nbsp;{ NiceTime(object.published_at) }</span>
                            </div>
                            <div className="count-like-share">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><span className="view"><img src="icon/view_icon.png" /></span>{ object.total_view || 0 }
                                    </li>
                                    <li className="list-inline-item"><span className="comment"><img src="icon/comment_icon.png" /></span>{object.total_comment}
                                    </li>
                                    <li className="list-inline-item"><span className="like"><img src="icon/icon_camxuc2.png" /></span>{object.total_like}
                                    </li>
                                </ul>
                            </div>
                            <div className="list-emotion">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><a onClick={this.Emotion.bind(this,'like',object.id)} title="like"><img src="icon/icon_like.gif" /></a></li>
                                    <li className="list-inline-item"><a onClick={this.Emotion.bind(this,'love',object.id)} title="love"><img src="icon/icon_love.gif" /></a></li>
                                    <li className="list-inline-item"><a onClick={this.Emotion.bind(this,'haha',object.id)} title="haha"><img src="icon/icon_haha.gif" /></a></li>
                                    <li className="list-inline-item"><a onClick={this.Emotion.bind(this,'wow',object.id)} title="wow"><img src="icon/icon_wow.gif" /></a></li>
                                    <li className="list-inline-item"><a onClick={this.Emotion.bind(this,'sad',object.id)} title="sad"><img src="icon/icon_sad.gif" /></a></li>
                                    <li className="list-inline-item"><a onClick={this.Emotion.bind(this,'angry',object.id)} title="angry"><img src="icon/icon_angry.gif" /></a></li>
                                </ul>
                            </div>

                                { this.state.icon !== '' || check_like === true ? <div className="your_selected">Bạn: <span><img src={"icon/icon_"+(this.state.icon || icon)+".gif"} /></span></div> : '' }

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListArticle;