import "bootstrap/dist/js/bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import universeRM from "./img/universeRM.jpg";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Filter from "./components/Filter/Filter";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/Episodes" element={<Episodes />}/> 
        <Route path="/Location" element={<Location />}/> 
      </ Routes>
    </Router>
  );
}

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [specie, setSpecie] = useState("");
  const [gender, setGender] = useState("");
  let { info, results } = data;
  //console.log(info)

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${specie}`;
  console.log(api);

  useEffect(() => {
    //cada vez que cambia API se usa el hook y hace fetch de API
    (async () => {
      let fetchdata = await fetch(api); //.then((res) => res.json());
      fetchdata = await fetchdata.json();
      // console.log(fetchdata);
      setData(fetchdata);
    })();
  }, [api]);

  return (
    <div className="App">
      <div className="container-fluid">
        <Search setSearch={setSearch} />
      </div>
      <div className="container-fluid">
        {" "}
        {/*Bootstrap grid */}
        <div className="row">
          <Filter
            setStatus={setStatus}
            setSpecie={setSpecie}
            setGender={setGender}
            setPageNumber={setPageNumber}
          />

          <div className="col-9">
            <div className="row p-3">
              {/*ahora hay 12 columnas mas disponibles dentro de las 8*/}
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      {/*Pagination */}
      <div className="container p-1">
        <Pagination
          info={info}
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
        />
      </div>
      {console.log(
        pageNumber,
        "STATUS",
        status,
        "SPECIE",
        specie,
        "GENDER",
        gender
      )}
    </div>
  );
};

export default App;
