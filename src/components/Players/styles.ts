import styled from 'styled-components';

export const Container = styled.div`
  max-width: 208px;
  width: 100%;
  margin: auto 0;
  padding-left: 32px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid #e0e0e0;

  p {
    font-size: 18px;
    color: #202020;
  }

  span {
    font-size: 18px;
    color: #202020;
  }
`;

export const Players = styled.ul`
  padding-top: 16px;

  li {
    list-style: none;
    font-size: 14px;
    color: #cfcfcf;
  }

  li + li {
    margin-top: 8px;
  }
`;
