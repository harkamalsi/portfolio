import React, { useState } from "react";
import {
  FooterContainer,
  GridItemContainer,
  FormContainer,
  SocialMediaContainer,
  HumansAndSceneContainer,
  LeavesContainer
} from "./layoutComponents";
import { InputName, Input } from "../elements/inputfield";
import { ButtonPrimary } from "../elements/button";
import { TextArea } from "../elements/textarea";
import HumansAndScene from "../assets/HumansAndScene.svg";
import Leaves from "../assets/Leaves.svg";
import Linkedin from "../assets/Linkedin.svg";
import Github from "../assets/Github.svg";

const Footer = () => {
  const formUrl = "http://localhost:1337/contacts";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [messageSent, setMessageSent] = useState(false);

  async function postContact(url, data) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data)
    });

    return response.json();
  }

  const handleSubmit = e => {
    e.preventDefault();
    postContact(formUrl, { name, email, subject, message })
      .then(res => {
        if (res) {
          /* return <AniLink paintDrip to='page-2'></AniLink>; */
          setMessageSent(true);
        }
      })
      .catch(err => {
        /* return <AniLink paintDrip to='404'></AniLink>; */
        setMessageSent(false);
      });
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
        <GridItemContainer gridArea="name">
          <InputName>Name</InputName>
          <Input
            required
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          ></Input>
        </GridItemContainer>
        <GridItemContainer gridArea="email">
          <InputName>Email</InputName>
          <Input
            required
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></Input>
        </GridItemContainer>
        <GridItemContainer gridArea="subject">
          <InputName>Subject</InputName>
          <Input
            required
            type="text"
            placeholder="Want to collaborate?"
            value={subject}
            onChange={e => setSubject(e.target.value)}
          ></Input>
        </GridItemContainer>
        <GridItemContainer gridArea="message" alignSelf="stretch">
          <InputName>Message</InputName>
          <TextArea
            required
            rows="4"
            cols="50"
            value={message}
            onChange={e => setMessage(e.target.value)}
          ></TextArea>
        </GridItemContainer>
        <GridItemContainer gridArea="submit" alignSelf="end">
          {messageSent ? (
            <ButtonPrimary disabled>Sent!</ButtonPrimary>
          ) : (
            <ButtonPrimary>Submit</ButtonPrimary>
          )}
        </GridItemContainer>
        <GridItemContainer gridArea="socialMedia" alignSelf="end">
          <SocialMediaContainer>
            <a
              href="https://www.linkedin.com/in/harkamaljit/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin style={{ cursor: "pointer" }} tabIndex="0" />
            </a>
            <a
              href="https://github.com/harkamalsi/"
              target="_blank"
              rel="noreferrer"
            >
              <Github style={{ cursor: "pointer" }} tabIndex="0" />
            </a>
          </SocialMediaContainer>
        </GridItemContainer>
      </FormContainer>

      <HumansAndSceneContainer
        data-sal="slide-left"
        data-sal-duration="1600"
        data-sal-easing="ease"
      >
        <HumansAndScene />
      </HumansAndSceneContainer>
    </FooterContainer>
  );
};

export default Footer;
