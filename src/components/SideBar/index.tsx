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
        <SearchInput type="text" placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Panels>
        <SuggestionsPanel header="Talvez você curta">
          <SuggestionContent>
            <Avatar />

            <SuggestionData>
              <strong>Gustavo Luiz</strong>
              <span>@luizgusta</span>
            </SuggestionData>

            <FollowButton outlined>
              <strong>Seguir</strong>
            </FollowButton>
          </SuggestionContent>

          <SuggestionContent>
            <Avatar />

            <SuggestionData>
              <strong>Gustavo Luiz</strong>
              <span>@luizgusta</span>
            </SuggestionData>

            <FollowButton outlined>
              <strong>Seguir</strong>
            </FollowButton>
          </SuggestionContent>

          <SuggestionContent>
            <Avatar />

            <SuggestionData>
              <strong>Gustavo Luiz</strong>
              <span>@luizgusta</span>
            </SuggestionData>

            <FollowButton outlined>
              <strong>Seguir</strong>
            </FollowButton>
          </SuggestionContent>
        </SuggestionsPanel>

        <NewsPanel header="O que está acontecendo">
          <NewsContent>
            <NewsData>
              <span>Assuntos do momento</span>
              <strong>Bootcamp de desenvolvimento web</strong>
            </NewsData>
          </NewsContent>

          <NewsContent>
            <NewsData>
              <span>Assuntos do momento</span>
              <strong>Bootcamp de desenvolvimento web</strong>
            </NewsData>
          </NewsContent>

          <NewsContent>
            <NewsData>
              <span>Assuntos do momento</span>
              <strong>Bootcamp de desenvolvimento web</strong>
            </NewsData>
          </NewsContent>
        </NewsPanel>
      </Panels>
    </Container>
  );
};

export default SideBar;
