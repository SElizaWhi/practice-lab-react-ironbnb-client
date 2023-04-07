import ironhackersImg from './assets/ironhackers.avif'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import ApartmentsList from './components/ApartmentsList'
import ApartmentDetails from './components/ApartmentDetails'
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
						component={ApartmentDetails}
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
