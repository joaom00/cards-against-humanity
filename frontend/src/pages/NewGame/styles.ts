import styled from 'styled-components';

export const Background = styled.div`
  background-color: #202020;
  height: 100vh;
`;

export const Container = styled.div`
  max-width: 735px;
  height: 100vh;
  margin: 0 auto;

  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > button {
    align-self: center;
    border: 0;
    outline: 0;

    font-family: Nunito;
    font-size: 24px;
    font-weight: 600;

    padding: 32px 64px;
    border-radius: 5px;

    transition: filter 0.3s ease;

    &:focus {
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.8);
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Header = styled.header`
  h1 {
    font-family: Nunito;
    font-weight: normal;
    font-size: 64px;

    color: #f0f0f0;

    margin-bottom: 16px;
  }

  p {
    font-family: Nunito;
    font-weight: 400;
    font-size: 18px;

    color: #f0f0f0;
  }
`;

export const InputContainer = styled.div`
  display: flex;

  .input-block {
    margin-top: 110px;
    margin-bottom: 72px;
    text-align: start;
    flex: 1;

    label {
      display: block;

      font-family: Nunito;
      font-size: 18px;
      color: #f0f0f0;
      margin-bottom: 8px;
    }

    input {
      width: 100%;
      border: 0;
      outline: 0;
      background-color: #f0f0f0;

      padding: 16px;
      border-radius: 5px;

      &:focus {
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.8);
      }
    }
  }

  .input-block + .input-block {
    margin-left: 32px;
  }
`;
