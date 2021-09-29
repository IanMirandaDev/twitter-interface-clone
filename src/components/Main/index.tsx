import React, { FC } from 'react';

import { Container } from './styles';
import Header from '../Header';
import BottomMenu from '../BottomMenu';
import ProfilePage from '../ProfilePage';
import Feed from '../Feed';

const Main: FC = () => {
  return (
    <Container>
      <Header />

      <ProfilePage />

      <Feed />

      <BottomMenu />
    </Container>
  );
};

export default Main;
