import React from 'react';
import Section from '../Section/Section';
import CircleButton from '../../components/CircleButton/CircleButton';
import './ProjectsSection.scss';

import { ProjectsConfig } from '../../CONFIG';

class ProjectsSection extends React.Component {
    render() {
        return (
            <Section sectionHeader={ProjectsConfig.name} headerIcon={ProjectsConfig.headerIcon}>
                {ProjectsConfig.projects.map((project, index) => {
                    return (
                        <div key={'project-' + index}>
                            <h3 className="project-title">{project.icon} {project.name}</h3>
                            <p>{project.description}</p>
                            <div className="project-links">
                                {project.links.map((link, linkIndex) => {
                                    return (
                                        <CircleButton key={'project-link-' + index + linkIndex} link={link.link}
                                            target="_blank" tooltip={link.tooltip} size={1.4}>
                                            {link.icon}
                                        </CircleButton>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}

            </Section>
        );
    }
}

export default ProjectsSection;