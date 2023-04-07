import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";

function ApartmentsList(props) {
  const [apartmentsArr, setApartmentsArr] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/apartments`)
      .then((response) => setApartmentsArr(response.data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {apartmentsArr.map((apartment) => (
          <div
            className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4"
            key={apartment._id}
          >
            <div className="shadow card h-100" style={{ width: "18rem" }}>
              <Link to={`/apartments/${apartment._id}`}>
                <img
                  className="card-img-top m-h-50 same-size-img text-truncate"
                  src={apartment.img}
                  alt="apartment"
                />
                <div className="card-body">
                  <h5 className="card-title">{apartment.title}</h5>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApartmentsList;
