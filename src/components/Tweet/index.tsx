import React, { FC } from 'react';

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  Dot,
  Image,
  Actions,
  Comments,
  Reactions,
  Likes,
  RocketseatIcon,
  MessageIcon,
  HeartIcon,
} from './styles';

const Tweet: FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        <p>Você retuitou</p>
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Ian Miranda</strong>
            <span>@miranda43</span>
            <Dot />
            <time>28 de set</time>
          </Header>

          <Description>Tweet massa dms</Description>

          <Image />

          <Actions>
            <Comments>
              <MessageIcon />
              <p>18</p>
            </Comments>

            <Reactions>
              <RocketseatIcon />
              <p>12</p>
            </Reactions>

            <Likes>
              <HeartIcon />
              <p>324</p>
            </Likes>
          </Actions>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
