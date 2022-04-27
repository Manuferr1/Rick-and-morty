import React from "react";
import FilterButton from "../FilterButton";

const genders = ["Female", "Male", "Genderless", "unknown"];

const Genders = ({setGender, setPageNumber}) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingOne">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseOne"
        >
          Genders
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-headingOne"
      >
        <div className="accordion-body d-flex flex-wrap gap-2">
          {genders.map((items, index) => (
            <FilterButton
              key={index}
              index={index}
              items={items}
              setPageNumber={setPageNumber}
              display={setGender}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Genders;
