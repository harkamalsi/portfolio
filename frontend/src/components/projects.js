import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { ProjectsContainer, ProjectsGrid, Project } from './layoutComponents';
import { ButtonTertiary, ButtonSecondary } from '../elements/button';

const ProjectsData = [
  {
    justifySelf: 'start',
    bgColor: '#FFFFCD',
    gridArea: 'project1',
    imgAlt: 'Inverse Pacman',
    title: 'Inverse Pacman',
    description:
      'An android mobile game, inspired by Pacman, with different difficulty levels and multiplayer mode.',
  },
  {
    justifySelf: 'end',
    bgColor: '#FFD5FB',
    gridArea: 'project2',
    imgAlt: 'Spisested Advisor',
    title: 'Spisested Advisor',
    description:
      'A prototype imitating tripadvisor’s functionality but only for different norwegian eating places.',
  },
  {
    justifySelf: 'start',
    bgColor: '#D3FFE2',
    gridArea: 'project3',
    imgAlt: 'Inverse Pacman',
    title: 'Inverse Pacman',
    description:
      'An android mobile game, inspired by Pacman, with different difficulty levels and multiplayer mode.',
  },
  {
    justifySelf: 'end',
    bgColor: '#D3FCFF',
    gridArea: 'project4',
    imgAlt: 'Inverse Pacman',
    title: 'Inverse Pacman',
    description:
      'An android mobile game, inspired by Pacman, with different difficulty levels and multiplayer mode.',
  },
];

const Projects = ({ data }) => (
  <ProjectsContainer>
    <h1>What I've been working on</h1>
    <ProjectsGrid
      data-sal='slide-up'
      data-sal-duration='700'
      data-sal-easing='ease-out-quad'
    >
      {data.map(
        ({
          node: {
            justifySelf,
            bgColor,
            gridArea,
            imgAlt,
            title,
            description,
            cover, //image
            codeLink,
          },
        }) => (
          <Project
            justifySelf={justifySelf}
            bgcolor={bgColor}
            gridArea={gridArea}
          >
            <a href={codeLink} rel='noreferrer' target='_blank'>
              <BackgroundImage
                className='project-img'
                alt={imgAlt}
                fluid={cover.childImageSharp.fluid}
              ></BackgroundImage>
              <h2>{title}</h2>
              <p>{description}</p>
              <ButtonTertiary>
                VIEW PROJECT <span style={{ fontSize: '20px' }}>›</span>
              </ButtonTertiary>
            </a>
          </Project>
        )
      )}
    </ProjectsGrid>
    <ButtonSecondary className='col'>See more</ButtonSecondary>
  </ProjectsContainer>
);

export default Projects;
