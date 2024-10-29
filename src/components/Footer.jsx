import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>&copy; {new Date().getFullYear()} Polling App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
