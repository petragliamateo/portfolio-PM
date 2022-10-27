import React from 'react';
import * as Images from '../assets/images/index';

export default function WorkPage({ pageData }) {
  const {
    textData, imgData, imgName, titulo,
  } = pageData.data;
  return (
    <div className="flex flex-col justify-center items-center bg-dark-6 gap-12 pt-12">
      <h1 className="text-2xl font-bold">{titulo}</h1>
      <div>
        <img className="w-96" alt={imgName} src={Images[imgName]} />
      </div>
      <div className="w-full text-center md:w-1/2">
        {textData.map((t) => <p key={t}>{t}</p>)}
      </div>
      <div className="bg-dark-4 w-full py-8">
        {imgData.map((i) => <img alt="" src={Images[i]} />)}
      </div>
    </div>
  );
}
