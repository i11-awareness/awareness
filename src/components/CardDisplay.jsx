import React from 'react';

export default function CardDisplay({ title, header, content, subheader, list }) {
  return (
    <div className="p-6 border rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-100">
      <h3 className="text-xl font-semibold mb-2 bg-primary text-white p-2 rounded-t-md">{title}</h3>
      <div className="flex flex-col justify-center items-start space-y-4">
        <div>
          <strong>{header}</strong>
          <p>{content}</p>
        </div>
        <div>
          <strong>{subheader}</strong>
          <ul className="list-disc list-inside">
            {list.map((item, index) => (
              <li key={index}><strong>{item.name}</strong>{item.name && ": "}{item.description}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
