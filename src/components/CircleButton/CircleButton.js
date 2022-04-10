import React from 'react';
import { Tooltip } from '@material-ui/core';
import './CircleButton.scss';

class CircleButton extends React.Component {
    render() {
        const ButtonTag = this.props.link ? 'a' : 'button';
        return (
            <Tooltip title={this.props.tooltip ?? ''}
                placement={this.props.tooltipPlacement}>
                <ButtonTag href={this.props.link}
                    target={this.props.target}
                    onClick={this.props.onClick}
                    className={!this.props.className ? 'circle-button' : ('circle-button ' + this.props.className)}
                    style={
                        Object.assign(
                            { width: this.props.size + 'rem', height: this.props.size + 'rem' },
                            this.props.style
                        )
                    }>
                    {this.props.children}
                </ButtonTag>
            </Tooltip>
        );
    }
}

CircleButton.defaultProps = {
    size: 1
};

export default CircleButton;