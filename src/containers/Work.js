import React from 'react';
import Carousel from '../components/Carousel';

import * as content from '../pageConfig.json';

export default function Work() {
  const { work } = content;
  return (
    <div className="w-full flex flex-col bg-white">
      <h1 className="self-center mt-16 text-3xl font-semibold text-gray-800">Experiencia</h1>

      <Carousel values={work} render="work" />

    </div>
  );
}
