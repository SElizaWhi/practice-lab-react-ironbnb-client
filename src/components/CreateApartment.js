import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateApartment = () => {
	const [img, setImg] = useState('')
	const [title, setTitle] = useState('')
	const [pricePerDay, setPricePerDay] = useState('')
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const response = await axios.post('https://ironbnb-m3.herokuapp.com/apartments', {
				img,
				title,
				pricePerDay,
			})
			console.log(response.data)
			navigate('/apartments')
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='img'>Image URL:</label>
				<input
					type='text'
					id='img'
					value={img}
					onChange={(e) => setImg(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor='title'>Title:</label>
				<input
					type='text'
					id='title'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor='pricePerDay'>Price per day:</label>
				<input
					type='number'
					id='pricePerDay'
					value={pricePerDay}
					onChange={(e) => setPricePerDay(e.target.value)}
				/>
			</div>
			<button type='submit'>Create Apartment</button>
		</form>
	)
}

export default CreateApartment
