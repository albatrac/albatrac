/**
 * Landing page for Albatrac website
 */
import introImage from "../../assets/images/allan-nygren--xvKQuNtOhI-unsplash.jpg";
import aboutImage from "../../assets/images/image.jpeg";
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
							Albatrac's mission is to revolutionise the world of
							golf coaching by providing an innovative,
							user-friendly platform and app that automates the
							manual performance tracking of golf players.
						</h3>
						<button className="button button--dark">
							Click here
						</button>
					</div>
				</div>
			</section>
			<section className="about">
				<div className="about__container spacing">
					{/* <div>
						<img src={aboutImage} alt="" className="about__image" />
					</div> */}
					<div className="about__information">
						<div className="line"></div>
						<h2>About us</h2>
						<p>
							We are a golf technology company that provides a
							simple and effective solution for avid golfers to
							track their performance and improve their game. With
							Albatrac, you can easily track your shots and gain
							instant statistics to analyze and enhance your golf
							experience.
						</p>
						{/* <button className="button button--dark">
							Click here
						</button> */}
						<div className="line"></div>
					</div>
				</div>
			</section>
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
							<li>▸ Reason Nr. 1</li>
							<li>▸ Reason Nr. 2</li>
							<li>▸ Reason Nr. 3</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};

export default LandingPage;
