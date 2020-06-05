import React from 'react';
import {
  FooterContainer,
  GridItemContainer,
  FormContainer,
  SocialMediaContainer,
  HumansAndSceneContainer,
  LeavesContainer,
} from './layoutComponents';
import { InputName, TextInput } from '../elements/inputfield';
import { ButtonPrimary } from '../elements/button';
import { TextArea } from '../elements/textarea';
import HumansAndScene from '../assets/HumansAndScene.svg';
import Leaves from '../assets/Leaves.svg';
import Linkedin from '../assets/Linkedin.svg';
import Github from '../assets/Github.svg';

const Footer = () => (
  <FooterContainer>
    <LeavesContainer>
      <Leaves />
    </LeavesContainer>
    <h1>Get In Touch</h1>
    <p>
      Looking for a developer, want to collaborate or just talk?
      <br />
      Feel free to reach out!
    </p>
    <FormContainer>
      <GridItemContainer gridArea='name'>
        <InputName>Name</InputName>
        <TextInput></TextInput>
      </GridItemContainer>
      <GridItemContainer gridArea='email'>
        <InputName>Email</InputName>
        <TextInput></TextInput>
      </GridItemContainer>
      <GridItemContainer gridArea='subject'>
        <InputName>Subject</InputName>
        <TextInput placeholder='Want to collaborate?'></TextInput>
      </GridItemContainer>
      <GridItemContainer gridArea='message' alignSelf='stretch'>
        <InputName>Message</InputName>
        <TextArea rows='4' cols='50'></TextArea>
      </GridItemContainer>
      <GridItemContainer gridArea='submit' alignSelf='end'>
        <ButtonPrimary>Submit</ButtonPrimary>
      </GridItemContainer>
      <GridItemContainer gridArea='socialMedia' alignSelf='end'>
        <SocialMediaContainer>
          <Linkedin style={{ cursor: 'pointer' }} tabindex='0' />
          <Github style={{ cursor: 'pointer' }} tabindex='0' />
        </SocialMediaContainer>
      </GridItemContainer>
    </FormContainer>

    <HumansAndSceneContainer>
      <HumansAndScene />
    </HumansAndSceneContainer>
  </FooterContainer>
);

export default Footer;
