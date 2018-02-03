import React from 'react';
import {Link} from 'react-router-dom';

class TopUser extends React.Component {
    render() {
        let data =  [1,2,3,4,5,6,7,8];
        let data_left = data.filter((obj, index)=>{
            return index%2 === 0;
        });

        let data_right = data.filter((obj, index)=>{
            return index%2 !== 0;
        });

        let list_user_left = data_left.map((object,index)=>{
            return (
                <div key={Math.random()} className="row">
                    <div className="col-4"><a href="#"><img src="/images/avatar_user.jpg" className="img-responsive img-user" /></a></div>
                    <div className="col-8">
                        <p className="name"><a href="#">Trần Văn Tiến</a></p>
                        <p><img src="/icon/view_icon.png" /><span>&nbsp;100</span></p>
                    </div>
                </div>
            );
        });

        let list_user_right = data_right.map((object,index)=>{
            return (
                <div key={Math.random()} className="row">
                    <div className="col-4"><a href="#"><img src="/images/avatar_user.jpg" className="img-responsive img-user" /></a></div>
                    <div className="col-8">
                        <p className="name"><a href="#">Trần Văn Tiến</a></p>
                        <p><img src="/icon/view_icon.png" /><span>&nbsp;100</span></p>
                    </div>
                </div>
            );
        });

        return(
            <div className="col-sm-4">
                <div className="row top-user-home">
                    <ul className="list-inline">
                        <li className="list-inline-item"><h3>Top danh hài</h3></li>
                        <li className="list-inline-item"><a className="active"> Tuần </a></li>
                        <li className="list-inline-item"><a> Tháng </a></li>
                        <li className="list-inline-item"><a className="all"> Tất cả </a></li>
                    </ul>
                </div>
                <div className="row top-user-list">
                    <div className="col-sm-6 pading-left0">
                        {list_user_left}
                    </div>
                    <div className="col-sm-6 pading-left0">
                        {list_user_right}
                    </div>
                </div>
            </div>
        );
    }
}

export default TopUser;