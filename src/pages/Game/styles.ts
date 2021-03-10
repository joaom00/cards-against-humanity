import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  background-color: #f0f0f0;

  display: flex;

  .players {
    width: 20vw;
  }

  .main {
    width: 80vw;
  }
`;

export const Main = styled.div`
  width: calc(80vw - 20vw);
  display: flex;
  flex-direction: column;
`;

export const Cards = styled.div`
  height: 70vh;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 32px;
  overflow: auto;

  div + div {
    margin-left: 8px;
  }
`;

export const UserCards = styled.div`
  height: 30vh;
  display: flex;
  justify-content: center;

  div + div {
    margin-left: 16px;
  }
`;
