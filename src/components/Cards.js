// import React from 'react' no es necesario (comando rfc)
import React from "react";

const Cards = ({ results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, name, image, origin } = x;
      return (
        <div key={id} className="col-3">
          {" "}
          {/*Al devolver col-4, cada imagen ocupa 4 columnas (de 12)*/}
          <img src={image} alt="" className="img-fluid" />
          <div className="content">
            <p className="fs-5">{name}</p>
            <p className="fs-7">Origen: {origin.name}</p>
          </div>
        </div>
      );
    });
  } else {
    display = "No  characters found";
  }

  return <>{display}</>;
};

export default Cards;
