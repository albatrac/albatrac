/**
 * Landing page for Albatrac website
 */
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/images/Element 8.png";
import { useState } from "react";

const Navigation = () => {
	const [navChange, setNavchange] = useState(false);
	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setNavchange(true);
		} else {
			setNavchange(false);
		}
	};
	window.addEventListener("scroll", changeNavbarColor);
	return (
		<>
			<Navbar
				className={
					navChange ? "navigation" : "navigation navigation--scroll"
				}
			>
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
							<h2 className="h3">about us</h2>
						</Nav.Link>
						<Nav.Link
							as={NavLink}
							to="#"
							className="navigation__link-texts"
						>
							<h2 className="h3">contact</h2>
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default Navigation;
