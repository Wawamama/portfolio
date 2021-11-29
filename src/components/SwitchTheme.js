import { useState, useEffect } from 'react'
import './switchTheme.css'
import { useLanguage } from '../contexts/language'

const SwitchTheme = ({ toggleTheme, theme }) => {
	const lang = useLanguage()
	const [text, setText] = useState('ohoh')

	const displayText = () => {
		console.log('hereee')
		if (lang === 'EN') {
			if (theme === 'light') {
				setText('night mode')
			} else {
				setText('day mode')
			}
		}
		if (lang === 'FR') {
			if (theme === 'light') {
				setText('mode nuit')
			} else {
				setText('mode jour')
			}
		}
	}

	useEffect(() => {
		displayText()
	})

	return (
		<div className="switchThemeBtn">
			<label className="switch">
				<input type="checkbox" id="billing_recurrence" />
				<span className="switch_slider" onClick={toggleTheme}></span>
			</label>
			<span>{text}</span>
		</div>
	)
}

export default SwitchTheme
