import { GrTrophy } from "react-icons/gr";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div>
      <div className="max-w-sm shadow-lg rounded-md bg-primary border-2 border-primary">
        <div className="bg-white flex items-center justify-center h-10 rounded-t-md">
          <p className="font-bold text-center text-xl mb-1">{data.title}</p>
        </div>
        <div className="p-6">
          {data.list ? (
            <ul className="text-gray-100 text-base list-none space-y-2">
              {data.list.map((item, index) => (
                <li key={index} className="flex items-center">
                  <GrTrophy className="mr-4 flex-none" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-100 text-base">{data.text}</p>
          )}

          {data?.contact?.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-blue-300 flex w-full justify-center items-center my-1"
            >
              <div className="grid grid-cols-12 items-center">
                <p className="col-span-4 mr-4 flex justify-center items-center">
                  {item.icon}
                </p>
                <span className="col-span-8">{item.text}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
