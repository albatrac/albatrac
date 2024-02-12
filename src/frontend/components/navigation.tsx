/**
 * Landing page for Albatrac website
 */
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
	return (
		<>
			<Navbar className="navigation">
				<Container className="navigation__container spacing">
					<Navbar.Brand as={Link} to="#"></Navbar.Brand>
					<Nav>
						<Nav.Link as={NavLink} to="#">
							About us
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default Navigation;
