import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Inspire11Logo.svg";
import Slogan from "../assets/Inspire11Slogan.png";
import navigation from "../enums/navigation";
import NavItem from "../components/NavItem";
import useBodyOverflow from "../hooks/useBodyOverflow";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  

  useBodyOverflow(open);

  return (
    <nav className="bg-primary fixed w-full top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute left-0 flex items-center pl-2">
            <div className="flex-shrink-0">
              <NavLink to="/">
                <img className="h-8 w-auto" src={Logo} alt="Inspire11 Logo" />
              </NavLink>
            </div>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <NavItem
                  key={item.name}
                  item={item}
                  className="rounded-md px-3 py-2 text-sm font-medium"
                />
              ))}
            </div>
          </div>
          <div className="absolute right-0 flex items-center sm:hidden">
            {/* Mobile */}
            <button
              onClick={handleOpen}
              className="inline-flex items-center justify-center p-2 text-gray-400"
            >
              <FaBars className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-primary z-50 pt-16">
          <div className="absolute top-0 left-0 w-full flex justify-between items-center px-4 h-16 border-b border-gray-500 ">
            <NavLink to="/" onClick={handleClose}>
              <img className="h-8 w-auto" src={Logo} alt="Inspire11 Logo" />
            </NavLink>
            <button
              onClick={handleClose}
              className="text-gray-100 focus:outline-none"
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col items-start w-full">
            {navigation.map((item) => (
              <NavItem
                key={item.name}
                item={item}
                onClick={handleClose}
                className="w-full text-center py-12 text-2xl font-medium border-b border-gray-500"
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full flex justify-center items-center py-4">
            <img
              className="h-12 w-auto opacity-20"
              src={Slogan}
              alt="Inspire11 Slogan"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
