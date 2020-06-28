import React from 'react';
import CircleButton from '../../components/CircleButton/CircleButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as GitHubIcon } from '../../assets/icons/github.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/icons/linkedin.svg';
import './Footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <p>Developed by  <a href="http://fawadali.com">fawad ali</a></p>
                <p>
                    Copyright &copy; {new Date().getFullYear()} All rights reserved
                </p>
                <p>
                    <CircleButton tooltip="GitHub" tooltipPlacement="top"
                        link="https://github.com/9inpachi" target="_blank">
                        <SvgIcon component={GitHubIcon} stroke="currentColor" strokeWidth={2} style={{ fill: 'none' }} />
                    </CircleButton>
                    <CircleButton tooltip="Facebook" tooltipPlacement="top"
                        link="https://facebook.com/9inpachi" target="_blank">
                        <SvgIcon component={FacebookIcon} />
                    </CircleButton>
                    <CircleButton tooltip="LinkedIn" tooltipPlacement="top"
                        link="https://www.linkedin.com/in/fawadaliq/" target="_blank">
                        <SvgIcon component={LinkedInIcon} />
                    </CircleButton>
                </p>
            </div>
        );
    }
}

export default Footer;