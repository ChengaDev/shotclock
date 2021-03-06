import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<Container>
			Created by{' '}
			<a href='https://linkedin.com/in/chengazit' target='_blank'>
				Chen Gazit
			</a>{' '}
			(ChengaDev) - 2021
		</Container>
	);
};

const Container = styled.div`
	color: ${(props) => props.theme.mainTextColor};
	margin-top: 20px;
	text-align: center;

	a {
		color: ${(props) => props.theme.mainTextColor};
	}
`;

export default Footer;
