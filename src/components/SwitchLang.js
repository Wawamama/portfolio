import react from 'react'
import { useLanguage, useLanguageUpdate } from '../contexts/language'

const SwitchLang = () => {
	const lang = useLanguage()
	const toggleLanguage = useLanguageUpdate()
	return (
		<div className="toggleLangBtn" onClick={toggleLanguage}>
			{lang === 'FR' ? 'EN' : 'FR'}
		</div>
	)
}

export default SwitchLang
