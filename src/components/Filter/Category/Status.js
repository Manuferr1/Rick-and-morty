import React from "react";
import FilterButton from "../FilterButton";

const status = ["Alive", "Dead", "Unknown"];

const Status = ({ setStatus, setPageNumber }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="true"
          aria-controls="collapseThree"
        >
          <div>Status</div>
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-2">
          {status.map((items, index) => (
            <FilterButton
              key={index}
              index={index}
              items={items}
              setPageNumber={setPageNumber}
              display={setStatus}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
