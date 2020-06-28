import React from 'react';
import Section from '../Section/Section';
import ComputerIcon from '@material-ui/icons/Computer';
import CircleButton from '../../components/CircleButton/CircleButton';
import CodeIcon from '@material-ui/icons/Code';
import MapIcon from '@material-ui/icons/Map';
import LinkIcon from '@material-ui/icons/Link';
import './ProjectsSection.scss';

class ProjectsSection extends React.Component {
    render() {
        return (
            <Section sectionHeader="Projects" headerIcon={<ComputerIcon />}>
                <h3 className="project-title"><MapIcon /> Interactive Maps Application</h3>
                <p>Interactive Maps Application in XWiki. Easy creation of interactive maps, sharing locations and associating structured data with areas.</p>
                <CircleButton tooltip="See source" size={1.4}>
                    <CodeIcon />
                </CircleButton>
                <CircleButton tooltip="See app" size={1.4}>
                    <LinkIcon />
                </CircleButton>
            </Section>
        );
    }
}

export default ProjectsSection;