import React, { FC } from 'react';

import { Container, Wrapper } from './styles';
import Main from '../Main';

const Layout: FC = () => {
	return (
		<Container>
			<Wrapper>
				{/* <MenuBar /> */}
				<Main />
				{/* <SideBar /> */}
			</Wrapper>
		</Container>
	);
};

export default Layout;
