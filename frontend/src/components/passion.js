import React from 'react';
import {
  PassionContainer,
  PassionSceneContainer,
  PassionText,
} from './layoutComponents';
import PassionScene from '../assets/MyPassionScene.svg';

const default_passion_text =
  'I love to solve problems and I’m interessted in connecting front-end, back-end, artificial intelligence and human-machine interaction together';

const Passion = ({ data }) => {
  const cms_passion_text = data[0].node.passion_text;

  if (cms_passion_text === undefined) cms_passion_text = default_passion_text;

  return (
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
        <p>{cms_passion_text}</p>
      </PassionText>
    </PassionContainer>
  );
};

export default Passion;
