import React from 'react';

import Workes from '../components/Workes';
import * as content from '../pageConfig.json';

export default function Work() {
  const { work } = content;
  return (
    <div className="w-full flex flex-col bg-white">
      <h1 className="self-center mt-16 text-3xl font-semibold text-gray-800">Experiencia</h1>

      <div className="flex flex-col">

        {work.map((p) => (
          <Workes key={p.id} project={p} />
        ))}
      </div>

    </div>
  );
}
