import React from 'react';

import * as content from '../pageConfig.json';

import backgroundImage from '../assets/background/pattern.svg';
import Carousel from '../components/Carousel';

export default function Proyectos() {
  const { projects } = content;
  return (
    <div className="w-full flex flex-col bg-scroll" id="projects" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className="self-center mt-16 text-3xl font-semibold text-gray-900 px-4 py-2 bg-opacity-20 rounded-xl bg-dark-6">
        Proyectos
      </h1>

      <div className="flex flex-col">

        <Carousel values={projects} render="projects" arrowColor="#828ECF" />

        <a
          href="https://github.com/petragliamateo"
          className="mb-8 w-64 mx-auto text-center btn btn-dark border-black"
        >
          Todos los proyectos en Github
        </a>

      </div>

    </div>
  );
}
