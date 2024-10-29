import React from "react";
import { useParams } from "react-router-dom";

const VoteResults = () => {
  const { category } = useParams(); // Get the category from the URL

  // Sample data for demonstration
  const results = [
    { id: 1, username: "user1", vote: "Candidate A", time: "10:00 AM" },
    { id: 2, username: "user2", vote: "Candidate B", time: "10:05 AM" },
    { id: 3, username: "user3", vote: "Candidate C", time: "10:10 AM" },
    { id: 4, username: "user4", vote: "Candidate A", time: "10:15 AM" },
    { id: 5, username: "user5", vote: "Candidate B", time: "10:20 AM" },
  ];

  // Count votes for each candidate
  const voteCount = {};
  results.forEach((result) => {
    if (voteCount[result.vote]) {
      voteCount[result.vote]++;
    } else {
      voteCount[result.vote] = 1;
    }
  });

  // Convert vote count to an array and sort by votes
  const sortedVotes = Object.entries(voteCount)
    .map(([candidate, count]) => ({ candidate, count }))
    .sort((a, b) => b.count - a.count);

  // Function to download results as CSV
  const downloadResult = () => {
    window.print(); // Open the print dialog
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="border rounded shadow-sm p-3">
            <h2 className="text-center">
              Vote Results for{" "}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h2>
            <table className="table table-striped table-bordered mt-4">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>USERNAME</th>
                  <th>VOTE</th>
                  <th>TIME</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result) => (
                  <tr key={result.id}>
                    <td>{result.id}</td>
                    <td>{result.username}</td>
                    <td>{result.vote}</td>
                    <td>{result.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Summary Section */}
            <div className="mt-4">
              <h4>Vote Summary</h4>
              <ul className="list-group">
                {sortedVotes.map((item, index) => (
                  <li key={index} className="list-group-item">
                    {item.candidate}&nbsp;&nbsp;-&nbsp;&nbsp;{item.count} vote
                    {item.count > 1 ? "s" : ""}
                  </li>
                ))}
              </ul>
            </div>

            {/* Download Button */}
            <button
              className="btn btn-primary mt-4 no-print w-100"
              onClick={downloadResult}
            >
              Download Results
            </button>
          </div>
        </div>
      </div>

      {/* Include CSS for print styles */}
      <style>
        {`
          @media print {
            .no-print {
              display: none !important; /* Hides elements with this class when printing */
            }
          }
        `}
      </style>
    </div>
  );
};

export default VoteResults;
