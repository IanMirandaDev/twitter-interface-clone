import React, { FC } from 'react';

import { Container, BackIcon, ProfileInfo } from './styles';

const Header: FC = () => {
  return (
    <Container>
      <button>
        <BackIcon />
      </button>

      <ProfileInfo>
        <strong>Ian Miranda</strong>
        <span>321 Tweets</span>
      </ProfileInfo>
    </Container>
  );
};

export default Header;
