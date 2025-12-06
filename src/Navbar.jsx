import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-10 py-6 text-sm">
        <h1 className="font-semibold text-lg">MD ROBIUL HASAN RATUL</h1>
        <ul className="flex gap-8 opacity-80">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
