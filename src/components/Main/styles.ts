import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: min(601px, 100%);

  @media (min-width: 600px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;
