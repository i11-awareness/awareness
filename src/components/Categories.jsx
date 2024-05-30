import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../enums/categories';
import { FiChevronsRight } from "react-icons/fi";



export default function Categories() {
  const navigate = useNavigate();

  return (
    <div className="pt-[50px] pr-[20px] pb-[20px] pl-[20px] flex flex-col items-center space-y-2">
      {categories.map(({ name, url }, index) => (
        <div
          key={index}
          onClick={() => navigate(url)}
          className="flex items-center justify-center w-full sm:w-80 md:w-1/2 lg:w-1/3 border-2 border-primary text-primary py-2 px-4 rounded bg-white hover:bg-primary hover:text-white focus:outline-none h-20 font-bold transition-colors duration-300"
          >
          {name}
          <FiChevronsRight className="ml-2 text-secondary text-xl " />
        </div>
      ))}
    </div>
  );
}