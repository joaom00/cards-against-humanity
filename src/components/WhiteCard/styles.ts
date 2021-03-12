import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  font-family: Nunito;

  background-color: #fff;
  width: 142px;
  height: 174px;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0px 20px 40px rgba(32, 32, 32, 0.08);
  display: flex;
  flex-direction: column;

  overflow-y: auto;

  p {
    flex: 1;
    font-size: 14px;
    font-weight: 700;
  }

  img {
    align-self: start;
  }
`;
