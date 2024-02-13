/**
 * Footer for Albatrac website
 */

import Logo from "../../assets/images/Element 8.png";

const Footer = () => {
	return (
		<>
			<section className="footer">
				<div className="footer__container spacing">
					<div className="footer__info">
						<h2>Contact us</h2>

						<h3>Email</h3>
						<p>info@albatrac.com</p>

						<h3>Phone</h3>
						<p>+1 123-456-7890</p>
					</div>
					<div>
						<form className="footer__form">
							<label className="p">Name*</label>
							<input
								className="footer__field p"
								type="text"
								required
								placeholder="Your name"
							/>
							<label className="p">Email*</label>
							<input
								className="footer__field p"
								type="email"
								required
								placeholder="Your email address"
							/>
							<label className="p">Message*</label>
							<textarea
								className="footer__field p"
								required
								placeholder="Enter your message"
							></textarea>
							<button
								className="button button--dark"
								type="submit"
							>
								Submit
							</button>
						</form>
					</div>
					<div className="footer__logo">
						<img src={Logo} alt="" />
					</div>
				</div>
			</section>
		</>
	);
};

export default Footer;
