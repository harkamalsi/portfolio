import React from 'react';
import { ProjectsContainer, ProjectsGrid, Project } from './layoutComponents';
import { ButtonTertiary, ButtonSecondary } from '../elements/button';

const data = [
  <Project justifySelf='start' bgcolor='#FFFFCD' gridArea='project1'>
    <img alt='Inverse Pacman'></img>
    <h2>Inverse Pacman</h2>
    <p>
      An android mobile game, inspired by Pacman, with different difficulty
      levels and multiplayer mode.
    </p>
    <ButtonTertiary>
      VIEW PROJECT <span style={{ fontSize: '20px' }}>›</span>
    </ButtonTertiary>
  </Project>,
  <Project justifySelf='end' bgcolor='#FFD5FB' gridArea='project2'>
    <img alt='Spisested Advisor'></img>
    <h2>Spisested Advisor</h2>
    <p>
      A prototype imitating tripadvisor’s functionality but only for different
      norwegian eating places.
    </p>
    <ButtonTertiary>
      VIEW PROJECT <span style={{ fontSize: '20px' }}>›</span>
    </ButtonTertiary>
  </Project>,
  <Project justifySelf='start' bgcolor='#D3FFE2' gridArea='project3'>
    <img alt='Inverse Pacman'></img>
    <h2>Inverse Pacman</h2>
    <p>
      An android mobile game, inspired by Pacman, with different difficulty
      levels and multiplayer mode.
    </p>
    <ButtonTertiary>
      VIEW PROJECT <span style={{ fontSize: '20px' }}>›</span>
    </ButtonTertiary>
  </Project>,
  <Project justifySelf='end' bgcolor='#D3FCFF' gridArea='project4'>
    <img alt='Inverse Pacman'></img>
    <h2>Inverse Pacman</h2>
    <p>
      An android mobile game, inspired by Pacman, with different difficulty
      levels and multiplayer mode.
    </p>
    <ButtonTertiary>
      VIEW PROJECT <span style={{ fontSize: '20px' }}>›</span>
    </ButtonTertiary>
  </Project>,
];

const Projects = () => (
  <ProjectsContainer>
    <h1 className='col'>What I've been working on</h1>
    <ProjectsGrid>{data}</ProjectsGrid>
    <ButtonSecondary className='col'>See more</ButtonSecondary>
  </ProjectsContainer>
);

export default Projects;
