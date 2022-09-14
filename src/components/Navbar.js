/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { handleScroll } from '../utils/documentFunctions';

export default function Navbar() {
  const navResponsive = ' hidden lg:block';
  const listMenu = 'mx-2 hover:text-dark-5 transition duration-500 ease-in-out text-white';
  const marginResponsiveX = 'lg:mx-32 md:mx-24 sm:mx-12 mx-8';
  const slideItem = 'bg-dark-4 w-full h-12 mx-auto hover:text-dark-5 transition-transform';
  const [slide, setSlide] = React.useState(false);

  return (
    <div className="bg-black border-gray-700" style={{ borderBottomWidth: 1 }}>
      <div
        className={`flex justify-between ${marginResponsiveX} text-2xl font-semibold h-16 items-center`}
      >
        <h1 className="text-dark-5">Mateo Petraglia</h1>

        <div className={navResponsive}>
          <ul className="flex">
            <li className={listMenu}>
              <button type="button" onClick={() => handleScroll('home')}>Home</button>
            </li>
            <li className={listMenu}>
              <button type="button" onClick={() => handleScroll('about')}>About</button>
            </li>
            <li className={listMenu}>
              <button type="button" onClick={() => handleScroll('projects')}>Projects</button>
            </li>
            <li className={listMenu}>
              <button type="button" onClick={() => handleScroll('contact')}>Contact</button>
            </li>
          </ul>
        </div>
        <div className="block lg:hidden cursor-pointer text-dark-5" onClick={() => setSlide((prev) => !prev)}>
          Menu
        </div>
      </div>

      <div className="absolute flex flex-col w-full text-dark-1 text-2xl font-semibold">
        <button
          type="button"
          className={`${slide ? 'scale-100' : 'scale-0'} ${slideItem} duration-300`}
          onClick={() => handleScroll('home')}
        >
          Home

        </button>
        <button
          type="button"
          className={`${slide ? 'scale-100' : 'scale-0'} ${slideItem} duration-500`}
          onClick={() => handleScroll('about')}
        >
          About

        </button>
        <button
          type="button"
          className={`${slide ? 'scale-100' : 'scale-0'} ${slideItem} duration-700`}
          onClick={() => handleScroll('projects')}
        >
          Projects

        </button>
        <button
          type="button"
          className={`${slide ? 'scale-100' : 'scale-0'} ${slideItem} duration-1000`}
          onClick={() => handleScroll('contact')}
        >
          Contact

        </button>
      </div>

    </div>
  );
}
