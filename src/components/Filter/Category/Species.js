import React from "react";
import FilterButton from "../FilterButton";

const species = [
  "Human",
  "Alien",
  "Humanoid",
  "Poopybutthole",
  "Mythological",
  "Unknown",
  "Animal",
  "Disease",
  "Robot",
  "Cronenberg",
  "Planet",
];

const Species = ({setSpecie, setPageNumber}) => {
  return (
    //copiar de status las propiedades
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseTwo"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseTwo"
        >
          Species
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseTwo"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-headingTwo"
      >
        <div className="accordion-body d-flex flex-wrap gap-2"> 
          {species.map((items, index) => (
            <FilterButton
              key={index}
              index={index}
              items={items}
              setPageNumber={setPageNumber}
              display={setSpecie}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Species;
