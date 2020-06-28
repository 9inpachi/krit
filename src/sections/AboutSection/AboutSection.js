import React from 'react';
import Section from '../Section/Section';
import InfoIcon from '@material-ui/icons/Info';
import './AboutSection.scss';

class AboutSection extends React.Component {
    render() {
        return (
            <Section sectionHeader="about" headerIcon={<InfoIcon />} extraClass="about-section">
                <h4>who am i?</h4>
                <p>
                    An easily excited and passionate full stack developer trying to support the world of open source with his little efforts. :)
                </p>
            </Section>
        );
    }
}

export default AboutSection;