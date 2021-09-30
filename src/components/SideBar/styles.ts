import styled, { css } from 'styled-components';

import SideBarPanel from '../SideBarPanel';

import { Search } from '../../styles/Icons';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 398px;

  @media (max-width: 999px) {
    display: none;
  }
`;

export const SearchBar = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 398px;
  padding: 10px 24px;
  background: var(--primary);
`;

export const SearchLabel = styled.label`
  margin-right: 15px;
`;

export const SearchIcon = styled(Search)`
  height: 24px;
  width: 24px;
  fill: var(--gray);
`;

export const SearchBarContent = styled.div`
  display: flex;
  height: 40px;
  padding: 8px 21px;

  border-radius: 20px;
  background: var(--secondary);
  border: 1px solid transparent;

  &:hover {
    background: var(--search);
  }

  &.active {
    background: transparent;
    border: 1px solid var(--twitter);

    > ${SearchLabel} {
      > ${SearchIcon} {
        fill: var(--twitter);
      }
    }
  }
`;

export const SearchInput = styled.input`
  outline: none;
  width: 100%;
  font-size: 15px;
`;

export const Panels = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 63px;
  padding: 0 24px;
`;

export const SuggestionsPanel = styled(SideBarPanel)``;

const CssPanelContent = css`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 16px;
  border-top: 1px solid var(--outline);

  &:hover {
    background: var(--search);
    cursor: pointer;
  }
`;

export const SuggestionContent = styled.div`
  ${CssPanelContent}
`;

export const Avatar = styled.div`
  height: 49px;
  width: 49px;
  border-radius: 50%;
  background: var(--gray);
  flex-shrink: 0;
  margin-right: 10px;
`;

export const SuggestionData = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  > strong,
  span {
    font-size: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  > span {
    font-weight: 300;
    color: var(--gray);
  }
`;

export const FollowButton = styled(Button)`
  margin-left: auto;
  padding: 6px 17px;

  > strong {
    font-size: 15px;
    color: var(--twitter);
  }
`;

export const NewsPanel = styled(SideBarPanel)``;

export const NewsContent = styled.div`
  ${CssPanelContent}
  padding: 17px 16px;
`;

export const NewsData = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  > span {
    font-weight: 300;
    color: var(--gray);
  }

  > span,
  strong {
    font-size: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
