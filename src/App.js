import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/theme'
import { GlobalStyles } from './styles/global'
import { LanguageProvider } from './contexts/language'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './screens/Home/Home'
import TopBar from './components/TopBar'
import About from './screens/About/About'
import Work from './screens/Work/Work'
import Contact from './screens/Contact/Contact'
import SwitchLang from './components/SwitchLang'
import SwitchTheme from './components/SwitchTheme'

function App() {
	const [theme, setTheme] = useState('light')

	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark')
		} else {
			setTheme('light')
		}
	}

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<LanguageProvider>
				<GlobalStyles />
				<Helmet>
					<title>Marion Saul - fullstack web developer</title>
				</Helmet>
				<Router>
					<TopBar theme={theme} />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/about" element={<About />}></Route>
						<Route path="/work" element={<Work />}></Route>
						<Route path="/contact" element={<Contact />}></Route>
					</Routes>
				</Router>
				<SwitchLang />
				<SwitchTheme toggleTheme={toggleTheme} theme={theme} />
				<footer></footer>
			</LanguageProvider>
		</ThemeProvider>
	)
}

export default App
