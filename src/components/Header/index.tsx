import React, { FC } from 'react';

import { Container, BackIcon, ProfileInfo } from './styles';

interface iHeader {
	name: string;
	tweets: number;
}

const Header: FC<iHeader> = ({name, tweets}) => {
	return (
		<Container>
			<button>
				<BackIcon />
			</button>

			<ProfileInfo>
				<strong>{name}</strong>
				<span>{tweets} Tweets</span>
			</ProfileInfo>
		</Container>
	);
};

export default Header;
