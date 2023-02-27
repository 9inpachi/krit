/**
 * This is the config file where you can edit information as you want.
 * 
 * There are 3 variable objects which contain all the information.
 * 
 * 1. CommonConfig
 *      This variable contains all the common configuration of your profile
 *      including your name, your social links and the path to draw the signature.
 * 2. ProjectsConfig
 *      This variable contains all the information which will be part of the
 *      projects section. Here you can add your own projects and provide a link for them
 *      and also change the icon as per your liking.
 * 3. CustomSectionsConfig
 *      Now this is the fun part. This variable is an array which can hold any number
 *      of sections. Here you can define any of your custom sections may it be "Work", "Reviews",
 *      "Portfolio" or whatnot. The "content" property supports JSX so you can style or use it
 *      however you like!
 * 
 * So what are you waiting for? GO FOR IT!
 */

import React from 'react';

import { Icons } from './icons';

// CUSTOM ICONS
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import WbIridescentIcon from '@material-ui/icons/WbIridescent';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ComputerIcon from '@material-ui/icons/Computer';
import InfoIcon from '@material-ui/icons/Info';
import RateReviewIcon from '@material-ui/icons/RateReview';
import Description from '@material-ui/icons/Description';

// CUSTOM COMPONENTS
import CircleButton from '../components/CircleButton/CircleButton';

// CONFIGURABLE TEXT BEGINS HERE

/** Common config for top section and footer */
const CommonConfig = {
    // Whether to add the free Palestine screen at the start
    addFreePalestine: false,
    // Name that will be displayed at the top
    name: 'fawad ali',
    // Tagline that will be displayed after the name
    tagline: 'software engineer',
    // Configuration for signature in the top section
    signature: {
        // Viewbox of the signature SVG
        viewBox: '0 0 100 100',
        // This is the data inside the "d" attribute of the <path> tag in SVG
        signaturePathD: `M9.3,62c2.6-1.4,4.9-3.8,7-5.8c6.9-6.6,11.8-14.9,12.7-24.6
        c0-0.5-0.1-1.2-0.6-1.2c-0.2,0-0.4,0.1-0.5,0.3c-0.5,0.5-0.7,1.1-1,1.7c-5.4,13.5-10.2,27.3-14,41.4c-0.6,2.2-1.2,4.4-1.7,6.6
        c-0.4,1.8-0.8,3.6-0.5,5.4c0.1,0.5,0.2,1,0.6,1.3c1,0.9,2.5,0,3.4-1c3.7-4.2,5.9-9.7,6.6-15.3c0.7-5.6,0-11.3-1.5-16.7
        c9,1,15.9-6.4,19.4-13.9c1.5-3.1,2.8-6.6,3.3-10c0.3-2.4,0.1-4.9-1-7c-2.6-4.8-9.6-5.1-14.3-4.2c-5.6,1.1-10.7,4.3-14.3,8.6
        c-5.2,6.2-7.6,14.4-8,22.4c-0.2,5.2,0.6,11,4.5,14.5c3.2,2.8,7.9,3.4,11.9,2.2s7.5-4,10.1-7.3c2.6-3.2,4.5-7,6.6-10.5
        c0.4-0.6,0.8-2.2-0.5-2c-0.6,0.1-1,0.6-1.4,1.1c-1.5,2.1-3.1,4.2-3.8,6.6C32,55.8,32,57.3,33,57.8c0.9,0.4,1.9-0.2,2.5-0.9
        c2.2-2.3,2.8-5.7,3-8.8c-0.3,2.4-0.3,4.9,0.1,7.3c0.1,0.5,0.2,1,0.6,1.2c0.5,0.2,1.1-0.2,1.5-0.7c2.1-2.5,2.5-6,2.9-9.2
        c-0.2,2.4-0.3,4.8,0,7.1c0,0.3,0.1,0.7,0.4,0.7c0.2,0,0.4-0.2,0.5-0.4c1.6-2.6,2.7-5.4,3.2-8.4c0,1.6,0.3,3.2,0.9,4.7
        c0.2,0.6,0.6,1.2,1.2,1.3c0.5,0,1-0.4,1.3-0.8c1.2-1.5,1.9-3.2,2.7-5c0.2-0.5,0.4-1.1,0.3-1.6c-0.2-1-2.5-0.2-0.6,1.2
        c2,1.5,4.3,1.2,6.3-0.3c1.4-1.1,2.4-2.7,2.7-4.5c0.3-1.9-2.1-0.2-2.7,0.4c-1.2,1.2-1.8,3-1.5,4.7c0.2,0.9,0.9,1.9,1.8,1.9
        c0.7,0,1.3-0.5,1.8-1.1c1.4-1.8,1-4.1,0.6-6.2c0.4,2,0.7,4.9,3.4,5.5c2.1,0.5,4.6-0.9,6.3-2.1c1.2-0.9,2.1-2,2.6-3.4
        c0.5-1.1,1.1-3.1,0.4-4.2c-0.4-0.6-1.1-1-1.8-1.3c-0.8-0.3-1.6-0.3-2.4-0.2c-1,0.3-1.9,1-2.5,1.8c-1,1.3-1.4,3.1-0.8,4.7
        c0.5,1.5,2.2,2.7,3.8,2.5c1.7-0.2,2.9-1.7,3.7-3.2c1.4-2.5,2.1-5.3,2.7-8.1c0.4-1.9,0.8-3.9,1-5.8c0.3-2,0.6-3.9,0.6-5.9
        c-1.3,2.4-2,5-2.7,7.6c-0.7,2.9-1.1,5.9-1.5,8.9c-0.2,1.5-0.4,3.1-0.1,4.6c0.1,0.4,0.2,0.9,0.5,1.2c0.3,0.2,0.7,0.3,1.1,0.3
        c1.4,0.1,2.8-0.1,4.2-0.3c-5.2,1.9-10.4,3.7-15.5,5.7c-8.3,3.1-16.6,6.3-24.6,9.9c-4.3,1.9-8.4,4.1-12.5,6.3
        c12.1-4.7,24.1-9.4,36.3-13.7c10.6-3.7,21.4-7.1,32.3-9.9`,

    },
    email: 'm.fawaadali98@gmail.com',
    // Information for social media accounts
    social: [
        {
            // Name of the social media platform
            name: 'GitHub',
            // Link to your account
            link: 'https://github.com/9inpachi',
            // (Optional) Icon of the social media platform
            // default icon will be used in case of no value
            icon: Icons['github']
        },
        {
            name: 'LinkedIn',
            link: 'https://linkedin.com/in/fawadaliq'
        },
        {
            name: 'Facebook',
            link: 'https://facebook.com/9inpachi'
        },
        {
            name: 'Twitter',
            link: 'https://twitter.com/9inpachi'
        },
        {
            name: 'Email',
            link: 'mailto:m.fawaadali98@gmail.com'
        },
        {
            name: 'CV',
            link: 'https://docs.google.com/document/d/15uVQAhsvKsreOd9Xvh9f-HGMkqpI_7dMuSKmQQvFdCo/view?usp=sharing',
            icon: <Description />
        }
    ]
};

/** Config for the projects section */
const ProjectsConfig = {
    // Name / title of the section
    name: 'projects',
    // Icon next to the header title. The headerIcon can use any SVG icon, material icons are preferred
    // See https://material-ui.com/components/material-icons/
    headerIcon: <ComputerIcon />,
    // Extra classes to apply styling
    // "section-reverse" class makes a section flow from right to left
    extraClass: '',
    // Projects
    projects: [
        {
            // Name of the project
            name: 'Interactive Maps Application',
            // Icon of the project
            icon: Icons['map'],
            // Description of the project
            description: 'An application extension in XWiki to easily create interactive maps with ability to share locations and associate structured data with areas.',
            // Links to the project
            links: [
                {
                    // Tooltip of the link
                    tooltip: 'See source',
                    // Link URL
                    link: 'https://github.com/xwiki-contrib/application-interactive-maps',
                    // Icon of the button
                    icon: Icons['code']
                },
                {
                    tooltip: 'See app',
                    link: 'https://extensions.xwiki.org/xwiki/bin/view/Extension/InteractiveMapsApplication/',
                    icon: Icons['link']
                }
            ]
        },
        {
            name: 'OpenCL code-generation backend for GPU-enhanced Neural Networks',
            icon: <SettingsInputAntennaIcon />,
            description: 'GeNN is a GPU-enhanced Neuronal Network simulation environment based on code generation for NVIDIA CUDA. This project added a new OpenCL based backend to GeNN.',
            links: [
                {
                    tooltip: 'See source',
                    link: 'https://github.com/9inpachi/genn',
                    icon: Icons['code']
                }
            ]
        },
        {
            name: 'Phoenix',
            icon: <WbIridescentIcon />,
            description: 'A web-based experiment independent event display for High Energy Physics.',
            links: [
                {
                    tooltip: 'See source',
                    link: 'https://github.com/hsf/phoenix',
                    icon: Icons['code']
                },
                {
                    tooltip: 'See app',
                    link: 'https://hepsoftwarefoundation.org/phoenix/',
                    icon: Icons['link']
                }
            ]
        },
        {
            name: 'Empower Youth for Work - Oxfam GB',
            icon: <BusinessCenterIcon />,
            description: 'A web system to manage beneficiaries information and keep track of beneficiaries influenced by the EYW project.',
            links: [
                {
                    tooltip: 'See app',
                    link: 'https://oipeywdb.com/',
                    icon: Icons['link']
                }
            ]
        }
    ]
};

/** Config for sections */
const CustomSectionsConfig = [
    // PROJECTS SECTION
    {
        // Name of the section
        name: 'projects',
        // Icon next to the header title. The headerIcon can use any SVG icon, material icons are preferred
        // See https://material-ui.com/components/material-icons/
        headerIcon: <ComputerIcon />,
        // Extra classes to apply styling
        // "section-reverse" class makes a section right to left
        extraClass: '',
        // If you don't want a section in menu, make this true
        notInMenu: false,
        // Content inside the section
        content: (
            <>
                {ProjectsConfig.projects.map((project, index) => {
                    return (
                        <div key={'project-' + index}>
                            <h3 style={{ fontSize: '1.4rem' }}>{project.icon} {project.name}</h3>
                            <p>{project.description}</p>
                            <div style={{ textAlign: 'right' }}>
                                {project.links.map((link, linkIndex) => {
                                    return (
                                        <CircleButton key={'project-link-' + index + linkIndex} link={link.link} 
                                            target="_blank" tooltip={link.tooltip} size={1.4}>
                                            {link.icon}
                                        </CircleButton>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </>
        )
    },
    // ABOUT SECTION
    {
        name: 'about',
        headerIcon: <InfoIcon />,
        extraClass: 'about-section section-reverse',
        content: (
            <>
                <h4>{Icons['helpoutline']} who is this guy?</h4>
                <p>
                    An easily excited and a highly passionate full stack developer trying to support the world of open source with his little efforts. Full of eagerness to learn and work on new technologies. :)
                </p>

                <h4>{Icons['code']} programming</h4>
                <p className="programming-icons">
                    {Icons['java']}
                    {Icons['cpp']}
                    {Icons['typescript']}
                    {Icons['javascript']}
                </p>

                <h4>{Icons['web']} web</h4>
                <p className="programming-icons">
                    {Icons['graphql']}
                    {Icons['mysql']}
                    {Icons['php']}
                    {Icons['mongodb']}
                    {Icons['nodejs']}
                    {Icons['react']}
                    {Icons['angular']}
                </p>
            </>
        )
    },
    {
        name: 'reviews',
        headerIcon: <RateReviewIcon />,
        content: (
            <>
                <h4 style={{ fontSize: '2em' }}>{Icons['helpoutline']} what do others say?</h4>
                <p>
                    <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>“</span>
                    <br />
                    Fawad did an excellent job for us on Phoenix. He worked hard, writing very good and legible code and made an invaluable contribution to the project.
                </p>
                <p>We like that he is very motivated, self-driven and is already an experienced and knowledgable coder.</p>
                <p style={{ textAlign: 'right', fontSize: 'small' }}>
                    <i>
                        <b>Edward Moyse</b>
                        <br />
                        Software Coordinator
                        <br />
                        CERN
                    </i>
                </p>
                <p>
                    <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>“</span>
                    <br />
                    The mentors have noticed that Fawad has strong technical skills, an ability to learn quickly new technologies, that he is very flexible and open minded, ready to discuss his views and to ponder about the pros and cons in a thoughtful and collected manner, making his own decisions taking into account the feedback he gets without accepting everything nor rejecting anything.
                </p>
                <p style={{ textAlign: 'right', fontSize: 'small' }}>
                    <i>
                        <b>Stéphane Lauriere &amp; Ecaterina Moraru</b>
                        <br />
                        XWiki SAS
                    </i>
                </p>
                <p>
                    <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>“</span>
                    <br />
                    I have really appreciated your confidence to solve problems yourself and follow your own intuition even when it goes against what I was suggesting. I feel you were mostly right :)
                </p>
                <p style={{ textAlign: 'right', fontSize: 'small' }}>
                    <i>
                        <b>James Knight</b>
                        <br />
                        GeNN Team
                        <br />
                        Research Fellow
                        <br />
                        The University of Sussex
                    </i>
                </p>
            </>
        )
    }
];

export { CommonConfig, ProjectsConfig, CustomSectionsConfig, Icons };
