import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ApartmentsList from "./components/ApartmentsList";
import ApartmentsDetails from "./components/ApartmentsDetails";
import CreateApartment from "./components/CreateApartment";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apartments" element={<ApartmentsList />} />
          <Route path="/apartments/:id" element={<ApartmentsDetails />} />
          <Route path="/apartments/create" element={<CreateApartment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
