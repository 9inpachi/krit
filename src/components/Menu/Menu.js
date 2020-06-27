import React from 'react';
import MenuToggle from './MenuToggle/MenuToggle';
import MenuItem from './MenuItem/MenuItem';
import './Menu.scss';

class Menu extends React.Component {

    // Properties

    menuItems = [
        {
            icon: 'fa fa-adjust',
            tooltip: 'Toggle dark theme',
            action: () => {
                document.body.classList.toggle('dark-mode');
                if (document.body.classList.contains('dark-mode')) {
                    localStorage.setItem('theme', 'dark');
                } else {
                    localStorage.setItem('theme', 'light')
                }
            }
        },
        {
            icon: 'fa fa-github',
            tooltip: 'My GitHub',
            action: () => {
                window.open('https://github.com/9inpachi')
            }
        }
    ]

    // Functions

    constructor(props) {
        super(props);
        this.state = { menuActive: false };
    }

    componentWillMount() {
        // More of a workaround
        this.menuItems = this.menuItems.map((menuItem) => {
            menuItem.key = 'menu-item-' + Math.round(Math.random() * 10000);
            return menuItem;
        });
    }

    toggleMenu = () => {
        this.setState({ menuActive: !this.state.menuActive });
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
                    let angle = -80;
                    let increment = 0;
                    if (this.menuItems.length > 1) {
                        // We want to cover 160deg on the right side so using that
                        increment = Math.round(160 / (this.menuItems.length - 1));
                    }
                    angle += index * increment;
                    return (
                        <MenuItem key={menuItem.key} icon={menuItem.icon}
                            tooltip={menuItem.tooltip}
                            action={menuItem.action}
                            menuActive={this.state.menuActive}
                            rotationAngle={angle} />
                    );
                })}
            </div>
        );
    }
}

export default Menu;