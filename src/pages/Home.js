import React from 'react';
import {
  About, Contact, Main, Proyectos, Work,
} from '../containers';

export default function Home() {
  return (
    <>
      <Main />
      <Work />
      <Proyectos />
      <About />
      <Contact />
    </>
  );
}
