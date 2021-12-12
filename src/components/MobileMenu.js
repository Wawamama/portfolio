import { NavLink } from 'react-router-dom'
import { useLanguage } from '../contexts/language'
import './topbar.css'
import pdf from './../assets/MarionSaul-FullstackDevelopper.pdf'

const MobileMenu = ({ theme }) => {
	const lang = useLanguage()
	return (
		<nav className="mobile">
			<ul className="mobile">
				<li>
					<NavLink to="/about">{lang === 'EN' ? 'about' : 'a propos'}</NavLink>
				</li>
				<li>
					<NavLink to="/work">{lang === 'EN' ? 'work' : 'projets'}</NavLink>
				</li>
				<li>
					<NavLink to="/contact">
						{lang === 'EN' ? 'contact' : 'contact'}
					</NavLink>
				</li>
				<li
					style={{
						border: 'solid 2px',
						borderRadius: '5px',
						borderColor: theme === 'dark' ? '#69DADB' : '#04009A',
						backgroundColor: theme === 'dark' ? '' : '#EBFFFF',
					}}
				>
					<a href={pdf} target="_blank" rel="noreferrer">
						{lang === 'EN' ? 'resume' : 'cv'}
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default MobileMenu
