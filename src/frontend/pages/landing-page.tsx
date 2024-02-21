/**
 * Landing page for Albatrac website
 */
import aboutImage from "../../assets/images/image.jpeg";
import displayImg1 from "../../assets/images/Hole_Overview.png";
import displayImg2 from "../../assets/images/Selection_of_Course.png";
import displayImg3 from "../../assets/images/Preview_of_Course.png";
import About from "../components/about";
import PageIntro from "../components/page-intro";

const LandingPage = () => {
	return (
		<>
			<PageIntro />

			<About />

			<section className="players">
				<div className="players__container spacing">
					<div className="players__benefits-container">
						<h2>Benefits for players</h2>
						<ul className="players__benefits">
							<li>▸ Reason Nr. 1</li>
							<li>▸ Reason Nr. 2</li>
							<li>▸ Reason Nr. 3</li>
						</ul>
					</div>
					<div className="players__display">
						<img
							src={displayImg1}
							alt=""
							className="players__backgr-img"
						/>
						<img
							src={displayImg2}
							alt=""
							className="players__front-img"
						/>
						<img
							src={displayImg3}
							alt=""
							className="players__backgr-img"
						/>
					</div>
				</div>
			</section>
			<section className="coaches">
				<div className="coaches__container spacing">
					<div className="coaches__benefits-container">
						<div>
							<img
								src={aboutImage}
								alt=""
								className="coach__image"
							/>
						</div>
					</div>
					<div>
						<h2>Benefits for coaches</h2>
						<ul className="coaches__benefits">
							<li>▸ Overview of all players</li>
							<li>▸ Comprehensive statistics</li>
							<li>▸ Historic trend analysis</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};

export default LandingPage;
