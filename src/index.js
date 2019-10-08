import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  transition: transform 1s;
  border-radius: 50%;
  ${({ size, rotation, darkColor, border }) => css`
    background-color: ${darkColor};
    width: ${size}px;
    height: ${size}px;
    transform: rotate(${rotation});
    border: ${border};
  `}
`;

const Half = styled.div`
  width: 100%;
  overflow: hidden;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  ${({ invert }) =>
    invert &&
    css`
      transform: scaleX(-1);
    `}
`;

const getNormalizedPhase = phase => (phase <= 0.5 ? phase : 1 - phase);

const getRotationRad = phase => {
  const normalizedPhase = getNormalizedPhase(phase);
  const rad = (Math.PI * normalizedPhase) / 0.5;
  return rad;
};

const Difference = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  background: ${({ phase, darkColor, lightColor }) =>
    0.5 / getNormalizedPhase(phase) > 2 ? darkColor : lightColor};
  ${({ size, phase }) => css`
    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;
    transform: translateX(-50%) rotateY(${getRotationRad(phase)}rad);
  `}
`;

const Circle = styled.div`
  ${({ size, lightColor }) => css`
    width: ${size}px;
    height: ${size}px;
    background-color: ${lightColor};
  `}
  border-radius: 50%;
`;

const Moon = ({
  size,
  rotation,
  darkColor,
  lightColor,
  phase,
  border,
  ...props
}) => {
  return (
    <Wrapper
      darkColor={darkColor}
      rotation={rotation}
      size={size}
      border={border}
      {...props}
    >
      <Half size={size} isVisible={phase <= 0.5}>
        <Circle darkColor={darkColor} lightColor={lightColor} size={size} />
      </Half>
      <Difference
        darkColor={darkColor}
        lightColor={lightColor}
        size={size}
        phase={phase}
      />
      <Half size={size} invert isVisible={phase >= 0.5}>
        <Circle darkColor={darkColor} lightColor={lightColor} size={size} />
      </Half>
    </Wrapper>
  );
};

Moon.propTypes = {
  size: PropTypes.number,
  rotation: PropTypes.string,
  darkColor: PropTypes.string,
  lightColor: PropTypes.string,
  phase: PropTypes.Number,
  border: PropTypes.string,
};

Moon.defaultProps = {
  size: 80,
  darkColor: 'black',
  lightColor: 'white',
  rotation: 0,
  phase: 0.16,
  border: '4px solid black',
};

export default Moon;
