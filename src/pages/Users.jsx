import React from "react";

const Users = () => {
  // Sample user data for demonstration
  const users = [
    { id: 1, username: "user1", email: "user1@example.com", role: "Admin" },
    { id: 2, username: "user2", email: "user2@example.com", role: "User" },
    { id: 3, username: "user3", email: "user3@example.com", role: "User" },
    { id: 4, username: "user4", email: "user4@example.com", role: "Admin" },
    { id: 5, username: "user5", email: "user5@example.com", role: "User" },
  ];

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="border rounded shadow-sm p-3">
            <h2 className="text-center">All Users</h2>
            <table className="table table-striped table-bordered mt-4">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>USERNAME</th>
                  <th>EMAIL</th>
                  <th>ROLE</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
