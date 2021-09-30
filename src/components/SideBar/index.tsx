import React, { FC } from 'react';

import {
  Container,
  SearchBar,
  SearchBarContent,
  SearchLabel,
  SearchIcon,
  SearchInput,
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
  function handleSearchFocus() {
    const searchBarClass = document.querySelector('#searchBar')?.classList;

    searchBarClass?.contains('active')
      ? searchBarClass?.remove('active')
      : searchBarClass?.add('active');
  }

  return (
    <Container>
      <SearchBar>
        <SearchBarContent id="searchBar">
          <SearchLabel htmlFor="searchInput">
            <SearchIcon />
          </SearchLabel>

          <SearchInput
            type="text"
            placeholder="Buscar no Twitter"
            id="searchInput"
            onFocus={handleSearchFocus}
            onBlur={handleSearchFocus}
          />
        </SearchBarContent>
      </SearchBar>

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
              <strong>Bootcamp de desenvolvimentsdfglksldkfg;ksdlfo web</strong>
            </NewsData>
          </NewsContent>
        </NewsPanel>
      </Panels>
    </Container>
  );
};

export default SideBar;
