import React from 'react';
import { useParams } from 'react-router-dom';
import CardDisplay from './CardDisplay';
import { resourceData } from '../enums/resourceData';

export default function ResourceContentDisplay() {
  const { resourceName } = useParams();
  const resource = resourceData[resourceName];

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h1 className="text-4xl font-bold mb-6 text-center ">{resource.title}</h1>
      <div className="grid grid-cols-1 gap-6">
        {resource.items.map(({ title, header, content, subheader, list }, index) => (
          <CardDisplay
            key={index}
            title={title}
            header={header}
            content={content}
            subheader={subheader}
            list={list}
          />
        ))}
      </div>
    </div>
  );
}
