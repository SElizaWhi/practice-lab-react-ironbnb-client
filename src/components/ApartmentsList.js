import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
function ApartmentsList(props) {
	const [apartmentsArr, setApartmentsArr] = useState([])
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BASE_URL}/apartments`)
			.then((response) => setApartmentsArr(response.data))
	}, [])

	return (
		<div className='row-4'>
			{apartmentsArr.map((apartment) => {
				return (
					<Link to={`/apartments/${apartment._id}`}>
						<img
							src={apartment.img}
							alt='apartment'
						/>
						{apartment.title}
					</Link>
				)
			})}
		</div>
	)
}

export default ApartmentsList
