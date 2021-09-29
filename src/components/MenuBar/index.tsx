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
          <strong>Página inicial</strong>
        </NavItem>

        <NavItem>
          <BellIcon />
          <strong>Notificações</strong>
        </NavItem>

        <NavItem>
          <EmailIcon />
          <strong>Mensagens</strong>
        </NavItem>

        <NavItem>
          <HeartIcon />
          <strong>Favoritos</strong>
        </NavItem>

        <NavItem className="active">
          <ProfileIcon />
          <strong>Perfil</strong>
        </NavItem>
      </NavMenu>

      <TweetButton>
        <strong>Tweetar</strong>
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
