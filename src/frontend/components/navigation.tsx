/**
 * Landing page for Albatrac website
 */
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/images/Element 8.png";

const Navigation = () => {
	return (
		<>
			<Navbar className="navigation">
				<Container className="navigation__container spacing">
					<Navbar.Brand as={Link} to="#">
						<img src={Logo} alt="" className="navigation__logo" />
					</Navbar.Brand>
					<Nav className="navigation__link-container">
						<Nav.Link
							as={NavLink}
							to="#"
							className="navigation__link-texts"
						>
							<h2>about us</h2>
						</Nav.Link>
						<Nav.Link
							as={NavLink}
							to="#"
							className="navigation__link-texts"
						>
							<h2>contact</h2>
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default Navigation;
