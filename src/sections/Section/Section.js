import React from 'react';
import './Section.scss';

class Section extends React.Component {
    render() {
        return (
            <div className="section-wrapper">
                <div className={!this.props.extraClass ? 'section' : ('section ' + this.props.extraClass)}>
                    <h2 className="section-header">
                        {React.cloneElement(this.props.headerIcon, { classes: { root: 'section-header-icon' } })}
                        {this.props.sectionHeader}
                    </h2>
                    <div className="section-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Section;