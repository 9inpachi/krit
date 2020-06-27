import React from 'react';
import Menu from './components/Menu/Menu';
import TopSection from './sections/TopSection/TopSection';

class App extends React.Component {

    constructor(props) {
        super(props);
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }

    render() {
        return (
            <div>
                <Menu />
                <TopSection />
            </div>
        );
    }
}

export default App;