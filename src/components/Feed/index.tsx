import React, { FC } from 'react';

import Tweet from '../Tweet';

import { Container, TabContainer, Tab, Tweets } from './styles';

const Feed: FC = () => {
  return (
    <Container>
      <TabContainer>
        <Tab className="active">Tweets</Tab>
        <Tab>Curtidas</Tab>
        <Tab>Followers</Tab>
      </TabContainer>

      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
};

export default Feed;
