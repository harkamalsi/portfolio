import React from 'react';
import { Link } from 'gatsby';
import { ProjectsContainer, ProjectsGrid, Project } from './layoutComponents';
import { ButtonTertiary, ButtonSecondary } from '../elements/button';

const data = [
  <Project justifySelf='start' bgcolor='#FFFFCD' gridArea='project1'>
    <Link>
      <img alt='Inverse Pacman'></img>
      <h2>Inverse Pacman</h2>
      <p>
        An android mobile game, inspired by Pacman, with different difficulty
        levels and multiplayer mode.
      </p>

      <ButtonTertiary>
        VIEW PROJECT <span style={{ fontSize: '20px' }}>›</span>
      </ButtonTertiary>
    </Link>
  </Project>,
  <Project justifySelf='end' bgcolor='#FFD5FB' gridArea='project2'>
    <Link>
      <img alt='Spisested Advisor'></img>
      <h2>Spisested Advisor</h2>
      <p>
        A prototype imitating tripadvisor’s functionality but only for different
        norwegian eating places.
      </p>
      <ButtonTertiary>
        VIEW PROJECT <span style={{ fontSize: '20px' }}>›</span>
      </ButtonTertiary>
    </Link>
  </Project>,
  <Project justifySelf='start' bgcolor='#D3FFE2' gridArea='project3'>
    <Link>
      <img alt='Inverse Pacman'></img>
      <h2>Inverse Pacman</h2>
      <p>
        An android mobile game, inspired by Pacman, with different difficulty
        levels and multiplayer mode.
      </p>
      <ButtonTertiary>
        VIEW PROJECT <span style={{ fontSize: '20px' }}>›</span>
      </ButtonTertiary>
    </Link>
  </Project>,
  <Project justifySelf='end' bgcolor='#D3FCFF' gridArea='project4'>
    <Link>
      <img alt='Inverse Pacman'></img>
      <h2>Inverse Pacman</h2>
      <p>
        An android mobile game, inspired by Pacman, with different difficulty
        levels and multiplayer mode.
      </p>
      <ButtonTertiary>
        VIEW PROJECT <span style={{ fontSize: '20px' }}>›</span>
      </ButtonTertiary>
    </Link>
  </Project>,
];

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

const Projects = () => (
  <ProjectsContainer>
    <h1>What I've been working on</h1>
    <ProjectsGrid
      data-sal='slide-up'
      data-sal-duration='700'
      data-sal-easing='ease-out-quad'
    >
      {ProjectsData.map(
        ({ justifySelf, bgColor, gridArea, imgAlt, title, description }) => (
          <Project
            justifySelf={justifySelf}
            bgcolor={bgColor}
            gridArea={gridArea}
          >
            <Link>
              <img alt={imgAlt}></img>
              <h2>{title}</h2>
              <p>{description}</p>
              <ButtonTertiary>
                VIEW PROJECT <span style={{ fontSize: '20px' }}>›</span>
              </ButtonTertiary>
            </Link>
          </Project>
        )
      )}
    </ProjectsGrid>
    <ButtonSecondary className='col'>See more</ButtonSecondary>
  </ProjectsContainer>
);

export default Projects;
