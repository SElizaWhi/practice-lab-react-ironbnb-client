import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ApartmentsDetails() {
	const { id } = useParams()
	const [apartment, setApartment] = useState({})

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BASE_URL}/apartments/${id}`)
			.then((response) => setApartment(response.data))
			.catch((error) => console.log(error))
	}, [id])

	return (
		<div>
			<img
				src={apartment.img}
				alt='apartment'
			/>
			<h2>{apartment.title}</h2>
			<p>{apartment.description}</p>
			<p>Price: {apartment.pricePerDay}€</p>
		</div>
	)
}

export default ApartmentsDetails
