import React from 'react';
import ReactDOM from 'react-dom';
import MenuToggle from './MenuToggle/MenuToggle';
import MenuItem from './MenuItem/MenuItem';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import ComputerIcon from '@material-ui/icons/Computer';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './Menu.scss';

import { CustomSectionsConfig } from '../../config';

class Menu extends React.Component {

    // Properties

    menuItems = [
        {
            icon: <ArrowUpwardIcon />,
            tooltip: 'go to top',
            action: () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        },
        {
            icon: <NightsStayIcon />,
            tooltip: 'toggle dark/light theme',
            action: () => {
                document.body.classList.toggle('dark-mode');
                if (document.body.classList.contains('dark-mode')) {
                    localStorage.setItem('theme', 'dark');
                } else {
                    localStorage.setItem('theme', 'light');
                }
            }
        },
        {
            icon: <ComputerIcon />,
            tooltip: 'projects',
            action: () => {
                this.scrollToSection('projects');
            }
        }
    ]

    // Functions

    constructor(props) {
        super(props);
        this.state = { menuActive: false };

        // Sections in menu
        const sectionsInMenu = CustomSectionsConfig.map((section) => {
            if (!section.notInMenu) {
                return {
                    icon: section.headerIcon,
                    tooltip: section.name,
                    action: () => {
                        this.scrollToSection(section.name);
                    }
                }
            } else {
                return false;
            }
        }).filter(section => section);

        this.menuItems = this.menuItems.concat(sectionsInMenu);

        // More of a workaround
        this.menuItems = this.menuItems.map((menuItem) => {
            menuItem.key = 'menu-item-' + Math.round(Math.random() * 10000);
            // Resizing icons
            menuItem.icon = React.cloneElement(menuItem.icon, { classes: { root: 'menu-item-icon' } });
            return menuItem;
        });
    }

    toggleMenu = () => {
        this.setState({ menuActive: !this.state.menuActive });
    }

    scrollToSection = (sectionName) => {
        const element = ReactDOM.findDOMNode(this.props.sectionRefs[sectionName].current);
        window.scrollTo({
            top: element.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    }

    closeMenu = () => {
        this.setState({ menuActive: false });
    }

    render() {
        const isMobile = window.matchMedia('(max-width: 768px)').matches ? true : false;
        const startAngle = isMobile ? 0 : -90;
        const rotationAngle = isMobile ? 90 : 180;
        console.log(isMobile);

        return (
            // The "menu-active" class is also used by MenuToggle and MenuItem(s)
            // We could pass a prop to each component but CSS is good here to avoid overhead
            // since our usecase is simple
            <div className={this.state.menuActive ? 'menu menu-active' : 'menu'}>
                <div className="menu-backdrop" onClick={this.closeMenu}></div>
                <div className="menu-data">
                    <MenuToggle isMobile={isMobile} toggleMenu={this.toggleMenu}>
                        ME<br />NU
                    </MenuToggle>
                    {this.menuItems.map((menuItem, index) => {
                        let angle = startAngle;
                        let increment = 0;
                        if (this.menuItems.length > 1) {
                            // We want to cover 180deg on the right side so using that
                            increment = Math.round(rotationAngle / (this.menuItems.length - 1));
                        }
                        angle += index * increment;

                        return (
                            <MenuItem {...menuItem} tooltipPlacement="right"
                                menuActive={this.state.menuActive}
                                isMobile={isMobile}
                                rotationAngle={angle} />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Menu;
