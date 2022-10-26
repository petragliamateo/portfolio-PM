/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { handleScroll, hideNavbar } from '../utils/documentFunctions';
import list from '../assets/icons/list.svg';

export default function Navbar({ setPage }) {
  const navResponsive = ' hidden lg:block';
  const listMenu = 'mx-2 hover:text-dark-5 transition duration-500 ease-in-out text-white';
  const marginResponsiveX = 'lg:mx-32 md:mx-24 sm:mx-12 mx-4';
  const slideItem = 'bg-black w-full h-12 mx-auto hover:text-dark-5 transition-transform';
  const [slide, setSlide] = React.useState(false);

  const handleScrollAndHome = (id) => {
    setPage('home');
    handleScroll(id);
  };

  React.useEffect(() => {
    hideNavbar();
    return () => hideNavbar();
  }, []);
  // Pasar todas las funciones activas a un hook personalizado
  // --> Animaciones quedan arriba del navbar.

  return (
    <div
      className="bg-black border-gray-700 fixed w-full top-0 transition-all z-10"
      style={{ borderBottomWidth: 1 }}
      id="navbar"
    >
      <div
        className={`flex justify-between ${marginResponsiveX} text-2xl font-semibold h-16 items-center`}
      >
        <h1 className="text-dark-5">Mateo Petraglia</h1>

        <div className={navResponsive}>
          <ul className="flex">
            <li className={listMenu}>
              <button type="button" onClick={() => handleScrollAndHome('home')}>Home</button>
            </li>
            <li className={listMenu}>
              <button type="button" onClick={() => handleScrollAndHome('about')}>About</button>
            </li>
            <li className={listMenu}>
              <button type="button" onClick={() => handleScrollAndHome('projects')}>Proyectos</button>
            </li>
            <li className={listMenu}>
              <button type="button" onClick={() => handleScrollAndHome('contact')}>Contacto</button>
            </li>
          </ul>
        </div>
        <div className="block lg:hidden cursor-pointer text-dark-5" onClick={() => setSlide((prev) => !prev)}>
          <img alt="" src={list} />
        </div>
      </div>

      <div className="absolute flex flex-col w-full text-dark-1 text-2xl font-semibold">
        <button
          type="button"
          className={`${slide ? 'scale-100' : 'scale-0'} ${slideItem} duration-300`}
          onClick={() => {
            setSlide((prev) => !prev);
            handleScrollAndHome('home');
          }}
        >
          Home

        </button>
        <button
          type="button"
          className={`${slide ? 'scale-100' : 'scale-0'} ${slideItem} duration-500`}
          onClick={() => {
            setSlide((prev) => !prev);
            handleScrollAndHome('about');
          }}
        >
          About

        </button>
        <button
          type="button"
          className={`${slide ? 'scale-100' : 'scale-0'} ${slideItem} duration-700`}
          onClick={() => {
            setSlide((prev) => !prev);
            handleScrollAndHome('projects');
          }}
        >
          Projects

        </button>
        <button
          type="button"
          className={`${slide ? 'scale-100' : 'scale-0'} ${slideItem} duration-1000`}
          onClick={() => {
            setSlide((prev) => !prev);
            handleScrollAndHome('contact');
          }}
        >
          Contact

        </button>
      </div>

    </div>
  );
}
