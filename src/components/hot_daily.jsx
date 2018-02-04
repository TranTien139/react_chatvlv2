import React from 'react';
import {Link} from 'react-router-dom';

class HotDaily extends React.Component {
    render() {

        let data =  [1,2,3,4,5,6,7,8,9,10];

        let hot_daily = data.map((object,index)=>{
            return (
                <div key={Math.random()} className="row item-daily-post">
                    <div className="col-5"><Link to="#"><img src="images/0.jpg" className="img-fluid"/></Link>
                    </div>
                    <div className="col-7">
                        <h3 className="title"><Link to="#">Cập nhật tin tức U23 Việt Nam trước trận Chung kết
                            U23 Châu Á với U23 Uzbekistan
                            ngày 27.01.2018</Link></h3>
                        <p>Đăng bởi <span><Link to="#">Trần Tiến</Link></span></p>
                        <p>12 giờ trước</p>
                    </div>
                </div>
            );
        });

        return hot_daily;
    }
}

export default HotDaily;