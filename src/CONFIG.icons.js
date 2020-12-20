import React from 'react';

// ICONS
import SvgIcon from '@material-ui/core/SvgIcon';
import ComputerIcon from '@material-ui/icons/Computer';
import InfoIcon from '@material-ui/icons/Info';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import MapIcon from '@material-ui/icons/Map';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import WebIcon from '@material-ui/icons/Web';
import MailIcon from '@material-ui/icons/Mail';
import { ReactComponent as FacebookIcon } from './assets/icons/facebook.svg';
import { ReactComponent as GitHubIcon } from './assets/icons/github.svg';
import { ReactComponent as LinkedInIcon } from './assets/icons/linkedin.svg';
import { ReactComponent as CppIcon } from './assets/icons/cplusplus-plain.svg';
import { ReactComponent as JavaIcon } from './assets/icons/java-plain-wordmark.svg';
import { ReactComponent as AngularIcon } from './assets/icons/angularjs-plain-wordmark.svg';
import { ReactComponent as JavaScriptIcon } from './assets/icons/javascript-plain.svg';
import { ReactComponent as MongoDBIcon } from './assets/icons/mongodb-plain-wordmark.svg';
import { ReactComponent as MySQLIcon } from './assets/icons/mysql-plain-wordmark.svg';
import { ReactComponent as NodejsIcon } from './assets/icons/nodejs-plain-wordmark.svg';
import { ReactComponent as PHPIcon } from './assets/icons/php-plain.svg';
import { ReactComponent as ReactIcon } from './assets/icons/react-original-wordmark.svg';
import { ReactComponent as TypeScriptIcon } from './assets/icons/typescript-plain.svg';
// ICONS END

/** Default icons */
const Icons = {
    email: <MailIcon />,
    facebook: <SvgIcon component={FacebookIcon} />,
    github: <SvgIcon component={GitHubIcon} stroke="currentColor" strokeWidth={2} style={{ fill: 'none' }} />,
    linkedin: <SvgIcon component={LinkedInIcon} />,
    projects: <ComputerIcon />,
    about: <InfoIcon />,
    cpp: <SvgIcon component={CppIcon} viewBox="0 0 128 128" fontSize="large" />,
    java: <SvgIcon component={JavaIcon} viewBox="0 0 128 128" fontSize="large" />,
    typescript: <SvgIcon component={TypeScriptIcon} viewBox="0 0 128 128" fontSize="large" />,
    javascript: <SvgIcon component={JavaScriptIcon} viewBox="0 0 128 128" fontSize="large" />,
    mysql: <SvgIcon component={MySQLIcon} viewBox="0 0 128 128" fontSize="large" />,
    php: <SvgIcon component={PHPIcon} viewBox="0 0 128 128" fontSize="large" />,
    mongodb: <SvgIcon component={MongoDBIcon} viewBox="0 0 128 128" fontSize="large" />,
    nodejs: <SvgIcon component={NodejsIcon} viewBox="0 0 128 128" fontSize="large" />,
    react: <SvgIcon component={ReactIcon} viewBox="0 0 128 128" fontSize="large" />,
    angular: <SvgIcon component={AngularIcon} viewBox="0 0 128 128" fontSize="large" />,
    helpoutline: <HelpOutlineIcon />,
    map: <MapIcon />,
    code: <CodeIcon />,
    link: <LinkIcon />,
    web: <WebIcon />
};


export { Icons };