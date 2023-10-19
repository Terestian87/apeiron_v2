import React from "react";
import styled, { keyframes, css } from "styled-components";

import { ReactComponent as BlackHole } from "../assets/blackHole.svg";

const spin = keyframes`
0%{
  opacity:0;
  transform:rotate(0deg) scale(0.3);
}
25%{
  transform:rotate(80deg) scale(1)
}
40% {
  opacity:1;
} 
100%{
  transform: rotate(-1400deg) scale(0);
  opacity:0;
}
`;

const unSpin = keyframes`
0%{
  opacity:0;
  transform:rotate(0deg) scale(0.1);
}
70%{
  opacity:1;
  transform:rotate(-360deg) scale(1.2);
}

100%{
  opacity:0;
  transform: rotate(-325deg) scale(0.7);
}
`;

const StyledQuoteWrapper = styled("div")<{ reversed: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: center;

  svg {
    object-fit: contain;
    width: 50%;
    height: 50%;
    animation: ${(props) =>
        props.reversed
          ? css`
              ${unSpin}
            `
          : css`
              ${spin}
            `}
      ${process.env.REACT_APP_SPIRAL_TIMER}ms ease;
    opacity: 0;

    path {
      fill: var(--spiral-color);
    }
    g {
      path {
        fill: var(--spiral-color);
      }
    }
  }
`;

interface SpiralProps {
  isReverse: boolean;
}

const Spiral: React.FC<SpiralProps> = (props) => {
  return (
    <StyledQuoteWrapper reversed={props.isReverse}>
      <BlackHole />
    </StyledQuoteWrapper>
  );
};

export default Spiral;
