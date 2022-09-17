import React from 'react';
import Cuadro from '../components/Cuadro';
import * as content from '../pageConfig.json';

export default function About() {
  const { about } = content;
  const colors = {
    main: '#0D0000',
    navbar: '#260101',
    line: '#D9B6A3',
    button: '#485673',
    text: '#929FE8',
    dark6: '#9FBDD6',
  };
  return (
    <div className="w-full flex flex-col bg-dark-5" id="about">
      <h1 className="self-center my-12 text-3xl font-semibold text-gray-900">Sobre mi</h1>

      <div className="flex flex-wrap justify-center md:mx-32 mx-16">

        {about.map((art) => (
          <Cuadro data={art} key={art.id} colors={colors} />
        ))}

      </div>

    </div>
  );
}
