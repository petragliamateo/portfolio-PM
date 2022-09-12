import React, { useEffect, useState } from 'react';

import instagramDark from '../icons/instagram-dark.svg';
import linkedinDark from '../icons/linkedin-dark.svg';
import githubDark from '../icons/github-dark.svg';

export default function Main({ handleScroll }) {
  const [transformation, setTransformation] = useState('scale-x-0');
  const marginResponsiveX = 'xl:mx-52 lg:mx-48 md:mx-32 sm:mx-16 mx-12';
  const hoverButton = 'hover:scale-125 transition-transform duration-400 ease-out';
  const colors = {
    main: '#0D0000',
    navbar: '#260101',
    line: '#D9B6A3',
    button: '#485673',
    text: '#929FE8',
    dark6: '#9FBDD6',
  };

  useEffect(() => {
    setTransformation('scale-x-110');
  }, []);

  return (
    <div className="my-auto bg-black py-32">
      <div className={`${marginResponsiveX}`} style={{ color: colors.main }}>
        <h1 className="text-6xl font-semibold text-white mb-1">
          Hola! Soy Mateo
        </h1>
        <hr
          className={`reveal0 w-96 ml-6 border transition-transform duration-1000 ease-out ${transformation}`}
          style={{ borderColor: colors.text }}
        />
        <h1 className="text-3xl font-semibold mt-4 mb-16 text-white">
          Desarrollador Full Stack
        </h1>

        <button
          type="button"
          onClick={() => handleScroll('contact')}
          style={{ borderColor: colors.button }}
          className="btn btn-dark"
        >
          Contact Me
        </button>

        <ul className="flex mb-2 mt-8">
          <li className={`mr-2 ${hoverButton}`}>
            <a href="https://github.com/petragliamateo">
              <img alt="" src={githubDark} />
            </a>
          </li>
          <li className={`mx-2 ${hoverButton}`}>
            <a href="https://www.linkedin.com/in/petragliamateo/">
              <img alt="" src={linkedinDark} />
            </a>
          </li>
          <li className={`mx-2 ${hoverButton}`}>
            <a href="https://www.instagram.com/petragliamateo/">
              <img alt="" src={instagramDark} />
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
}
