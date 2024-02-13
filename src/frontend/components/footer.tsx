/**
 * Footer for Albatrac website
 */

import Logo from "../../assets/images/Element 8.png";

const Footer = () => {
	return (
		<>
			<section className="footer">
				<div className="footer__container spacing">
					<div>
						<ul>
							<label className="h2">Menu</label>
							<li className="h3">Alt 1</li>
							<li className="h3">Alt 2</li>
							<li className="h3">Alt 3</li>
							<li className="h3">Alt 4</li>
						</ul>
					</div>
					<div>
						<label className="h2">Menu</label>
						<ul>
							<li className="h3">Alt 1</li>
							<li className="h3">Alt 2</li>
							<li className="h3">Alt 3</li>
							<li className="h3">Alt 4</li>
						</ul>
					</div>
					<div>
						<img src={Logo} alt="" />
					</div>
				</div>
			</section>
		</>
	);
};

export default Footer;
