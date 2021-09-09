import React, { FC } from 'react';

import { Container, Banner, Avatar, ProfileData, EditButton, LocationIcon, CakeIcon, Followage } from './styles';

const ProfilePage: FC = () => {
	return (
		<Container>
			<Banner>
				<Avatar />
			</Banner>

			<ProfileData>
				<EditButton outlined>Editar perfil</EditButton>

				<h1>Ian Miranda</h1>
				<h2>@miranda43</h2>

				<p>Node developer</p>

				<ul>
					<li>
						<LocationIcon />
						São Paulo, Brasil
					</li>
					<li>
						<CakeIcon />
						Nascido(a) em Novembro de 2000
					</li>
				</ul>

				<Followage>
					<span>
						seguindo <strong>132</strong>
					</span>
					<span>
						<strong>432</strong> seguidores
					</span>
				</Followage>
			</ProfileData>
		</Container>
	);
};

export default ProfilePage;
