import styled from 'styled-components';

export const Background = styled.div`
  height: 100vh;
  background-color: #202020;
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.h1`
  color: #f0f0f0;
  font-size: 64px;
  font-weight: 400;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    font-family: Nunito;
    font-weight: normal;
    font-size: 18px;

    color: #6f6f6f;
    text-align: right;
  }
`;

export const Buttons = styled.div`
  .new-game-btn {
    border: 0;
    outline: 0;
    border-radius: 5px;

    font-family: Nunito;
    font-size: 24px;
    font-weight: 600;

    padding: 32px 64px;
    margin-right: 32px;

    background-color: #fff;

    transition: filter 0.3s ease;

    &:hover {
      filter: brightness(0.9);
    }

    &:focus {
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.8);
    }
  }

  .code-btn {
    border: 2px solid #ffffff;
    border-radius: 5px;
    outline: 0;

    font-family: Nunito;
    font-size: 24px;
    font-weight: 600;

    padding: 32px 64px;

    background-color: transparent;
    color: #fff;

    transition: filter 0.3s ease;

    &:hover {
      filter: brightness(0.9);
    }

    &:focus {
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.8);
    }
  }
`;
