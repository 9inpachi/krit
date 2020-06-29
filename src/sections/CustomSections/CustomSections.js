import React from 'react';
import Section from '../Section/Section';
import { CustomSectionsConfig } from '../../CONFIG';
import './CustomSections.scss';

class CustomSections extends React.Component {
    render() {
        return (
            <div>
                {CustomSectionsConfig.map((section, index) => {
                    return (
                        <Section key={'section-' + index} ref={this.props.sectionRefs[section.name]} sectionHeader={section.name} headerIcon={section.headerIcon}
                            extraClass={section.extraClass ? section.extraClass : ''}>
                            {section.content}
                        </Section>
                    )
                })}
            </div>
        );
    }
}

export default CustomSections;