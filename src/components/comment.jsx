import React from 'react';
import {Link} from 'react-router-dom';
import {NiceTime} from '../../functions/common.js';

class Comment extends React.Component {
    render() {
        let data =  this.props.comment_list;

        let list_comment = data.map((object,index)=>{
            return (
            <div key={Math.random()} className="item-comment">
                <div className="box-avatar-cmt float-left">
                    <img src="images/avatar.jpg" className="img-fluid"/>
                </div>
                <div className="box-content-cmt float-left">
                    <div className="name"><cite>Nguyễn Trần Thành</cite></div>
                    <div className="time">
                        <time>20:40 Ngày 08/07/2017</time>
                    </div>
                    <div className="clearfix"/>
                    <div className="content-comment">
                        <p>Cô mà công khai nói xấu cháu mình như vậy là đúng sao? Không hiểu mọi
                            người nghĩ gì
                            nhỉ? :)</p>
                    </div>
                    <div className="count-like-share">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <div className="comment-reply-link"><a href="#">Trả lời</a></div>
                            </li>
                            <li className="list-inline-item"><span className="comment"><a href="#">Xem thêm</a></span>100
                                trả lời
                            </li>
                            <li className="list-inline-item"><span className="like"><a href="#">thích</a></span>Bạn
                                và 100 người thích bình luận này
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"/>
                    <div className="list-reply-comment">
                        <div className="box-avatar-cmt float-left">
                            <img src="images/avatar.jpg" className="img-fluid"/>
                        </div>
                        <div className="box-content-cmt float-left">
                            <div className="name"><cite>Nguyễn Trần Thành</cite></div>
                            <div className="time">
                                <time>20:40 Ngày 08/07/2017</time>
                            </div>
                            <div className="clearfix"/>
                            <div className="content-comment">
                                <p>Cô mà công khai nói xấu cháu mình như vậy là đúng sao? Không hiểu
                                    mọi người nghĩ gì
                                    nhỉ? :)</p>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"/>
                    <div className="box-reply-comment">
                        <div className="float-left avatar">
                            <img src="images/avatar.jpg" className="img-fluid"/>
                        </div>
                        <div className="float-left get-content">
                            <div contentEditable="true" id="reply"
                                 placeholder="Bạn nghĩ gì về bình luận này"/>
                        </div>
                        <button className="box-send-comment float-right">
                            Gửi bình luận
                        </button>
                        <div className="clearfix"/>
                    </div>
                </div>
                <div className="clearfix"/>
            </div>
            );
        });

        return list_comment;
    }
}

export default Comment;