import React from 'react';
import Menu from './components/Menu/Menu';
import TopSection from './sections/TopSection/TopSection';
import ProjectsSection from './sections/ProjectsSection/ProjectsSection';
import CustomSections from './sections/CustomSections/CustomSections';
import Footer from './sections/Footer/Footer';

import { CustomSectionsConfig } from './CONFIG';

class App extends React.Component {

    constructor(props) {
        super(props);
        const theme = localStorage.getItem('theme');
        if (theme) {
            if (theme === 'dark') {
                document.body.classList.add('dark-mode');
            }
        } else if (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) {
            localStorage.setItem('theme', 'dark');
            document.body.classList.add('dark-mode');
        }

        this.sectionRefs = {
            'projects': React.createRef()
        };

        // Creating refs for sections for smooth scrolling
        CustomSectionsConfig.forEach((customSection) => {
            this.sectionRefs[customSection.name] = React.createRef();
        });
    }

    render() {
        return (
            <div>
                <Menu sectionRefs={this.sectionRefs} />
                <TopSection />
                <ProjectsSection ref={this.sectionRefs['projects']} />
                <CustomSections sectionRefs={this.sectionRefs} />
                <Footer />
            </div>
        );
    }
}

export default App;