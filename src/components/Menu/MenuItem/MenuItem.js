import React from 'react';
import CircleButton from '../../CircleButton/CircleButton';
import './MenuItem.scss';

class MenuItem extends React.Component {

    activeTransformStyle = 'translateY(-50%) rotate(&angle1;deg) translate(6em) rotate(&angle2;deg)';

    render() {
        return (
            <CircleButton className="menu-item"
                tooltip={this.props.tooltip}
                onClick={this.props.action}
                tooltipPlacement={this.props.tooltipPlacement}
                size={2.5}
                style={!this.props.menuActive ? {} : {
                    transform: this.activeTransformStyle
                        .replace(/&angle1;/g, this.props.rotationAngle)
                        .replace(/&angle2;/g, -this.props.rotationAngle)
                }}>
                {this.props.icon}
            </CircleButton>
        );
    }
}

export default MenuItem;