import React from 'react';
import Menu from './components/Menu/Menu';
import TopSection from './sections/TopSection/TopSection';
import ProjectsSection from './sections/ProjectsSection/ProjectsSection';
import AboutSection from './sections/AboutSection/AboutSection';
import Footer from './sections/Footer/Footer';

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
            'projects': React.createRef(),
            'about': React.createRef()
        };
    }

    render() {
        return (
            <div>
                <Menu sectionRefs={this.sectionRefs} />
                <TopSection />
                <ProjectsSection ref={this.sectionRefs['projects']} />
                <AboutSection ref={this.sectionRefs['about']} />
                <Footer />
            </div>
        );
    }
}

export default App;