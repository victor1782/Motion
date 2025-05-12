import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import logoUrl from '../assets/pill_2.svg';
import { useTextAnimation } from '../animations/textAnimations';

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const { ref: motionRef, timeline: motionTimeline } = useTextAnimation();
  const { ref: graphicsRef, timeline: graphicsTimeline } = useTextAnimation(0.6);

  useGSAP(() => {
    // Crear timeline maestra
    const masterTL = gsap.timeline();

    // Calcular duración total aproximada de las animaciones de texto
    const textAnimationDuration = 0.6 + 6 * 0.08; // delay inicial + 6 letras * stagger

    // Agregar timelines de texto si existen
    if (motionTimeline) masterTL.add(motionTimeline);
    if (graphicsTimeline) masterTL.add(graphicsTimeline);

    // Animación de imagen con delay después del texto
    if (imgRef.current) {
      // Configurar estado inicial
      gsap.set(imgRef.current, {
        opacity: 0,
        scale: 1.5,
        rotation: -7
      });

      // Animación después de que termine el texto
      masterTL.to(
        imgRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'elastic.out(1, 0.6)'
        },
        `+=${textAnimationDuration * 1.8}` // Delay adicional tiempo de texto
      );
    }
  }, { scope: headerRef });

  return (
    <header ref={headerRef} className="bg-gray-50 relative">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 bg-gray-50 static font-work-sans text-primary pt-12 font-extrabold leading-[0.9] text-[3rem] lg:text-[5.625rem] text-left">
        <h1 className="font-work-sans text-primary font-extrabold leading-[0.9] text-[3rem] lg:text-[5.625rem] text-left">
          <div ref={motionRef}>MOTION</div>
          <div ref={graphicsRef}>GRAPHICS</div>
        </h1>

        <div className="relative z-10">
          <img
            ref={imgRef}
            src={logoUrl}
            alt="Pill Logo"
            className="relative h-8 w-auto lg:h-12 lg:w-auto bottom-0.2 left-28 md:bottom-0.2 md:left-28 lg:bottom-1 lg:left-65 xl:bottom-1 xl:left-60 xl1 2xl:bottom-1 2xl:left-65 -rotate-7 z-10"
          />
        </div>
      </div>
    </header>
  );
}