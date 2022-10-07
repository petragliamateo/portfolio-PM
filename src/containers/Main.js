import React, { useEffect, useState } from 'react';

import { handleScroll } from '../utils/documentFunctions';

import instagramDark from '../assets/icons/instagram-dark.svg';
import linkedinDark from '../assets/icons/linkedin-dark.svg';
import githubDark from '../assets/icons/github-dark.svg';
import lineCircle from '../assets/icons/lineCircle.png';
import lineCircle2 from '../assets/icons/lineCircle2.png';

export default function Main() {
  const [initialValues, setInitialValues] = useState({
    hr: 'scale-x-0', btn: 'scale-0', opacity: 'opacity-0',
  });
  const marginResponsive = 'xl:ml-52 lg:ml-48 md:ml-32 sm:ml-12 ml-4';
  const hoverButton = 'hover:scale-125 transition-transform duration-400 ease-out';
  const initialButton = `transition-transform duration-200 ${initialValues.btn}`;
  const initialOpacity = `transition-opacity duration-1000 ${initialValues.opacity}`;
  const colors = {
    main: '#0D0000',
    navbar: '#260101',
    line: '#D9B6A3',
    button: '#485673',
    text: '#929FE8',
    dark6: '#9FBDD6',
  };

  useEffect(() => {
    setInitialValues({
      hr: 'scale-x-100',
    });
  }, []);

  return (
    <div className="my-auto w-full bg-black py-32 lg:flex items-center justify-between" id="home">
      <div className={`${marginResponsive}`} style={{ color: colors.main }}>
        <h1 className="text-6xl font-semibold text-white mb-1">
          Hola! Soy Mateo
        </h1>
        <hr
          className={`w-full ml-6 transition-transform duration-1000 ${initialValues.hr}`}
          style={{ borderColor: colors.text }}
        />
        <h1 className="text-3xl font-semibold mt-4 mb-8 text-white">
          Desarrollador Full Stack
        </h1>

        <button
          type="button"
          onClick={() => handleScroll('contact')}
          style={{ borderColor: colors.button }}
          className={`btn btn-dark ${initialOpacity}`}
        >
          Contacto
        </button>

        <ul className="flex mb-2 mt-8">
          <li className={`mr-2 ${hoverButton} ${initialValues.btn}`}>
            <div className={`${initialButton} delay-100`}>
              <a href="https://github.com/petragliamateo">
                <img alt="" src={githubDark} />
              </a>
            </div>
          </li>
          <li className={`mx-2 ${hoverButton} ${initialValues.btn}`}>
            <div className={`${initialButton} delay-200`}>
              <a href="https://www.linkedin.com/in/petragliamateo/">
                <img alt="" src={linkedinDark} />
              </a>
            </div>
          </li>
          <li className={`mx-2 ${hoverButton}`}>
            <div className={`${initialButton} delay-300`}>
              <a href="https://www.instagram.com/petragliamateo/">
                <img alt="" src={instagramDark} />
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div className={`xl:mr-52 lg:mr-48 sm:mx-24 my-4 mx-auto flex flex-wrap sm:w-[400px] w-[300px] sm:h-[400px] h-[300px] ${initialOpacity} delay-500`}>
        <img src={lineCircle} alt="" className="animate-[spin_15s_linear_infinite] w-1/2 h-1/2" />
        <img src={lineCircle2} alt="" className="animate-[spin_10s_linear_infinite] w-1/2 h-1/2" />
        <img src={lineCircle2} alt="" className="animate-[spin_5s_linear_infinite] w-1/2 h-1/2" />
        <img src={lineCircle} alt="" className="animate-[spin_20s_linear_infinite] w-1/2 h-1/2" />
      </div>
    </div>
  );
}
