import React from 'react';

import Cuadro from '../components/Cuadro';
import * as content from '../pageConfig.json';
import backgroundImage from '../assets/background/pattern.svg';

export default function About() {
  const { about } = content;
  return (
    <div className="w-full flex flex-col bg-dark-5" id="about" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <h1 className="self-center my-12 text-3xl font-semibold text-gray-900 px-4 py-2 bg-opacity-30 rounded-xl bg-dark-6">Sobre mi</h1>

      <div className="flex flex-wrap justify-center md:mx-32 mx-16">

        {about.map((art) => (
          <Cuadro data={art} key={art.id} />
        ))}

      </div>

    </div>
  );
}
