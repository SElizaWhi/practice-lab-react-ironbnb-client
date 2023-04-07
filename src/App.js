import ironhackersImg from './assets/ironhackers.avif'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import ApartmentsList from './components/ApartmentsList'
import ApartmentsDetails from './components/ApartmentsDetails'
import CreateApartment from './components/CreateApartment'

function App() {
	return (
		<Router>
			<div className='App'>
				<NavBar />
				<Routes>
					<Route
						exact
						path='/'
						component={HomePage}
					/>
					<Route
						exact
						path='/apartments'
						component={ApartmentsList}
					/>
					<Route
						exact
						path='/apartments/:id'
						component={ApartmentsDetails}
					/>
					<Route
						exact
						path='/apartments/create'
						component={CreateApartment}
					/>
				</Routes>
			</div>
		</Router>
	)
}

export default App
