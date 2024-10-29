import React, { useState } from "react";

const CreatePoll = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]); // Initialize with two empty inputs

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, ""]); // Add a new empty input
  };

  const handleRemoveOption = (index) => {
    if (options.length > 2) {
      // Allow removal only if more than 2 options exist
      const newOptions = options.filter((_, i) => i !== index); // Remove the option at the given index
      setOptions(newOptions);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Poll Question:", question);
    console.log("Poll Options:", options);
    // Here you would typically send the poll data to your backend
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <form
            className="border shadow-sm p-3 rounded w-100"
            onSubmit={handleSubmit}
          >
            <h2 className="text-center">Create A Poll</h2>
            <div className="mb-3">
              <label htmlFor="question" className="form-label">
                Poll Question
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Poll Question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Add Options</label>
              {options.map((option, index) => (
                <div key={index} className="input-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={`Option ${index + 1}`}
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    required
                  />
                  {/* Show remove button only for options added beyond the initial two */}
                  {index >= 2 && (
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleRemoveOption(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                className="btn btn-secondary w-100"
                onClick={handleAddOption}
              >
                Add Another Option
              </button>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Create Poll
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePoll;
