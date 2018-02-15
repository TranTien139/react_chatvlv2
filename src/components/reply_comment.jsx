import React,{Component} from 'react';
import {NiceTime} from '../../functions/common.js';

class ReplyComment extends Component{
    render(){
        return(
            <div>
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
        )
    }
}

export default ReplyComment;

