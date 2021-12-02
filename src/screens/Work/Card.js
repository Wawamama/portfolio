import { useLanguage } from '../../contexts/language'

const Card = props => {
	const language = useLanguage()
	const project = props.project
	const techLines = project.tech.split('<br>')

	console.log('language : ', language)

	return (
		<div className="card">
			<a href={project.link} target="_blank" rel="noreferrer">
				<figure class="project_fig">
					<img src={project.img1} alt="" />
					<figcaption>
						<h2>{project.title}</h2>
					</figcaption>
				</figure>
			</a>

			<h3>{project.title}</h3>
			<p>{language === 'EN' ? project.descEN : project.descFR}</p>
			{techLines.map(line => (
				<p style={{ lineHeight: '3px' }}>{line}</p>
			))}
		</div>
	)
}

export default Card
