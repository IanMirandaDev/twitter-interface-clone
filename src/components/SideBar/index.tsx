import React, { FC } from 'react';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Panels,
  SuggestionsPanel,
  SuggestionContent,
  Avatar,
  SuggestionData,
  FollowButton,
  NewsPanel,
  NewsContent,
  NewsData,
} from './styles';

const SideBar: FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput type="text" placeholder="Search on Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Panels>
        <SuggestionsPanel header="You might like">
          <SuggestionContent>
            <Avatar />

            <SuggestionData>
              <strong>Adirane Cristina</strong>
              <span>@adricristina</span>
            </SuggestionData>

            <FollowButton outlined>
              <strong>Follow</strong>
            </FollowButton>
          </SuggestionContent>

          <SuggestionContent>
            <Avatar />

            <SuggestionData>
              <strong>Gustavo Luiz</strong>
              <span>@luizgusta</span>
            </SuggestionData>

            <FollowButton outlined>
              <strong>Follow</strong>
            </FollowButton>
          </SuggestionContent>

          <SuggestionContent>
            <Avatar />

            <SuggestionData>
              <strong>Jorge Oliveira</strong>
              <span>@jorgeoli10</span>
            </SuggestionData>

            <FollowButton outlined>
              <strong>Follow</strong>
            </FollowButton>
          </SuggestionContent>
        </SuggestionsPanel>

        <NewsPanel header="What's happening">
          <NewsContent>
            <NewsData>
              <span>Current news</span>
              <strong>An amazing news title</strong>
            </NewsData>
          </NewsContent>

          <NewsContent>
            <NewsData>
              <span>Current news</span>
              <strong>An amazing news title</strong>
            </NewsData>
          </NewsContent>

          <NewsContent>
            <NewsData>
              <span>Current news</span>
              <strong>An amazing news title</strong>
            </NewsData>
          </NewsContent>
        </NewsPanel>
      </Panels>
    </Container>
  );
};

export default SideBar;
