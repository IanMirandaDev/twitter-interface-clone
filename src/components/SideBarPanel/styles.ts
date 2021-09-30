import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 15px;
  background: var(--secondary);
  margin-bottom: 15px;
  padding-top: 3px;
  padding-bottom: 7px;
`;

export const Header = styled.div`
  align-items: center;
  text-align: left;
  padding: 10px 16px;

  > h1 {
    font-weight: 700;
    font-size: 19px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
