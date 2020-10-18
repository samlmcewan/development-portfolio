import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import Typing from 'react-typing-animation';

const Header = () => {
	const { hero } = useContext(PortfolioContext);
	const { title, name, subtitle, cta, degree, location } = hero;

	const [ isDesktop, setIsDesktop ] = useState(false);
	const [ isMobile, setIsMobile ] = useState(false);

	const AnimatedTypingComponent = () => (
		<Typing loop={true}>
			<h1 className="hero-title">
				<Typing.Delay ms={1000} />
				<Typing.Speed ms={50} />
				Hello!
				<br />
				<br />
				<Typing.Delay ms={1000} />
				<Typing.Speed ms={75} />
				I'm <span className="text-color-main">Sam McEwan</span>(BDES)
				<br />
				<Typing.Delay ms={200} />
				<Typing.Speed ms={50} />
				Web Developer + Graphic Designer
				<Typing.Reset count={0} delay={5000} />
			</h1>
		</Typing>
	);

	useEffect(() => {
		if (window.innerWidth > 769) {
			setIsDesktop(true);
			setIsMobile(false);
		} else {
			setIsMobile(true);
			setIsDesktop(false);
		}
	}, []);

	return (
		<section id="hero" className="jumbotron">
			<Container>
				<Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
					<AnimatedTypingComponent />
				</Fade>
				<Fade left={isDesktop} bottom={isMobile} duration={1000} delay={8000} distance="30px">
					<p className="hero-cta">
						<span className="cta-btn cta-btn--hero">
							<Link to="about" smooth duration={1000}>
								{cta}
							</Link>
						</span>
					</p>
				</Fade>
			</Container>
		</section>
	);
};

export default Header;
