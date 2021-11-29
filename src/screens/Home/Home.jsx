import react, { useContext } from 'react'
import { useLanguage, useLanguageUpdate } from '../../contexts/language'
import './home.css'
import { LanguageContext } from '../../contexts/language'

const contentEN = {
	hello: "Hi I'm",
	text: 'I’m a fullstack web developer specialized in React and NodeJS. I also like to tell jokes on stage, play poker and hike in the mountains. I’m a very curious person and I am always looking for new opportunities.',
	h2: 'I use code to turn awesome projects into web applications',
}

const contentFR = {
	hello: 'Bonjour, je suis',
	text: "Je suis une developpeuse fullstack spécialisée en React et NodeJS. J'aime aussi raconter des blagues sur scène, jouer aux cartes et marcher dans la montagne. Je suis curieuse de nature et toujours à la recherche de nouveaux challenges.",
	h2: 'Je tape des lignes de code pour transformer des supers projets en applications web',
}

const Home = () => {
	const language = useLanguage()
	const toggleLanguage = useLanguageUpdate()

	const content = language === 'EN' ? contentEN : contentFR
	return (
		<div className="wrapper">
			<h3>{content.hello}</h3>
			<h1 className="marion">Marion Saul</h1>
			<h2>{content.h2}</h2>
			<p>{content.text}</p>
		</div>
	)
}

export default Home
