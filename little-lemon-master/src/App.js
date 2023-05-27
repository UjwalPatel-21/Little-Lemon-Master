import BaseHeader from './components/BaseHeader'
import './App.css'
import Landing from './components/Landing'
import Menus from './components/Menus'
import Contact from './components/Cantact'
import BaseFooter from './components/BaseFooter'
import Specials from './components/Specials'
import Reviews from './components/Reviews'

function App() {
	return (
		<div className='App'>
			<BaseHeader />

			<Landing />

			<Menus />

			<Specials />

			<Reviews />

			<Contact />

			<BaseFooter />
		</div>
	)
}

export default App
