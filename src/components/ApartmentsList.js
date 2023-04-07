import { Link } from "react-router-dom";

function ApartmentsList(props) {
  console.log(props);
  return (
    <div>
        {props.apartmentsArr.map((apartment) => {
          return (
            <Link to={`/${apartment._id}`}>
              <img
                src={
                  "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-lists/ironbnb-house." +
                  apartment._id() +
                  ".png"
                }
                alt="apartment"
              />
              {apartment.title}
            </Link>
          );
        })}
      </div>
  );
}

export default ApartmentsList;
