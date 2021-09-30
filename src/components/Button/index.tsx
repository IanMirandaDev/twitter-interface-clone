import styled from 'styled-components';

interface iButton {
  outlined?: boolean;
}

export default styled.button<iButton>`
  padding: 16px;
  border-radius: 25px;
  font-size: 15px;
  font-weight: bold;

  background: ${(props) => (props.outlined ? 'transparent' : 'var(--twitter)')};
  color: ${(props) => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
  border: ${(props) => (props.outlined ? '1px solid var(--twitter)' : 'none')};

  &:hover {
    background: ${(props) =>
      props.outlined ? 'var(--dark-hover)' : 'var(--light-hover)'};
  }
`;
