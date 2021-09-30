import styled, { css } from 'styled-components';

import { Chat, Rocketseat, Favorite } from '../../styles/Icons';

export const Container = styled.div`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--outline);
`;

export const Retweeted = styled.div`
  display: flex;
  margin-left: 35px;
  margin-bottom: 5px;

  > p {
    color: var(--gray);
    font-size: 13px;
    margin-left: 10px;
    font-weight: 300;
  }
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;
`;

export const Avatar = styled.div`
  height: min(49px, max(20px, 10vw));
  width: min(49px, max(20px, 10vw));
  border-radius: 50%;
  background-color: var(--gray);
  flex-shrink: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 10px;
`;

export const Header = styled.div`
  display: flex;
  font-size: 15px;

  > strong {
    margin-right: 5px;
    white-space: nowrap;
  }

  > span,
  time {
    color: var(--gray);
    font-weight: 300;
    white-space: nowrap;
  }

  > strong,
  span {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Dot = styled.div`
  height: 3px;
  width: 3px;
  border-radius: 50%;
  background: var(--gray);
  margin: auto 10px;
`;

export const Description = styled.div`
  font-size: 15px;
  margin-top: 8px;
`;

export const Image = styled.div`
  width: 100%;
  height: min(285px, 48vw);
  background: var(--gray);
  margin-top: 15px;
  border-radius: 15px;
`;

export const Actions = styled.div`
  display: flex;
  width: 100%;
  padding: 12px min(30px, 5vw) 0;
  justify-content: space-around;
`;

const CssIcon = css`
  height: 24px;
  width: 24px;
`;

export const RocketseatIcon = styled(Rocketseat)`
  height: 16px;
  width: 16px;

  > path {
    fill: var(--gray);
  }
`;

export const MessageIcon = styled(Chat)`
  ${CssIcon}

  > path {
    color: var(--gray);
  }
`;

export const HeartIcon = styled(Favorite)`
  ${CssIcon}

  > path {
    color: var(--like);
  }
`;

export const Comments = styled.div`
  display: flex;
  align-items: center;

  > p {
    margin-left: 7px;
    font-size: 14px;
    color: var(--gray);
  }
`;

export const Reactions = styled.div`
  display: flex;
  align-items: center;

  > p {
    margin-left: 7px;
    font-size: 14px;
    color: var(--retweet);
  }

  > ${RocketseatIcon} {
    ${CssIcon}

    > path {
      fill: var(--retweet);
    }
  }
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;

  > p {
    margin-left: 7px;
    font-size: 14px;
    color: var(--like);
  }
`;
