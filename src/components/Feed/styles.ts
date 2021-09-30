import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  -webkit-user-select: none;
  user-select: none;
  color: var(--twitter);
  padding: 10px 40px 15px;
  text-align: center;
  font-weight: bold;
  outline: 0;
  cursor: pointer;

  &.active,
  &:hover {
    border-bottom: 2px solid var(--twitter);
  }

  &:hover {
    background: var(--dark-hover);
  }
`;

export const TabContainer = styled.div`
  display: flex;
  margin-top: 10px;
  border-bottom: 1px solid var(--outline);

  @media (max-width: 433px) {
    overflow-x: auto;

    scrollbar-width: none;
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    > ${Tab} {
      width: max-content;
    }
  }

  @media (min-width: 434px) {
    justify-content: space-around;

    > ${Tab} {
      width: 100%;
    }
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;
