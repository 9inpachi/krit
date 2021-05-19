import React, { Component } from 'react';
import { ChevronRight, Description, PlayArrow } from '@material-ui/icons';
import CircleButton from '../CircleButton/CircleButton';
import { Icons } from '../../CONFIG.icons';
import './FreePalestine.scss';

class FreePalestine extends Component {
  constructor() {
    super();
    this.state = { isHiding: false, hidden: false };
    document.body.style.setProperty('overflow', 'hidden');
  }

  render() {
    const getClassNames = (...classNames) => classNames.filter(className => className).join(' ');
    const wrapperClassNames = getClassNames(
      "free-palestine",
      this.state.hidden && "hidden",
      this.state.isHiding && "is-hiding"
    );

    return (
      <>
        <div className={wrapperClassNames}>
          <div className="free-palestine-content">
            <h1><span>Free</span><br />Palestine</h1>
            <CircleButton link="https://twitter.com/hashtag/FreePalestine" tooltip="#FreePalestine on Twitter">
              {Icons['twitter']}
            </CircleButton>
            <CircleButton link="http://facebook.com/hashtag/FreePalestine" tooltip="#FreePalestine on Facebook">
              {Icons['facebook']}
            </CircleButton>
            <CircleButton link="https://www.google.com/search?q=palestine&amp;tbm=nws" tooltip="Latest news">
              <Description />
            </CircleButton>
            <CircleButton link="https://youtu.be/_mBBGp7Pwnw=nws" tooltip="Watch video to learn more">
              <PlayArrow />
            </CircleButton>
          </div>
          <CircleButton
            className="to-website"
            onClick={() => {
              document.body.style.removeProperty('overflow');
              this.setState({ isHiding: true });
              setTimeout(() => this.setState({ hidden: true, isHiding: false }), 1000);
            }}
            size={2}
            tooltip="Go to website"
          >
            <ChevronRight />
          </CircleButton>
        </div>
      </>
    )
  }
}

export default FreePalestine;
