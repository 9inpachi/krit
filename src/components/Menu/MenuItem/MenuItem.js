import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './MenuItem.scss';

class MenuItem extends React.Component {
    render() {
        return (
            <div onClick={this.props.action} className="menu-item">
                <i className={this.props.icon}></i>
            </div>
        );
    }
}

export default MenuItem;