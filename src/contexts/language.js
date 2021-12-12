import React, { createContext, useContext, useState, useEffect } from 'react'

export const LanguageContext = createContext()
export const LanguageUpdateContext = createContext()

export function useLanguage() {
	return useContext(LanguageContext)
}

export function useLanguageUpdate() {
	return useContext(LanguageUpdateContext)
}

export const LanguageProvider = ({ children }) => {
	const defaultLanguage = window.localStorage.getItem('lang')
	const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'EN')

	useEffect(() => {
		localStorage.setItem('lang', userLanguage)
	}, [userLanguage])

	const toggleLanguage = () => {
		if (userLanguage === 'EN') {
			setUserLanguage('FR')
		} else {
			setUserLanguage('EN')
		}
	}

	return (
		<LanguageContext.Provider value={userLanguage}>
			<LanguageUpdateContext.Provider value={toggleLanguage}>
				{children}
			</LanguageUpdateContext.Provider>
		</LanguageContext.Provider>
	)
}
