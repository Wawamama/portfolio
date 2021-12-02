import parse from 'html-react-parser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useLanguage } from '../../contexts/language'
import './contact.css'

const contentEN = {
	title: "Let's talk",
	subtitle: 'You have a project?',
	main: `I am always seeking out new opportunities to collaborate with cool people and make exciting projects come to life.
	<br>
	I am currently looking for a fulltime position in an exciting team! 
	In the meantime, I am available for freelance work.`,
	form: "Tell me about your project, ask me a question or just say 'hi'!",
}

const contentFR = {
	title: 'Coucou !',
	subtitle: 'Vous avez un projet ?',
	main: `Je cherche toujours de nouvelles opportunités de collaborer avec de chouettes personnes pour donner vie à des beaux projets.
	<br>
	Je suis actuellement à la recherche d'un poste de développeur à plein temps ! 
	Conjointement, je suis disponible pour des missions freelance.`,
	form: "Parlez moi de votre projet, posez moi des questions ou dites juste 'coucou' !",
}

const Contact = () => {
	const language = useLanguage()
	const content = language === 'EN' ? contentEN : contentFR

	const nameLabel = language === 'EN' ? 'Your name' : 'Votre nom'
	const emailLabel = language === 'EN' ? 'Your email' : 'Votre email'

	const nameSpans = parse(
		nameLabel
			.split('')
			.map(
				(letter, index) =>
					`<span style="transition-delay:${index * 30}ms">${letter}</span>`
			)
			.join('')
	)

	const emailSpans = parse(
		emailLabel
			.split('')
			.map(
				(letter, index) =>
					`<span style="transition-delay:${index * 30}ms">${letter}</span>`
			)
			.join('')
	)

	return (
		<div className="wrapper contact">
			<div className="contact_left">
				<h1>{content.title}</h1>
				<div className="contact_txt">
					<p style={{ fontWeight: 700 }}>{content.subtitle}</p>
					{content.main.split('<br>').map(p => (
						<p className="content-text">{p}</p>
					))}
					<div className="socials">
						<a href="https://github.com/Wawamama">
							<FontAwesomeIcon icon={faGithub} className="social_icon" />
							<span>
								{language === 'EN' ? 'Find me on' : 'Je suis aussi sur'} GitHub
							</span>
						</a>
						<a href="https://www.linkedin.com/in/marionsaul/">
							<FontAwesomeIcon icon={faLinkedin} className="social_icon" />
							<span style={{ marginLeft: '4px' }}>
								{language === 'EN' ? 'And' : 'Et'} LinkedIn
							</span>
						</a>
					</div>
				</div>
			</div>
			<div className="contact_right">
				<p
					style={{ fontSize: '1.3rem', fontWeight: 600, lineHeight: '1.5rem' }}
				>
					{content.form}
				</p>
				<form>
					<div class="form-field">
						<input type="text" name="username" required />
						<label>{nameSpans}</label>
					</div>
					<div class="form-field">
						<input type="text" name="email" required />
						<label>{emailSpans}</label>
					</div>
					<div class="form-field form-text">
						<textarea rows="7" name="message" />
						<label>
							{language === 'EN' ? 'Your message' : 'Votre message'}
						</label>
					</div>
					<button>
						{language === 'EN' ? 'Send to Marion' : 'Envoyer à Marion'}
					</button>
				</form>
			</div>
		</div>
	)
}

export default Contact
