import React from 'react';
import { Tooltip } from '@material-ui/core';
import PropTypes from 'prop-types';
import './CircleButton.scss';

class CircleButton extends React.Component {
    render() {
        return (
            <Tooltip title={this.props.tooltip}
                placement={this.props.tooltipPlacement}>
                <div onClick={this.props.onClick}
                    className="circle-button"
                    style={{ width: this.props.size + 'em', height: this.props.size + 'em' }}>
                    {this.props.children}
                </div>
            </Tooltip>
        );
    }
}

CircleButton.propTypes = {
    tooltip: PropTypes.string,
    tooltipPlacement: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.number
};

CircleButton.defaultProps = {
    size: 1
};

export default CircleButton;