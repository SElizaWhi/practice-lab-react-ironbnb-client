import ironhackersImg from './assets/ironhackers.avif'
import './App.css'
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import ApartmentsList from './components/ApartmentsList'
import ApartmentDetails from './components/ApartmentDetails'
import CreateApartment from './components/CreateApartment'
import axios from 'axios'

function App() {
const baseURL = "https://ironbnb-m3.herokuapp.com";
const [apartmentsArr, setApartmentsArr] = useState([]);

useEffect(() => {
  axios
    .get(baseURL + "/countries")
    .then((response) => {
      setApartmentsArr(response.data);
    })
    .catch((err) => {
      console.log("error getting apartments from API", err);
    });
}, []);

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
