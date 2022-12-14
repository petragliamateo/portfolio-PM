import React, { useEffect, useRef } from 'react';

import githubLight from '../assets/icons/github-light.svg';
import * as Images from '../assets/images/index';
import { onScrollReveal } from '../utils/documentFunctions';

export default function ProyectoMuestra({ project }) {
  const {
    imgName, titulo, contenido, projectUrl, projectMsg, gitUrl, id,
  } = project;

  const thisRef = useRef();
  useEffect(() => {
    onScrollReveal(thisRef.current);
  }, []);

  const position = Math.floor(id / 2) * 2 === id
    ? 'md:mr-auto lg:ml-32 md:ml-16 mx-12 md:flex-row'
    : 'md:ml-auto lg:mr-32 md:mr-16 mx-12 md:flex-row-reverse';
  const responsiveCont = 'lg:w-2/3 md:w-[680px] w-auto md:h-94 h-auto flex md:flex-row flex-col';

  return (
    <div ref={thisRef} className={`flex ${position} ${responsiveCont} my-16 bg-dark-0 bg-opacity-80 shadow-md hover:shadow-2xl transition-all duration-1000 ease-out`}>
      <div className="md:w-1/2 w-auto h-full bg-blue-500 self-center"><img alt="" src={Images[imgName]} /></div>
      <div className="text-center w-full flex flex-col justify-between">
        <h1 className="my-8 text-2xl font-semibold">{titulo}</h1>
        <p className="mx-8">{contenido}</p>
        <div className="flex items-center justify-center my-8">
          <a href={projectUrl} className="mx-4 w-48 btn btn-dark border-dark-0 cursor-pointer">
            {projectMsg}
          </a>
          <a href={gitUrl} className="mx-4 border-dark-0 flex justify-between items-center rounded-full btn btn-dark">
            <img alt="" src={githubLight} />
          </a>
        </div>
      </div>
    </div>
  );
}
