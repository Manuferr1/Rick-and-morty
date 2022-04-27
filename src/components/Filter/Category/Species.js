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

const Species = () => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
        <button
          className="accordion-button"
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
        <div className="accordion-body">
          {species.map((items, index) => (
            <FilterButton
              key={index}
              name={species}
              index={index}
              items={items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Species;
