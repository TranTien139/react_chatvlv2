import React from 'react';
import {Link} from 'react-router-dom';
import {NiceTime} from '../../functions/common.js';
import ReplyComment from '../components/reply_comment.jsx';

class Comment extends React.Component {
    render() {
        let data =  this.props.comment_list;
        let list_comment = data.map((object,index)=>{
            return (
            <div key={Math.random()} className="item-comment">
                <div className="box-avatar-cmt float-left">
                    <img src={object.getUser.image} className="img-fluid" width="70"/>
                </div>
                <div className="box-content-cmt float-left">
                    <div className="name"><cite>{object.getUser.name}</cite></div>
                    <div className="time">
                        <time>{ NiceTime(object.created_at/1000) }</time>
                    </div>
                    <div className="clearfix"/>
                    <div className="content-comment">
                        <p>{object.content}</p>
                    </div>
                    <div className="count-like-share">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <div className="comment-reply-link"><a >Trả lời</a></div>
                            </li>
                            <li className="list-inline-item"><span className="comment"><a >Xem thêm</a></span>{object.count_reply} trả lời
                            </li>
                            <li className="list-inline-item"><span className="like"><a >thích</a></span>{object.like} người thích bình luận này
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"/>
                    { object.count_reply > 0 ? <ReplyComment /> :''}
                </div>
                <div className="clearfix"/>
            </div>
            );
        });

        return list_comment;
    }
}

export default Comment;