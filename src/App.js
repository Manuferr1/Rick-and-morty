import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useState, useEffect } from "react";
import universeRM from "./img/universeRM.jpg";
import "./App.css";
import Cards from "./components/Cards";
import Filter from "./components/Filter/Filter";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [pageNumber, setpageNumber] = useState(1);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  let { info, results } = data;
  //console.log(info)

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

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
      <Navbar />
      <h1 className="text-center Sans my-2">
        {" "}
        Rick & Morty
        <span className="text-primary"> Wiki</span>
      </h1>
      <div className="container">
        <Search setSearch={setSearch} />
      </div>
      <div className="container">
        {" "}
        {/*Bootstrap grid */}
        <div className="row">
          <div className="col-3">
            <Filter /> {/*Importacion del componente */}
          </div>
          <div className="col-8">
            <div className="row">
              {" "}
              {/*ahora hay 12 columnas mas disponibles 8/3*/}
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      {/*Pagination */}
      <div className="container">
        <Pagination
          info={info}
          setpageNumber={setpageNumber}
          pageNumber={pageNumber}
        />
      </div>
    </div>
  );
}

export default App;
