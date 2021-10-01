import styled, { css } from 'styled-components';

import SideBarPanel from '../SideBarPanel';

import { Search } from '../../styles/Icons';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: min(398px, 100%);

  @media (max-width: 999px) {
    display: none;
  }
`;

export const SearchWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  display: flex;
  width: min(398px, 100%);
  padding: 9px 24px 10px;
  background: var(--primary);
`;

export const SearchInput = styled.input`
  width: 100%;
  border-radius: 25px;
  height: 39px;
  background: var(--search);
  padding: 12px 0 12px 56px;
  font-size: 15px;
  font-weight: 400;
  color: var(--gray);
  outline: none;
  border: 1px solid transparent;

  &:hover {
    background: var(--outline);
  }

  &:focus {
    background: var(--primary);
    border: 1px solid var(--twitter);

    ~ svg {
      fill: var(--twitter);
    }
  }
`;

export const SearchIcon = styled(Search)`
  height: 28px;
  width: 28px;

  fill: var(--gray);

  position: absolute;
  top: 15px;
  left: 40px;
`;

export const Panels = styled.div`
  position: sticky;
  top: 0;
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
