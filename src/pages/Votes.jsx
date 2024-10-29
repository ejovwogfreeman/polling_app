import React from "react";
import { Link } from "react-router-dom";

const Votes = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="border rounded shadow-sm p-3">
            <h2 className="text-center">Choose A Category To View Vote</h2>
            <ul className="list-group mt-4">
              <li className="list-group-item p-0">
                <Link
                  to="/vote_result/president"
                  className="d-flex p-2 text-decoration-none hover-link"
                >
                  President
                </Link>
              </li>
              <li className="list-group-item p-0">
                <Link
                  to="/vote_result/secretary"
                  className="d-flex p-2 text-decoration-none hover-link"
                >
                  Secretary
                </Link>
              </li>
              <li className="list-group-item p-0">
                <Link
                  to="/vote_result/pro"
                  className="d-flex p-2 text-decoration-none hover-link"
                >
                  Public Relations Officer (PRO)
                </Link>
              </li>
              <li className="list-group-item p-0">
                <Link
                  to="/vote_result/treasurer"
                  className="d-flex p-2 text-decoration-none hover-link"
                >
                  Treasurer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Votes;
