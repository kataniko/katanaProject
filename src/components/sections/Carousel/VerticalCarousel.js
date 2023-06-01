
import React from "react";
import styled from "@emotion/styled";
import Slide from "./Slide";
import PropTypes from "prop-types";
import { Grid, Box } from "@mui/material";


const Wrapper = styled(Box)({
  position: "relative",
  display: "flex",
  justifyContent: "right",
  width: "90%",
  height: "600px",
});


const ProgressBarContainer = styled(Box)({
  position: "absolute",
  top: 0,
  right: -60, /* Adjust the value to move the progress bar more to the left */
  bottom: 0,
  width: "1px",
  background: "#ccc",
  transform: { xs: "rotate(90deg)" }, // Rotate the progress bar 90 degrees
});


const ProgressBar = styled.div`
  position: relative;
  height: 8px;
  width:5px;
  margin-left:-2.5px;
  background: linear-gradient(#ffed00, #0000ff); /* Linear gradient from yellow (#ffed00) to blue (#0000ff) */
  transition: height 0.3s ease;
  transform-origin: bottom; /* Align the progress bar to grow from the bottom */
  border-radius:20

  &::before {
    content: attr(data-count);
    position: absolute;
    top: -24px;
    left: 50%;
    transform: translateX(-50%);
    padding: 4px 8px;
    background-color: #000;
    color: #fff;
    border-radius: 4px;
    font-weight: bold;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width:4px;
    bottom: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }

`;


function mod(a, b) {
  return ((a % b) + b) % b;
}

class VerticalCarousel extends React.Component {
  state = {
    index: 0,
    goToSlide: null,
    prevPropsGoToSlide: 0,
    newSlide: false
  };

  static propTypes = {
    slides: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.any,
        content: PropTypes.object
      })
    ).isRequired,
    goToSlide: PropTypes.number,
    showNavigation: PropTypes.bool,
    offsetRadius: PropTypes.number,
    animationConfig: PropTypes.object
  };

  static defaultProps = {
    offsetRadius: 2,
    animationConfig: { tension: 100, friction: 100 }
  };

  modBySlidesLength = (index) => {
    return mod(index, this.props.slides.length);
  };

  moveSlide = (direction) => {
    this.setState({
      index: this.modBySlidesLength(this.state.index + direction),
      goToSlide: null
    });
  };

  clampOffsetRadius(offsetRadius) {
    const { slides } = this.props;
    const upperBound = Math.floor((slides.length - 1) / 2);

    if (offsetRadius < 0) {
      return 0;
    }
    if (offsetRadius > upperBound) {
      return upperBound;
    }

    return offsetRadius;
  }

  getPresentableSlides() {
    const { slides } = this.props;
    const { index } = this.state;
    let { offsetRadius } = this.props;
    offsetRadius = this.clampOffsetRadius(offsetRadius);
    const presentableSlides = new Array();

    for (let i = -offsetRadius; i < 1 + offsetRadius; i++) {
      presentableSlides.push(slides[this.modBySlidesLength(index + i)]);
    }

    return presentableSlides;
  }

  render() {
    const { animationConfig, offsetRadius, showNavigation } = this.props;
    const { index } = this.state;

    const progressBarHeight = ((this.props.slides.length - 1 - index) / (this.props.slides.length - 1)) * 100 + "%";


    return (
      <React.Fragment>
        <Wrapper>
          {this.getPresentableSlides().map((slide, presentableIndex) => (
            <Slide
              key={slide.key}
              content={slide.content}
              moveSlide={this.moveSlide}
              offsetRadius={this.clampOffsetRadius(offsetRadius)}
              index={presentableIndex}
              animationConfig={animationConfig}
            />
          ))}


          <ProgressBarContainer >
            <ProgressBar style={{ height: progressBarHeight }} data-count={index + 1} />
          </ProgressBarContainer>

        </Wrapper>
      </React.Fragment>
    );
  }
}
export default VerticalCarousel;  