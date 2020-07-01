import React from 'react';
import CircleButton from '../../components/CircleButton/CircleButton';
import './TopSection.scss';

import { CommonConfig, Icons } from '../../CONFIG';

class TopSection extends React.Component {
    render() {
        return (
            <div className="top-section">
                <div className="intro">
                    <h1>{CommonConfig.name}</h1>
                    <p>{CommonConfig.tagline}</p>
                </div>
                <div className="signature">
                    <svg viewBox="0 0 100 100">
                        <path className="signature-path" stroke="var(--text-primary)" fill="none" strokeWidth="1"
                            d={CommonConfig.signaturePathD} />
                    </svg>
                </div>
                <div className="social">
                    {CommonConfig.social.map((socialDetails, index) => {
                        return (
                            <CircleButton key={'top-section-social-' + index} tooltip={socialDetails.name} tooltipPlacement="top"
                                link={socialDetails.link} target="_blank">
                                {/* If the social platform icon is given then use that else pick from default icons */}
                                {socialDetails.icon
                                    ? socialDetails.icon : Icons[socialDetails.name.toLowerCase()]}

                            </CircleButton>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default TopSection;