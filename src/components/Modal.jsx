/**
 * Created by Tien on 11/21/2017.
 */

import React from 'react';

class Modal extends React.Component {
    render() {
        return (
            <div>
                <div className="box-required-login">
                    <i className="fa fa-times" aria-hidden="true"/>
                    <p>
                        Bạn phải đăng nhập mới được thực hiện hành động này
                    </p>
                </div>
            </div>
        )
    }
}

export default Modal;