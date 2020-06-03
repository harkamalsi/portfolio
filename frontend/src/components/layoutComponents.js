import styled from 'styled-components';

export const MainContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: 100px;
  min-height: 100vh;
  color: #47535e;
  letter-spacing: 0.024em;
`;

export const SpaceDown20 = styled.div`
  padding-bottom: 20vh;
`;

export const HeaderContainer = styled.div`
  height: 710px;
  left: 0px;
  right: 0px;
  top: 0px;
  overflow: hidden;
  background: #f8fbfd;

  h1 {
    /* Harkamal */

    position: absolute;
    width: 404px;
    height: 125px;
    margin: 0 10vw;
    top: 15%;
    font-size: 48px;
    line-height: 24px;
    font-family: DM Serif Display, serif;
  }

  h2 {
    position: absolute;
    width: 826px;
    height: 189px;
    margin: 0 14vw;
    top: 36.4%;
    font-size: 38px;
    line-height: 24px;
    font-family: DM Serif Display, serif;
  }

  svg {
    width: 1600px;
    height: 1200px;
    transform: translate(0px, 100px);
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
`;

export const PassionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10vw;
`;
export const PassionScene = styled.div``;
export const PassionText = styled.div`
  width: 500px;
  height: 250px;

  h1 {
    font-family: DM Serif Display, serif;
    font-style: normal;
    font-size: 38px;
    line-height: 24px;
  }

  p {
    font-family: Inter, -apple-system, sans-serif;
    font-style: normal;
    font-size: 22px;
    line-height: 40px;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10vw;

  h1 {
    font-style: normal;
    font-size: 38px;
    line-height: 24px;
    font-family: DM Serif Display;
  }

  .col {
    margin: 10vh 0;
  }
`;
export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-content: space-between;
  justify-content: space-between;
  row-gap: 10vh;
`;
export const Project = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-self: ${(props) => props.justifySelf || 'center'};
  width: 505px;
  height: 500px;
  background-color: 'gray';

  img {
    background-color: ${(props) => props.bgcolor || 'gray'};
    height: 300px;
  }

  h2 {
    font-family: DM Serif Display;
    font-size: 28px;
    line-height: 24px;
  }

  p {
    font-family: Inter, -apple-system, sans-serif;
    font-size: 20px;
    line-height: 24px;
  }
`;

export const FooterContainer = styled.div`
  height: 90vh;
  background-color: #f8fbfd;
  display: grid;
  grid-template-columns: 1fr repeat(8, 1fr) 1fr;
  grid-template-rows: 1fr repeat(7, 1fr) 1fr;
  gap: 0;

  h1 {
    grid-area: 2 / 2 / 3 / 4;
    font-family: DM Serif Display, serif;
    font-size: 38px;
    line-height: 24px;
    margin: 0;
  }

  p {
    grid-area: 3 / 2 / 4 / 6;
    font-family: Inter, -apple-system, sans-serif;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.024em;
    margin: 0;
  }
`;
export const GridContainer = styled.div`
  grid-area: 4 / 2 / 9 / 10;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 0 2em;
`;
const formGridAreaDict = {
  name: '1 / 1 / 2 / 3',
  email: '1 / 3 / 2 / 5',
  subject: '2 / 1 / 3 / 5',
  message: '3 / 1 / 5 / 5',
  submit: '5 / 1 / 6 / 2',
};
export const FormGridContainer = styled.div`
  grid-area: ${(props) => formGridAreaDict[props.gridArea] || 'auto'};
  align-self: ${(props) => props.alignSelf || 'auto'};
`;
export const HumansContainer = styled.div`
  grid-area: 1 / 6 / 6 / 10;
  width: 100%;
  height: 100%;
  background-color: gray;
  img {
    background-color: black;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0px 1.0875rem;
  padding-top: 0;
`;
export const Row = styled.div`
  display: flex;
  flex: ${(props) => (props.flex ? props.flex : 'initial')};
  flex-direction: row;
  flex-wrap: ${(props) => (props.wrap ? props.wrap : 'initial')};
  align-content: ${(props) =>
    props.alignContent ? props.alignContent : 'initial'};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'initial'};
  @media screen and (max-width: 768px) {
    flex-direction: ${(props) => (props.mobile ? 'column' : 'row')};
  }
`;
export const Column = styled.div`
  flex: ${(props) => (props.flex ? props.flex : 'initial')};
  flex-direction: column;
  align-content: ${(props) =>
    props.alignContent ? props.alignContent : 'initial'};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'initial'};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  width: ${(props) => (props.width ? props.width : 'auto')};
`;
