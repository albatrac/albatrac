/**
 * Page intro component
 */
import introImage from "../../assets/images/allan-nygren--xvKQuNtOhI-unsplash.jpg";

const PageIntro = () => {
	return (
		<section
			className="page-intro"
			style={{
				backgroundImage: `url(${introImage})`,
				backgroundPosition: "center",
			}}
		>
			<div className="page-intro__container spacing">
				<div className="page-intro__introduction">
					<h3>
						Albatrac's mission is to revolutionise the world of golf
						coaching by providing an innovative, user-friendly
						platform and app that automates the manual performance
						tracking of golf players.
					</h3>
					<button className="button button--dark">Click here</button>
				</div>
			</div>
		</section>
	);
};

export default PageIntro;
