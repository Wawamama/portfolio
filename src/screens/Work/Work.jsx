import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import { useLanguage } from '../../contexts/language'

import projectsInfo from '../../assets/data/projects'
import Card from './Card'

import './work.css'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Navigation])

const Work = () => {
	const language = useLanguage()
	return (
		<div className="wrapper work">
			<p style={{ fontWeight: 'bold' }}>
				{language === 'EN'
					? "Here's some of my work"
					: "Ce que j'ai fait récemment"}
			</p>
			<h1>Projects</h1>
			<div className="projects_container">
				<Swiper
					spaceBetween={30}
					slidesPerView={1}
					navigation
					breakpoints={{
						640: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						1200: {
							slidesPerView: 3,
						},
					}}
				>
					{projectsInfo.map(project => (
						<SwiperSlide key={project.id}>
							<Card project={project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default Work
