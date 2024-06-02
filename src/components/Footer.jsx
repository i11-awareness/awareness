import React from "react";
import { Link } from "react-router-dom";
import Slogan from "../assets/Inspire11Slogan.png";
import navigation from "../enums/navigation";
import { contactInfo } from "../enums/cardContent";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className=" mx-auto px-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between items-center">
          <div className="mb-6">
            <img src={Slogan} className="h-12" alt="Inspire11 Logo" />
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-200 uppercase">
                Pages
              </h2>
              <ul className="text-gray-400 ">
                {navigation.map((item) => (
                  <li key={item.name} className="mb-2">
                    <Link to={item.to} className="hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-200 uppercase">
                Contact
              </h2>
              <div>
                {contactInfo.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-300 flex items-center mb-2"
                  >
                    <p className="mr-4">{item.icon}</p>
                    <span>{item.text}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto lg:my-6" />
        <div className="text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} Inspire11™. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
