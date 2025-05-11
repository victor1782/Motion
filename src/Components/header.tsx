import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import logoUrl from '../assets/pill_2.svg';
import { animateHeaderElements } from '../animations/textAnimations';

export default function Header() {
  const motionRef = useRef<HTMLDivElement>(null);
  const graphicsRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  // Opción 1: Usando useGSAP (recomendado)
  useGSAP(() => {
    animateHeaderElements(
      motionRef.current,
      graphicsRef.current,
      logoRef.current
    );
  },  []);

  // Opción 2: Manteniendo useEffect como alternativa
  /*
  useEffect(() => {
    const ctx = gsap.context(() => {
      animateHeaderElements(
        motionRef.current,
        graphicsRef.current,
        logoRef.current
      );
    });

    return () => ctx.revert(); // Limpieza de animaciones
  }, []);
  */

  return (
    <>
      <div className='mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 bg-gray-50 static font-work-sans text-primary pt-12 font-extrabold leading-[0.9] text-[3rem] lg:text-[5.625rem] text-left'>
        <div ref={motionRef}>MOTION</div>
        <div ref={graphicsRef}>GRAPHICS</div>
      </div>
      <div className="relative">
        <img
          ref={logoRef}
          src={logoUrl}
          alt="Logo"
          className="relative h-10 w-auto lg:h-12 lg:w-auto bottom-0.2 left-29 md:bottom-0.2 md:left-35 lg:bottom-2 lg:left-80 xl:bottom-1 xl:left-60 xl1 2xl:bottom-1 2xl:left-105 -rotate-7 z-10"
        />
      </div>
    </>
  );
}