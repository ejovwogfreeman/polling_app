import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Poll = () => {
  const { category } = useParams(); // Get the category from the URL

  // Sample options for voting (you can modify these based on the category)
  const options = {
    president: ["Candidate A", "Candidate B", "Candidate C"],
    secretary: ["Candidate D", "Candidate E", "Candidate F"],
    pro: ["Candidate G", "Candidate H", "Candidate I"],
    treasurer: ["Candidate J", "Candidate K", "Candidate L"],
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="border rounded shadow-sm p-3">
            <h2 className="text-center">
              Registered Candidates for{" "}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h2>
            <ul className="list-group mt-4">
              {options[category]?.map((option, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex align-items-center hover-link"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poll;
