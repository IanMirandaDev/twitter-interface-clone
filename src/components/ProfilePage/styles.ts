import styled, { css } from 'styled-components';

import { LocationOn, Cake } from '../../styles/Icons';
import Button from '../Button';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-height: 100%;
	overflow-x: auto;
	overflow-y: auto;
	
	scrollbar-width: none;
	::-webkit-scrollbar {
		display: none;
	}
`;

export const Banner = styled.div`
	flex-shrink: 0;
	width: 100%;
	height: min(33vh, 199px);
	background: var(--twitter);
	position: relative;
`;

export const Avatar = styled.div`
	height: max(45px, min(135px, 22vw));
	width: max(45px, min(135px, 22vw));
	border: 3.35px solid var(--primary);
	background: var(--gray);
	border-radius: 50%;
	position: absolute;
	bottom: max(-60px, -10vw);
	left: 10px;
`;

export const ProfileData = styled.div`
	padding: min(calc(10vw + 7px), 67px) 16px 0;
	display: flex;
	flex-direction: column;
	position: relative;

	> h1 {
		font-size: 19px;
		font-weight: bold;
	}

	> h2 {
		font-size: 15px;
		font-weight: normal;
		color: var(--gray);
	}

	> p {
		font-size: 15px;
		margin-top: 11px;

		> a {
			text-decoration: none;
			color: var(--twitter);
		}
	}

	> ul {
		list-style: none;
		margin: 10px 0;

		> li {
			font-size: 15px;
			color: var(--gray);

			> svg {
				fill: var(--gray);
				margin-right: 5px;
			}
		}
	}
`;

export const EditButton = styled(Button)`
	position: absolute;
	top: 2vw;
	right: 7px;
	padding: 4px 16px;
	font-size: 13px;

	@media (min-width: 320px) {
		top: 10px;
		padding: 10px 19px;
		font-size: 15px;
	}
`;

const IconCSS = css`
	height: 20px;
	width: 20px;
	fill: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
	${IconCSS}
`;

export const CakeIcon = styled(Cake)`
	${IconCSS}
`;

export const Followage = styled.div`
	display: flex;
	
	> span {
		color: var(--gray);
		font-size: 15px;
		
		& + span {
			margin-left: 20px;
		}
	}
`;
