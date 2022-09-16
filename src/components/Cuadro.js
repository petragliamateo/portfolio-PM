import React from 'react';

export default function Cuadro({ data, trans }) {
  const {
    id, titulo, contenido,
  } = data;
  const textShadow = '1px 0px 1px #000, 0px 1px 1px #000, -1px 0px 1px #000, 0px -1px 1px #000';
  return (
    <div className="md:mx-16 mx-8 mb-16 w-64">
      <h1 className="text-xl font-semibold text-center text-dark-6" style={{ textShadow }}>{titulo}</h1>
      <hr
        className={`reveal${id} mx-14 mb-2 mt-1 border border-dark-0 
            transition-transform duration-1000 ease-out delay-300 ${trans}`}
      />
      <p className="text-center font-semibold text-dark-6" style={{ textShadow }}>
        {contenido}
      </p>
    </div>
  );
}
