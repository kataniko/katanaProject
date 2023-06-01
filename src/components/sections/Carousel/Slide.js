import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Spring } from "react-spring/renderprops";
import { withGesture } from "react-with-gesture";
import { Card } from "@mui/material"

const SlideContainer = styled.div`
  position: absolute;
  top: 50%;
  display: flex;
  align-items: left;
  justify-content: center;
  transform-origin: 50% 100%;

`;

const SlideCard = styled(Card)({
  position: "relative",
  width: { xs: "350px", md: "400px" },
  height: "500px",
  background: "white",
  fontSize: "35px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transformOrigin: "50% 50%",
  borderRadius: 20,
  backgroundColor: "transparent"

})

function Slide({
  content,
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
  delta,
  down,
  up
}) {
  const offsetFromMiddle = index + offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 1));


  const translateYoffset =
    50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
  let translateY = -50;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateY = 0;
    } else if (index === totalPresentables - 1) {
      translateY = -100;
    }
  }

  if (offsetFromMiddle === 0 && down) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -50) {
      moveSlide(-1);
    }
    if (translateY < -100) {
      moveSlide(1);
    }
  }
  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      moveSlide(-offsetFromMiddle);
    }, 4000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, []);

  return (
    <Spring to={styles[index]} config={animationConfig}>
      {(style) => (
        <SlideContainer
          style={{
            ...style,
            zIndex: Math.abs(Math.abs(offsetFromMiddle) + 10)
          }}
        >
          <SlideCard onClick={() => moveSlide(offsetFromMiddle)}>
            {content}
          </SlideCard>
        </SlideContainer>
      )}
    </Spring>
  );
}

const styles = {
  0: {
    transform: "translateX(0%) translateY(-91.7%) scale(0.8)",
    top: "40%",
    opacity: 0.1,
    transition: "0.5s fade"
  },
  1: {
    transform: "translateX(0%) translateY(-80%) scale(0.85)",
    top: "42%",
    opacity: 0.3,
    transition: "0.5s fade"
  },
  2: {
    transform: "translateX(0%) translateY(-70%) scale(0.9)",
    top: "44%",
    opacity: 0.5,
    transition: "0.5s fade"
  },
  3: {
    transform: "translateX(0%) translateY(-60%) scale(0.95)",
    top: "47%",
    opacity: 0.9,
    transition: "0.5s fade"
  },
  4: {
    transform: "translateX(0%) translateY(-40%) scale(1)",
    top: "50%",
    opacity: 1,
    transition: "0.5s fade"
  },
};
export default withGesture()(Slide);
