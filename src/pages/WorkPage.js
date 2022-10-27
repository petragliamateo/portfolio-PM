import React from 'react';
import * as Images from '../assets/images/index';
import * as Captures from '../assets/captures/index';
import githubLight from '../assets/icons/github-light.svg';

export default function WorkPage({ pageData }) {
  const {
    textData, imgData, imgName, titulo, technologies, projectUrl, projectMsg, gitUrl,
  } = pageData.data;
  return (
    <div className="flex flex-col justify-center items-center bg-dark-6 gap-12 pt-12">
      <h1 className="text-2xl font-bold">{titulo}</h1>
      <div>
        <img className="w-96" alt={imgName} src={Images[imgName]} />
      </div>
      <div className="flex gap-4">
        {technologies.map((t) => <p key={t} className="py-2 px-4 border border-dark-2 rounded font-bold bg-dark-5">{t}</p>)}
      </div>
      <div className="w-full text-center md:w-2/3">
        {textData.map((t) => <p className="m-1" key={t}>{t}</p>)}
      </div>
      <div className="flex items-center justify-center">
        {projectUrl && (
          <a href={projectUrl} className="text-center mx-4 w-28 btn btn-dark border-dark-6 cursor-pointer">
            {projectMsg}
          </a>
        )}
        {gitUrl && (
          <a href={gitUrl} className="mx-4 flex justify-between items-center rounded-full btn btn-dark border-dark-6">
            <img alt="" src={githubLight} />
          </a>
        )}
      </div>
      {imgData.length > 0
        && (
        <div className="bg-dark-4 w-full">
          <div className="mx-auto w-full py-8 md:w-2/3 flex flex-wrap justify-center items-center gap-8">
            {imgData.map((i) => <img className="w-96" key={i} alt={i} src={Captures[i]} />)}
          </div>
        </div>
        )}
    </div>
  );
}
