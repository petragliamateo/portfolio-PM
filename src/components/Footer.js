/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

import instagramLight from '../icons/instagram-light.svg';
import linkedinLight from '../icons/linkedin-light.svg';
import githubLight from '../icons/github-light.svg';
import { handleScroll, onScrollFixedReveal } from '../utils/documentFunctions';

export default function Footer() {
  const hoverButton = 'hover:scale-125 transition-transform duration-400 ease-out';
  useEffect(() => {
    onScrollFixedReveal('goto-home');
  }, []);

  return (
    <footer className="bg-slate-800 flex flex-col h-full relative">

      <ul className="flex my-5 self-center">
        <li className={`mr-2 ${hoverButton}`}>
          <a href="https://github.com/petragliamateo">
            <img alt="" src={githubLight} />
          </a>
        </li>

        <li className={`mx-2 ${hoverButton}`}>
          <a href="https://www.linkedin.com/in/petragliamateo/">
            <img alt="" src={linkedinLight} />
          </a>
        </li>

        <li className={`mx-2 ${hoverButton}`}>
          <a href="https://www.instagram.com/petragliamateo/">
            <img alt="" src={instagramLight} />
          </a>
        </li>
      </ul>

      <h1 className="mb-2 self-center text-dark-6">COPYRIGHT &copy; 2022 MATEO PETRAGLIA</h1>

      <button
        type="button"
        id="goto-home"
        onClick={() => handleScroll('home')}
        className="hide"
      >
        &#8593;

      </button>

    </footer>
  );
}
