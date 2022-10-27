import React, { useContext, useEffect, useRef } from 'react';

import githubLight from '../assets/icons/github-light.svg';
import * as Images from '../assets/images/index';
import PageContext from '../contexts/PageContext';
import { onScrollReveal } from '../utils/documentFunctions';

export default function Workes({ project }) {
  const {
    imgName, titulo, contenido, gitUrl,
  } = project;
  const setPageData = useContext(PageContext);

  const thisRef = useRef();
  useEffect(() => {
    onScrollReveal(thisRef.current);
  }, []);

  const responsiveCont = 'lg:w-2/3 md:w-[680px] w-auto md:h-94 h-auto flex md:flex-row flex-col';

  return (
    <div ref={thisRef} className={`flex self-center ${responsiveCont} md:my-16 md:mx-0 mx-6 shadow-md hover:shadow-2xl transition-all duration-1000 ease-out`}>
      <div className="md:w-1/2 w-64 h-full bg-blue-500 self-center">
        <img alt={imgName} src={Images[imgName]} />
      </div>
      <div className="text-center w-full flex flex-col justify-between">
        <h1 className="my-8 text-2xl font-semibold">{titulo}</h1>
        <p className="mx-8">{contenido}</p>
        <div className="flex items-center justify-center my-8">
          <button type="button" className="btn" onClick={() => setPageData({ data: project, actualPage: 'work' })}>Ver</button>
          {gitUrl && (
            <a href={gitUrl} className="mx-4 flex justify-between items-center rounded-full btn btn-dark">
              <img alt="" src={githubLight} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
