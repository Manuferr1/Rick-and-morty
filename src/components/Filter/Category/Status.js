import React from "react";
import FilterButton from "../FilterButton";

const status = ["Alive", "Dead", "Unknown"];

const Status = () => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {status.map((items, index) => (
            <FilterButton
              key={index}
              name={status}
              index={index}
              items={items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;