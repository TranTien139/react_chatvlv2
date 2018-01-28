import React, {Component} from 'react';
import Navigation from './navigation.jsx';
import Modal from  './Modal.jsx'

class Layout extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <section id="main-container">
                    { this.props.children }
                </section>
                <footer id="footer">
                    <div className="container">
                        <p className="text-center">
                            Web site viết bởi <a href="https://www.facebook.com/trantienvan139" target="_blank">Trần Tiến</a>
                        </p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Layout;
