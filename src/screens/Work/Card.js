import { useLanguage } from '../../contexts/language'

const Card = props => {
	const language = useLanguage()
	const project = props.project
	const techLines = project.tech.split('<br>')

	console.log('language : ', language)

	return (
		<div className="card">
			<img src={project.img1} alt="" />
			<h3>{project.title}</h3>
			<p>{language === 'EN' ? project.descEN : project.descFR}</p>
			{techLines.map(line => (
				<p style={{ lineHeight: '3px' }}>{line}</p>
			))}
		</div>
	)
}

export default Card
