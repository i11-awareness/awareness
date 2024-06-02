import React from "react";
import Card from "../components/AboutCard";
import CardContent from "../enums/cardContent";

const AboutUs = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-lg">
        <div className="mb-4 ml-2">
          <h1 className="pt-5 text-3xl font-bold">About Us</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CardContent.map((content, index) => (
            <div key={index} className="m-4">
              <Card data={content} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
