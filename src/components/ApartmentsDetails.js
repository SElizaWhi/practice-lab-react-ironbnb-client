import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ApartmentsDetails() {
  const { id } = useParams();
  console.log(id)
  const [apartment, setApartment] = useState({});

  useEffect(() => {
    axios
      .get(`https://ironbnb-m3.herokuapp.com/apartments/${id}`)
      .then((response) => setApartment(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>{apartment.title}</h2>
      <p>{apartment.img}</p>
      <p>Price: {apartment.pricePerDay}€</p>

    </div>
  );
}

export default ApartmentsDetails