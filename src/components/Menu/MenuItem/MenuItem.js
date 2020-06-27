import React from 'react';
import { Tooltip } from '@material-ui/core';
import 'font-awesome/css/font-awesome.min.css';
import './MenuItem.scss';

class MenuItem extends React.Component {

    activeTransformStyle = 'translate(0, -50%) rotate(&angle1;deg) translate(8em) rotate(&angle2;deg)';

    render() {
        return (
            <Tooltip title={this.props.tooltip} placement="right">
                <div className="menu-item"
                    onClick={this.props.action}
                    style={!this.props.menuActive ? {} : {
                        transform: this.activeTransformStyle
                            .replace(/&angle1;/g, this.props.rotationAngle)
                            .replace(/&angle2;/g, -this.props.rotationAngle)
                    }}>
                    <i className={this.props.icon}></i>
                </div>
            </Tooltip>
        );
    }
}

export default MenuItem;