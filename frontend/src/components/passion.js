import React from 'react';
import {
  PassionContainer,
  PassionSceneContainer,
  PassionText,
} from './layoutComponents';
import PassionScene from '../assets/MyPassionScene.svg';

const Passion = () => (
  <PassionContainer>
    <PassionSceneContainer
      data-sal='slide-down'
      data-sal-duration='1200'
      data-sal-easing='ease-out-back'
      data-sal-delay='500'
    >
      <PassionScene />
    </PassionSceneContainer>
    <PassionText>
      <h1>My Passion</h1>
      <p>
        I love to solve problems and I’m interessted in connecting front-end,
        back-end, artificial intelligence and human-machine interaction
        together.
      </p>
    </PassionText>
  </PassionContainer>
);

export default Passion;
