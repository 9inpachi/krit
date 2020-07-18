import React from 'react';
import ReactDOM from 'react-dom';
import MenuToggle from './MenuToggle/MenuToggle';
import MenuItem from './MenuItem/MenuItem';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import ComputerIcon from '@material-ui/icons/Computer';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './Menu.scss';

import { CustomSectionsConfig } from '../../CONFIG';

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
            tooltip: 'toggle dark theme',
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

    render() {
        return (
            // The "menu-active" class is also used by MenuToggle and MenuItem(s)
            // We could pass a prop to each component but CSS is good here to avoid overhead
            // since our usecase is simple
            <div className={this.state.menuActive ? 'menu menu-active' : 'menu'}>
                <MenuToggle toggleMenu={this.toggleMenu}>
                    ME<br />NU
                </MenuToggle>
                {this.menuItems.map((menuItem, index) => {
                    let angle = -90;
                    let increment = 0;
                    if (this.menuItems.length > 1) {
                        // We want to cover 160deg on the right side so using that
                        increment = Math.round(180 / (this.menuItems.length - 1));
                    }
                    angle += index * increment;
                    return (
                        <MenuItem {...menuItem} tooltipPlacement="right"
                            menuActive={this.state.menuActive}
                            rotationAngle={angle} />
                    );
                })}
            </div>
        );
    }
}

export default Menu;