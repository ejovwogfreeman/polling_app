import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Vote = () => {
  const { category } = useParams(); // Get the category from the URL
  const [selectedOption, setSelectedOption] = useState("");

  // Sample options for voting (you can modify these based on the category)
  const options = {
    president: ["Candidate A", "Candidate B", "Candidate C"],
    secretary: ["Candidate D", "Candidate E", "Candidate F"],
    pro: ["Candidate G", "Candidate H", "Candidate I"],
    treasurer: ["Candidate J", "Candidate K", "Candidate L"],
  };

  const handleVote = (e) => {
    e.preventDefault();
    if (selectedOption) {
      console.log(`Voted for: ${selectedOption} in ${category}`);
      // Here, you would typically send the vote to your backend
      alert(`You voted for ${selectedOption} in ${category}`);
      setSelectedOption(""); // Reset selection after voting
    } else {
      alert("Please select an option before voting.");
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="border rounded shadow-sm p-3">
            <h2 className="text-center">
              Vote for {category.charAt(0).toUpperCase() + category.slice(1)}
            </h2>
            <form onSubmit={handleVote} className="mt-4">
              <ul className="list-group mt-4">
                {options[category]?.map((option, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex align-items-center hover-link"
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelectedOption(option)}
                  >
                    <input
                      type="radio"
                      className="form-check-input me-2"
                      id={`option-${index}`}
                      name="PollOption"
                      value={option}
                      checked={selectedOption === option}
                      onChange={() => setSelectedOption(option)}
                      required
                      style={{ cursor: "pointer" }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`option-${index}`}
                      style={{ cursor: "pointer" }}
                    >
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
              <button type="submit" className="btn btn-primary w-100 mt-3">
                Submit Vote
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vote;
