// import React from 'react' no es necesario (comando rfc)
import React from "react";
const NO_CHARACTERS_FOUND = "No characters found"
const Cards = ({ results }) => {
  let display;

  //CAMBIAR POR TERNARIO 

  if (results) {
    display = results.map((x) => {
      let { id, name, image, origin } = x;
      return (
        <div key={id} className="col-3" style={styles.gridcard}>
          {/*Al devolver col-3, cada imagen ocupa 3 columnas de 12 (proporcionales de 8))*/}
            <div className="card border border-2 border-primary rounded-3" style={styles.contentCard}>
              <img src={image} alt="" className="img-fluid card-img-top" />
              <div className="card-body" style={styles.contentCard}>
                <h5 className="Card-title text-start fw-bold">{name}</h5>
                <p className="Card-text text-start">Origen: {origin.name}</p>
              </div>
            </div>
          </div>
      );
    });
  } else {
    display = NO_CHARACTERS_FOUND;
  }

  return(
    
     <>{display}</>
  );
};

export default Cards;

const styles = {
  gridcard: {
    width: "25%",
    backgroundColor: "white",
    padding: "3%",
   // maxheight: 
  },
  contentCard: {
   height: "100%"
  },
  border: {
    borderradius: "10px",
  },
};
