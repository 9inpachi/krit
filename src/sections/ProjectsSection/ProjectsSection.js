import React from 'react';
import Section from '../Section/Section';
import ComputerIcon from '@material-ui/icons/Computer';
import CircleButton from '../../components/CircleButton/CircleButton';
import CodeIcon from '@material-ui/icons/Code';
import MapIcon from '@material-ui/icons/Map';
import LinkIcon from '@material-ui/icons/Link';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import WbIridescentIcon from '@material-ui/icons/WbIridescent';
import './ProjectsSection.scss';

class ProjectsSection extends React.Component {
    render() {
        return (
            <Section sectionHeader="projects" headerIcon={<ComputerIcon />}>

                <h3 className="project-title"><MapIcon /> Interactive maps application</h3>
                <p>Interactive Maps Application in XWiki. Easy creation of interactive maps, ability to sharing locations and associating structured data with areas.</p>
                <div>
                    <CircleButton link="https://github.com/xwiki-contrib/application-interactive-maps"
                        target="_blank" tooltip="See source" size={1.4}>
                        <CodeIcon />
                    </CircleButton>
                    <CircleButton link="https://extensions.xwiki.org/xwiki/bin/view/Extension/InteractiveMapsApplication/"
                        target="_blank" tooltip="See app" size={1.4}>
                        <LinkIcon />
                    </CircleButton>
                </div>

                <h3 className="project-title"><SettingsInputAntennaIcon /> OpenCL code-generation backend for GPU-enhanced neural networks</h3>
                <p>GeNN is a GPU-enhanced Neuronal Network simulation environment based on code generation for Nvidia CUDA. This project added a new OpenCL based backend to GeNN.</p>
                <div>
                    <CircleButton link="https://github.com/9inpachi/genn"
                        target="_blank" tooltip="See source" size={1.4}>
                        <CodeIcon />
                    </CircleButton>
                </div>

                <h3 className="project-title"><WbIridescentIcon /> Phoenix</h3>
                <p>A web-based experiment independent event display for High Energy Physics.</p>
                <div>
                    <CircleButton link="https://github.com/hsf/phoenix"
                        target="_blank" tooltip="See source" size={1.4}>
                        <CodeIcon />
                    </CircleButton>
                    <CircleButton link="https://hepsoftwarefoundation.org/phoenix/"
                        target="_blank" tooltip="See app" size={1.4}>
                        <LinkIcon />
                    </CircleButton>
                </div>

                <h3 className="project-title"><BusinessCenterIcon /> Empower youth for work - Oxfam GB</h3>
                <p>Beneficiaries information web system to keep track of beneficiaries influenced by the EYW project.</p>
                <div>
                    <CircleButton link="https://oipeywdb.com/"
                        target="_blank" tooltip="See app" size={1.4}>
                        <LinkIcon />
                    </CircleButton>
                </div>

            </Section>
        );
    }
}

export default ProjectsSection;