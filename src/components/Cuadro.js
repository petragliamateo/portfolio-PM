import React from 'react';
import { onScrollReveal } from '../utils/documentFunctions';

export default function Cuadro({ data }) {
  const {
    titulo, contenido,
  } = data;
  const textShadow = '1px 0px 1px #000, 0px 1px 1px #000, -1px 0px 1px #000, 0px -1px 1px #000';
  const thisRef = React.useRef();
  React.useEffect(() => {
    onScrollReveal(thisRef.current, 'width', 0, '145px');
  }, []);
  return (
    <div className="md:mx-16 mx-8 mb-16 w-64">
      <h1 className="text-xl font-semibold text-center text-dark-0" style={{ textShadow }}>{titulo}</h1>
      <hr
        className={`mx-14 mb-2 mt-1 bg-dark-4 border-0 h-[2px] rounded
            transition-all duration-1000 ease-out`}
        ref={thisRef}
      />
      <p className="text-center font-semibold text-dark-0" style={{ textShadow }}>
        {contenido}
      </p>
    </div>
  );
}
