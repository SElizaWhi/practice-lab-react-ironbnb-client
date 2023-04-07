import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";

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
    <section class="vh-100 bg-image ">
      <div class="mask d-flex align-items-center h-100 gradient-custom-3 ">
        <div class="container h-100 ">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card shadow" Style="border-radius: 15px;">
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-5">
                    {apartment.title}
                  </h2>
                    <img
                      className="card-img-top m-h-50 same-size-img text-truncate"
                      src={apartment.img}
                      alt="apartment"
                    />
                  <div class="form-outline mb-4">
                    <p>Price: {apartment.pricePerDay}€</p>
                  </div>
                  <div class="d-flex justify-content-center">
                    <Link to={`/apartments`}>
                      <button>Back</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApartmentsDetails