import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../contexts/language'
import './home.css'

const contentEN = {
	hello: "Hi I'm",
	text: `I’m a fullstack web developer specialized in React and NodeJS. \n
	I also like to tell jokes on stage, play poker and hike in the mountains.\n
	I’m a very curious person and I am always looking for new opportunities.`,
	h2: 'I use code to turn awesome projects into web applications',
	button: "Let's talk",
}

const contentFR = {
	hello: 'Bonjour, je suis',
	text: `Je suis une developpeuse fullstack spécialisée en React et NodeJS. \n
	J'aime aussi raconter des blagues sur scène, jouer aux cartes et marcher dans la montagne. 
	Je suis curieuse de nature et toujours à la recherche de nouveaux challenges.`,
	h2: 'Je tape des lignes de code pour transformer des supers projets en applications web',
	button: 'Contactez moi',
}

const Home = () => {
	const language = useLanguage()
	const content = language === 'EN' ? contentEN : contentFR
	const txtLines = content.text.split('.')

	return (
		<div className="container">
			<div className="wrapper home">
				<h2 className="hello">{content.hello}</h2>
				<h1 className="marion">Marion Saul</h1>
				<h2 style={{ marginBottom: '3rem' }}>{content.h2}</h2>
				{txtLines.map(line => (
					<p>{line}</p>
				))}
				<NavLink to="/contact" className="btnLink">
					<button className="btn_contact">{content.button}</button>
				</NavLink>
			</div>
		</div>
	)
}

export default Home
