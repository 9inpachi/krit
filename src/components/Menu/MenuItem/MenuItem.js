import React from 'react';
import CircleButton from '../../CircleButton/CircleButton';
import './MenuItem.scss';

class MenuItem extends React.Component {

    activeTransformStyle = (angle1, angle2, isMobile) => `
        translateY(${!isMobile ? "-50%" : "0"})
        rotate(${angle1}deg)
        translate(${isMobile ? 7 : 6}rem)
        rotate(${angle2}deg)
    `;

    render() {
        return (
            <CircleButton className="menu-item"
                tooltip={this.props.tooltip}
                onClick={this.props.action}
                tooltipPlacement={this.props.tooltipPlacement}
                size={3.5}
                style={this.props.menuActive ? {
                    transform: this.activeTransformStyle(
                        this.props.rotationAngle,
                        -this.props.rotationAngle,
                        this.props.isMobile
                    )
                } : {}}>
                {this.props.icon}
            </CircleButton>
        );
    }
}

export default MenuItem;