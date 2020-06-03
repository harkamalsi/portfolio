import React from 'react';
import {
  PassionContainer,
  PassionScene,
  PassionText,
} from './layoutComponents';

const Passion = () => (
  <PassionContainer>
    <PassionScene>
      <h1>Scene</h1>
    </PassionScene>
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
