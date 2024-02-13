/**
 * Landing page for Albatrac website
 */
import introImage from "../../assets/images/allan-nygren--xvKQuNtOhI-unsplash.jpg";
import aboutImage from "../../assets/images/steven-shircliff-N21z4eG8aKg-unsplash.jpg";
import displayImg1 from "../../assets/images/Hole_Overview.png";
import displayImg2 from "../../assets/images/Selection_of_Course.png";
import displayImg3 from "../../assets/images/Preview_of_Course.png";

const LandingPage = () => {
	return (
		<>
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
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
						</h3>
						<button className="button button--dark">
							Click here
						</button>
					</div>
				</div>
			</section>
			<section className="about">
				<div className="about__container spacing">
					<div>
						<img src={aboutImage} alt="" className="about__image" />
					</div>
					<div className="about__information">
						<div className="line"></div>
						<h2>About</h2>
						<p>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap
						</p>
						<button className="button button--dark">
							Click here
						</button>
						<div className="line"></div>
					</div>
				</div>
			</section>
			<section className="players">
				<div className="players__container spacing">
					<div className="players__benefits-container">
						<h2>Benefits for players</h2>
						<ul className="players__benefits">
							<li>● Reason Nr. 1</li>
							<li>● Reason Nr. 2</li>
							<li>● Reason Nr. 3</li>
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
						<h2>Benefits for coaches</h2>
						<ul className="coaches__benefits">
							<li>● Reason Nr. 1</li>
							<li>● Reason Nr. 2</li>
							<li>● Reason Nr. 3</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};

export default LandingPage;
