import React from "react";
import { Link } from "react-router-dom";

const Polls = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="border rounded shadow-sm p-3">
            <h2 className="text-center">All Polls</h2>
            <ul className="list-group mt-4">
              <li className="list-group-item p-0">
                <Link
                  to="/poll/president"
                  className="d-flex p-2 text-decoration-none hover-link"
                >
                  President
                </Link>
              </li>
              <li className="list-group-item p-0">
                <Link
                  to="/poll/secretary"
                  className="d-flex p-2 text-decoration-none hover-link"
                >
                  Secretary
                </Link>
              </li>
              <li className="list-group-item p-0">
                <Link
                  to="/poll/pro"
                  className="d-flex p-2 text-decoration-none hover-link"
                >
                  Public Relations Officer (PRO)
                </Link>
              </li>
              <li className="list-group-item p-0">
                <Link
                  to="/poll/treasurer"
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

export default Polls;
