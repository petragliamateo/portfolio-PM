import React, { useState } from 'react';
import Workes from './Workes';
import arrow from '../assets/icons/arrow-right-short.svg';
import ProyectoMuestra from './ProyectoMuestra';

export default function Carousel({ values, render, arrowColor }) {
  const [actual, setActual] = useState(0);
  const siguiente = () => {
    setActual((p) => (p === values.length - 1 ? 0 : p + 1));
  };
  const anterior = () => {
    setActual((p) => (p === 0 ? values.length - 1 : p - 1));
  };

  return (
    <div className="flex md:flex-row flex-col justify-around items-center md:my-0 my-16 gap-2">
      <button className="shadow-xl flex justify-center items-center rounded-full h-16 w-24" type="button" onClick={anterior} style={{ backgroundColor: arrowColor }}>
        <img src={arrow} alt="left-arrow" className="w-8 rotate-180" />
      </button>
      {render === 'work' && <Workes project={values[actual]} />}
      {render === 'projects' && <ProyectoMuestra project={values[actual]} />}
      <button className="shadow-xl flex justify-center items-center rounded-full h-16 w-24" type="button" onClick={siguiente} style={{ backgroundColor: arrowColor }}>
        <img src={arrow} alt="rigth-arrow" className="w-8 " />
      </button>
    </div>
  );
}
