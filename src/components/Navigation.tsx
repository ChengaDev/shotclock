import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import Themes from '../constants/Themes';
import Routes from '../AppRoutes';
import { Link } from 'react-router-dom';

type NavigartionProps = {
	currentTheme: string;
};

const Navigation = (props: NavigartionProps) => {
	return (
		<Container>
			<Navbar variant={props.currentTheme === Themes.Light ? 'light' : 'dark'} bg='light' expand='lg'>
				<Navbar.Brand href={Routes.Home}>
					<strong>Online 24 shot clock</strong>
				</Navbar.Brand>
				{/* <Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Link to={Routes.Home}>Home</Link>
						<Link to={Routes.App}>Clock</Link>
					</Nav>
				</Navbar.Collapse> */}
			</Navbar>
		</Container>
	);
};

const Container = styled.div`
	nav {
		background-color: transparent !important;
		max-width: 700px;
		margin: 0 auto;
		padding: 0;
		margin-bottom: 20px;

		.navbar-brand {
			font-size: 30px;
			line-height: 30px;
		}

		@media ${'(max-width: 550px)'} {
			margin-bottom: 10px;
			margin-top: 5px;
		}

		a,
		button span {
			color: ${(props) => props.theme.mainTextColor} !important;
		}

		.navbar-nav {
			margin-top: 2px;
		}
	}
`;

export default Navigation;
