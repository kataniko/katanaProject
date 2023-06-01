import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './SlideButton.css'; // Import the CSS file containing the animation styles

const SlideButton = () => {
  const handleClick = () => {
    // Handle button click event
  };

  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
      <button className="animated-button" onClick={handleClick}>
        Click me
      </button>
    </CSSTransition>
  );
};

export default SlideButton;
