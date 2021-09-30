import React, { FC } from 'react';

import { Container, Header, Content } from './styles';

interface iSideBarPanel {
  header: string;
}

const SideBarPanel: FC<iSideBarPanel> = ({ header, children }) => {
  return (
    <Container>
      <Header>
        <h1>{header}</h1>
      </Header>

      <Content>{children}</Content>
    </Container>
  );
};

export default SideBarPanel;
