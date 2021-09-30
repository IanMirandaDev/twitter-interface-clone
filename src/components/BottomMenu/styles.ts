import styled, { css } from 'styled-components';

import { Home, Search, Notifications, Email } from '../../styles/Icons';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);
  display: flex;
  justify-content: space-around;
  padding: 8px;

  @media (min-width: 501px) {
    display: none;
  }
`;

const IconCSS = css`
  height: 31px;
  width: 31px;
  cursor: pointer;
  fill: var(--gray);

  &:hover,
  &.active {
    fill: var(--twitter);
  }
`;

export const HomeIcon = styled(Home)`
  ${IconCSS}
`;

export const SearchIcon = styled(Search)`
  ${IconCSS}
`;

export const BellIcon = styled(Notifications)`
  ${IconCSS}
`;

export const EmailIcon = styled(Email)`
  ${IconCSS}
`;
