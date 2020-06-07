import React, { useState } from 'react';
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

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, subject, message });
    alert({ name, email, subject, message });
  };

  return (
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

      <FormContainer onSubmit={handleSubmit}>
        <GridItemContainer gridArea='name'>
          <InputName>Name</InputName>
          <TextInput
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></TextInput>
        </GridItemContainer>
        <GridItemContainer gridArea='email'>
          <InputName>Email</InputName>
          <TextInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextInput>
        </GridItemContainer>
        <GridItemContainer gridArea='subject'>
          <InputName>Subject</InputName>
          <TextInput
            placeholder='Want to collaborate?'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          ></TextInput>
        </GridItemContainer>
        <GridItemContainer gridArea='message' alignSelf='stretch'>
          <InputName>Message</InputName>
          <TextArea
            rows='4'
            cols='50'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></TextArea>
        </GridItemContainer>
        <GridItemContainer gridArea='submit' alignSelf='end'>
          <ButtonPrimary>Submit</ButtonPrimary>
        </GridItemContainer>
        <GridItemContainer gridArea='socialMedia' alignSelf='end'>
          <SocialMediaContainer>
            <a
              href='https://www.linkedin.com/in/harkamaljit/'
              target='_blank'
              rel='noreferrer'
            >
              <Linkedin style={{ cursor: 'pointer' }} tabIndex='0' />
            </a>
            <a
              href='https://github.com/harkamalsi/'
              target='_blank'
              rel='noreferrer'
            >
              <Github style={{ cursor: 'pointer' }} tabIndex='0' />
            </a>
          </SocialMediaContainer>
        </GridItemContainer>
      </FormContainer>

      <HumansAndSceneContainer
        data-sal='slide-left'
        data-sal-duration='1600'
        data-sal-easing='ease'
      >
        <HumansAndScene />
      </HumansAndSceneContainer>
    </FooterContainer>
  );
};

export default Footer;
