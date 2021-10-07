import React from 'react';
import Section from '../Section/Section';
import { CustomSectionsConfig } from '../../config';
import './CustomSections.scss';

class CustomSections extends React.Component {
    render() {
        return (
            <>
                {CustomSectionsConfig.map((section, index) => (
                    <Section
                        key={'section-' + index}
                        ref={this.props.sectionRefs[section.name]}
                        sectionHeader={section.name}
                        headerIcon={section.headerIcon}
                        extraClass={section.extraClass ? section.extraClass : ''}
                    >
                        {section.content}
                    </Section>
                ))}
            </>
        );
    }
}

export default CustomSections;