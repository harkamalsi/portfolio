import React from 'react';
import {
  FooterContainer,
  FormGridContainer,
  GridContainer,
  HumansContainer,
} from './layoutComponents';
import { InputName, TextInput } from '../elements/inputfield';
import { ButtonPrimary } from '../elements/button';

const Footer = () => (
  <FooterContainer>
    <h1>Get In Touch</h1>
    <p>
      Looking for a developer, want to collaborate or just talk?
      <br />
      Feel free to reach out!
    </p>
    <GridContainer>
      <FormGridContainer gridArea='name'>
        <InputName>Name</InputName>
        <TextInput></TextInput>
      </FormGridContainer>
      <FormGridContainer gridArea='email'>
        <InputName>Email</InputName>
        <TextInput></TextInput>
      </FormGridContainer>
      <FormGridContainer gridArea='subject'>
        <InputName placeholder='Want to collaborate?'>Subject</InputName>
        <TextInput></TextInput>
      </FormGridContainer>
      <FormGridContainer
        gridArea='message'
        alignSelf='stretch'
        style={{ height: '150%' }}
      >
        <InputName>Message</InputName>
        <TextInput></TextInput>
      </FormGridContainer>
      <FormGridContainer gridArea='submit' alignSelf='start'>
        <ButtonPrimary>Submit</ButtonPrimary>
      </FormGridContainer>
      <HumansContainer>
        <img alt='Humans here' />
      </HumansContainer>
    </GridContainer>
  </FooterContainer>
);

export default Footer;
