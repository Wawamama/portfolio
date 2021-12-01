import { useLanguage } from '../../contexts/language'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import './about.css'

const contentEN = {
	hello: "Who's this girl?",
	title: 'About me',
	text: `I am a self-taught developer whose been passionate about the web since I was a teenager. I first learned front-end development then joined a coding bootcamp to become a fullstack developer.
	I take pride in constructing scalable and beautiful applications with a main focus on user experience.
	I care about my code the way I care about men: it needs to be smart, clean and reusable.<br>
	
	I thrive on challenges and my goal in life and work is to be better today than I was yesterday. <br>
	
	I currently live in Paris, France but you can meet me pretty much anywhere on the globe. Let’s chat!`,
	h2: 'Some technologies I like working with',
}

const contentFR = {
	hello: 'Qui suis-je ?',
	title: 'A propos',
	text: `Je suis une développeuse autodidacte passionnée par le web depuis l'adolescence. J'ai d'abord appris le développement front-end puis
	j'ai rejoint un coding bootcamp pour devenir développeuse fullstack.
	Je place l'expérience utilisateur au centre des applications que je construis et porte mon attention sur la qualité du code que je produis.
	Mon code doit être comme un homme : intelligent, propre et réutilisable.<br>
	Je m'épanouis dans le challenge et mon objectif de vie et de carrière est d'être meilleure aujourd'hui que la veille.<br>
	Je vis actuellement à Paris mais vous pouvez me croiser à peu près partout dans le monde. Entrons en contact !`,
	h2: "Quelques technologies que j'aime utiliser",
}

const About = () => {
	const language = useLanguage()
	const content = language === 'EN' ? contentEN : contentFR
	const txtLines = content.text.split('<br>')

	const photo_url =
		'https://res.cloudinary.com/daxjdptqt/image/upload/v1638292014/samples/portfolio/profilePic-smaller_pfgojh.png'

	return (
		<div className="wrapper about">
			<div className="about_top">
				<div className="about_left">
					<p style={{ fontWeight: 'bold' }}>{content.hello}</p>
					<h1>{content.title}</h1>
					{txtLines.map(line => (
						<p className="content-text">{line}</p>
					))}
				</div>
				<div className="about_right">
					<img src={photo_url} alt="smiling woman" />
					<div
						className="photo_bg"
						style={{ backgroundColor: '#1597E5' }}
					></div>
				</div>
			</div>
			<div className="about_bottom">
				<div className="about_bottom_left">
					<h2 style={{ fontWeight: '400' }}>{content.h2}</h2>
					<div className="chevrons">
						<FontAwesomeIcon icon={faChevronRight} className="chevron1" />
						<FontAwesomeIcon icon={faChevronRight} className="chevron2" />
					</div>
				</div>
				<div className="technologies">
					<div className="technologies_left">
						<ul>
							<li className="content-text" style={{ fontWeight: 'bold' }}>
								React
							</li>
							<li className="content-text" style={{ fontWeight: 'bold' }}>
								Redux
							</li>
							<li className="content-text" style={{ fontWeight: 'bold' }}>
								React Native
							</li>
						</ul>
					</div>
					<div className="technologies_right">
						<ul>
							<li className="content-text" style={{ fontWeight: 'bold' }}>
								NodeJS
							</li>
							<li className="content-text" style={{ fontWeight: 'bold' }}>
								Express
							</li>
							<li className="content-text" style={{ fontWeight: 'bold' }}>
								MongoDB
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
