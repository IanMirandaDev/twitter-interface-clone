import React, { FC } from 'react';

import Tweet from '../Tweet';

import { Container, TabContainer, Tab, Tweets } from './styles';

const Feed: FC = () => {
  return (
    <Container>
      <TabContainer>
        <Tab className="active">Tweets</Tab>
        <Tab>Likes</Tab>
        <Tab>Media</Tab>
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
