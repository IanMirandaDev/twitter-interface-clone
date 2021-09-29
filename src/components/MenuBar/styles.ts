import styled, { css } from 'styled-components';

import {
  Rocketseat,
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  ExitToApp,
} from '../../styles/Icons';

import Button from '../Button';

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 100vh;
  padding: 0 8px;

  @media (max-width: 500px) {
    display: none;
  }

  @media (max-width: 1279px) {
    align-items: center;
    width: 78px;
  }

  @media (min-width: 1280px) {
    align-items: left;
    width: 280px;
  }
`;

export const AppNav = styled.div`
  width: max-content;
  max-height: 60px;
  border-radius: 50%;
  margin-top: 5px;
  padding: 10px;

  &:hover {
    background: var(--dark-hover);
    cursor: pointer;
  }

  @media (min-width: 1280px) {
    margin-left: 17px;
  }
`;

export const AppIcon = styled(Rocketseat)`
  height: 40px;
  width: 40px;

  > path {
    fill: var(--twitter);
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  margin: 8px 17px;
  padding: 12px;

  > strong {
    font-size: 17px;
    margin-left: 20px;
  }

  &:hover {
    background: var(--dark-hover);
    cursor: pointer;
  }

  &.active,
  &:hover {
    > svg {
      fill: var(--twitter);
    }

    > strong {
      color: var(--twitter);
    }
  }

  @media (max-width: 1279px) {
    border-radius: 50%;

    > strong {
      display: none;
    }
  }

  @media (min-width: 1280px) {
    border-radius: 25px;
  }
`;

const CssIcon = css`
  height: 30px;
  width: 30px;
`;

export const HomeIcon = styled(Home)`
  ${CssIcon}
`;

export const BellIcon = styled(Notifications)`
  ${CssIcon}
`;

export const EmailIcon = styled(Email)`
  ${CssIcon}
`;

export const HeartIcon = styled(FavoriteBorder)`
  ${CssIcon}
`;

export const ProfileIcon = styled(Person)`
  ${CssIcon}
`;

export const TweetButton = styled(Button)`
  margin: 18px 17px;

  > strong {
    font-size: 15px;
  }

  @media (max-width: 1279px) {
    height: 36px;
    width: 36px;

    > strong {
      display: none;
    }
  }
`;

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  > strong {
    font-size: 14px;
  }

  > span {
    font-size: 14px;
    font-weight: 300;
    color: var(--gray);
  }
`;

export const LogoutIcon = styled(ExitToApp)`
  height: 25px;
  width: 25px;
  margin-left: auto;

  &:hover {
    fill: var(--twitter);
  }
`;

export const ProfileMenu = styled.div`
  display: flex;
  margin: auto 5px 8px;
  padding: 12px;
  border-radius: 35px;
  align-items: center;

  &:hover {
    background: var(--dark-hover);
    cursor: pointer;
  }

  @media (max-width: 1279px) {
    > ${ProfileData} {
      display: none;
    }

    > ${LogoutIcon} {
      display: none;
    }
  }
`;

export const Avatar = styled.div`
  height: 39px;
  width: 39px;

  background: var(--gray);
  border-radius: 50%;
  flex-shrink: 0;
`;
