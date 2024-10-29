import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import CreatePoll from "./pages/CreatePoll";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Votes from "./pages/Votes";
import Vote from "./pages/Vote";
import Polls from "./pages/Polls";
import Poll from "./pages/Poll";
import Users from "./pages/Users";
import VoteResults from "./pages/VoteResults";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create_poll" element={<CreatePoll />} />
        <Route path="/votes" element={<Votes />} />
        <Route path="/vote/:category" element={<Vote />} />
        <Route path="/vote_result/:category" element={<VoteResults />} />
        <Route path="/polls" element={<Polls />} />
        <Route path="/poll/:category" element={<Poll />} />
        <Route path="/create_user" element={<Register />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
