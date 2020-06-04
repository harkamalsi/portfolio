import React from 'react';
import {
  PassionContainer,
  PassionSceneContainer,
  PassionText,
} from './layoutComponents';
import PassionScene from '../assets/MyPassionScene.svg';

const Passion = () => (
  <PassionContainer>
    <PassionSceneContainer>
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
