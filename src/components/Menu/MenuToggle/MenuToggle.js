import React from 'react';
import CircleButton from '../../CircleButton/CircleButton';
import './MenuToggle.scss';

class MenuToggle extends React.Component {
    render() {
        return (
            <CircleButton onClick={this.props.toggleMenu}
                size={3}
                className="menu-toggle">
                <span className="menu-text">{this.props.children}</span>
                <div className="menu-burger">
                    <span className="menu-burger-bar"></span>
                    <span className="menu-burger-bar"></span>
                    <span className="menu-burger-bar"></span>
                </div>
            </CircleButton>
        );
    }
}

export default MenuToggle;