import React from "react";
import { navLinks } from "../../constants";

const Navbar = () => {
  return (
    <nav className="px-4">
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Slyder Cocktails</p>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              {" "}
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
