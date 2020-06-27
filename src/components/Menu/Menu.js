import React from 'react';
import MenuToggle from './MenuToggle/MenuToggle';
import './Menu.scss';
import MenuItem from './MenuItem/MenuItem';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { menuActive: false };
    }

    toggleMenu = () => {
        this.setState({ menuActive: !this.state.menuActive });
    }

    render() {
        return (
            <div className={this.state.menuActive ? 'menu menu-active' : 'menu'}>
                <MenuToggle toggleMenu={this.toggleMenu} menuActive={this.state.menuActive}>
                    ME<br />NU
                </MenuToggle>
                <MenuItem icon="fa fa-adjust" />
            </div>
        );
    }
}

export default Menu;