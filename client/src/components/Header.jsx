import { Link } from "react-router-dom";
import React from "react";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-slate-400 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-700">SRB</span>
            <span className="text-slate-900">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-200 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-800" />
        </form>
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="hidden sm:inline text-slate-900 hover:underline hover:opacity-50">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline text-slate-900 hover:underline hover:opacity-50">
              About
            </li>
          </Link>
          <Link to={"/sign-in"}>
            <li className=" text-slate-900 hover:underline hover:opacity-50">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
