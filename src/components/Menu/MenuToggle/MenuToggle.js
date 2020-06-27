import React from 'react';
import './MenuToggle.scss';

class MenuToggle extends React.Component {
    render() {
        return (
            <div onClick={this.props.toggleMenu}
                className="menu-toggle">
                <span className="menu-text">{this.props.children}</span>
                <div className="menu-burger">
                    <span className="menu-burger-bar"></span>
                    <span className="menu-burger-bar"></span>
                    <span className="menu-burger-bar"></span>
                </div>
            </div>
        );
    }
}

export default MenuToggle;