import React, { FC } from 'react';

import {
  Container,
  AppNav,
  AppIcon,
  NavMenu,
  NavItem,
  HomeIcon,
  BellIcon,
  EmailIcon,
  HeartIcon,
  ProfileIcon,
  TweetButton,
  ProfileMenu,
  Avatar,
  ProfileData,
  LogoutIcon,
} from './styles';

const MenuBar: FC = () => {
  return (
    <Container>
      <AppNav>
        <AppIcon />
      </AppNav>

      <NavMenu>
        <NavItem>
          <HomeIcon />
          <strong>Home</strong>
        </NavItem>

        <NavItem>
          <BellIcon />
          <strong>Notifications</strong>
        </NavItem>

        <NavItem>
          <EmailIcon />
          <strong>Messages</strong>
        </NavItem>

        <NavItem>
          <HeartIcon />
          <strong>Favorites</strong>
        </NavItem>

        <NavItem className="active">
          <ProfileIcon />
          <strong>Profile</strong>
        </NavItem>
      </NavMenu>

      <TweetButton>
        <strong>Tweet</strong>
      </TweetButton>

      <ProfileMenu>
        <Avatar />

        <ProfileData>
          <strong>Ian Miranda</strong>
          <span>@miranda43</span>
        </ProfileData>

        <LogoutIcon />
      </ProfileMenu>
    </Container>
  );
};

export default MenuBar;
