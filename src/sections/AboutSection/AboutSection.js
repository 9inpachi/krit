import React from 'react';
import Section from '../Section/Section';
import InfoIcon from '@material-ui/icons/Info';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CodeIcon from '@material-ui/icons/Code';
import WebIcon from '@material-ui/icons/Web';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as CppIcon } from '../../assets/icons/cplusplus-plain.svg';
import { ReactComponent as JavaIcon } from '../../assets/icons/java-plain-wordmark.svg';
import { ReactComponent as AngularIcon } from '../../assets/icons/angularjs-plain-wordmark.svg';
import { ReactComponent as JavaScriptIcon } from '../../assets/icons/javascript-plain.svg';
import { ReactComponent as MongoDBIcon } from '../../assets/icons/mongodb-plain-wordmark.svg';
import { ReactComponent as MySQLIcon } from '../../assets/icons/mysql-plain-wordmark.svg';
import { ReactComponent as NodejsIcon } from '../../assets/icons/nodejs-plain-wordmark.svg';
import { ReactComponent as PHPIcon } from '../../assets/icons/php-plain.svg';
import { ReactComponent as ReactIcon } from '../../assets/icons/react-original-wordmark.svg';
import { ReactComponent as TypeScriptIcon } from '../../assets/icons/typescript-plain.svg';
import './AboutSection.scss';

class AboutSection extends React.Component {
    render() {
        return (
            <Section sectionHeader="about" headerIcon={<InfoIcon />} extraClass="about-section section-reverse">

                <h4><HelpOutlineIcon /> who am i?</h4>
                <p>
                    An easily excited and a highly passionate full stack developer trying to support the world of open source with his little efforts. :)
                </p>
                
                <h4><CodeIcon /> programming</h4>
                <p className="programming-icons">
                    <SvgIcon component={JavaIcon} viewBox="0 0 128 128" fontSize="large" />
                    <SvgIcon component={CppIcon} viewBox="0 0 128 128" fontSize="large" />
                    <SvgIcon component={TypeScriptIcon} viewBox="0 0 128 128" fontSize="large" />
                    <SvgIcon component={JavaScriptIcon} viewBox="0 0 128 128" fontSize="large" />
                </p>
                
                <h4><WebIcon /> web</h4>
                <p className="programming-icons">
                    <SvgIcon component={MySQLIcon} viewBox="0 0 128 128" fontSize="large" />
                    <SvgIcon component={PHPIcon} viewBox="0 0 128 128" fontSize="large" />
                    <SvgIcon component={MongoDBIcon} viewBox="0 0 128 128" fontSize="large" />
                    <SvgIcon component={NodejsIcon} viewBox="0 0 128 128" fontSize="large" />
                    <SvgIcon component={ReactIcon} viewBox="0 0 128 128" fontSize="large" />
                    <SvgIcon component={AngularIcon} viewBox="0 0 128 128" fontSize="large" />
                </p>

            </Section>
        );
    }
}

export default AboutSection;