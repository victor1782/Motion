import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { SplitText } from 'gsap/SplitText';

// Registrar plugins
gsap.registerPlugin(SplitText);

interface TextAnimationReturn {
  ref: React.RefObject<HTMLDivElement>;
  timeline: gsap.core.Timeline | undefined;
}

export function useTextAnimation(delay: number = 0): TextAnimationReturn {
  const textRef = useRef<HTMLDivElement>(null);
  const animationComplete = useRef<gsap.core.Timeline>();

  useGSAP(() => {
    if (!textRef.current) return;

    const splitText = new SplitText(textRef.current, {
      type: 'chars',
      charsClass: 'char inline-block cursor-default'
    });

    // Configuración inicial
    gsap.set(splitText.chars, {
      opacity: 0,
      y: '120%',
      rotate: 10,
      scale: 0.7,
      transformOrigin: 'center bottom'
    });

    // Crear timeline para la animación
    animationComplete.current = gsap.timeline({ paused: true });

    // Animación de entrada
    animationComplete.current.to(splitText.chars, {
      opacity: 1,
      y: '0%',
      rotate: 0,
      scale: 1,
      duration: 1.2,
      ease: 'elastic.out(1, 0.7)',
      stagger: {
        each: 0.08,
        from: 'start'
      },
      delay: delay
    });

    // Iniciar la animación
    animationComplete.current.play();

    // Efecto hover
    splitText.chars.forEach((char: Element) => {
      const mouseEnterHandler = () => {
        gsap.to(char, {
          y: -10,
          scale: 1.1,
          duration: 0.2,
          ease: 'elastic.out(1, 0.5)'
        });
      };

      const mouseLeaveHandler = () => {
        gsap.to(char, {
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'elastic.out(1, 0.5)'
        });
      };

      char.addEventListener('mouseenter', mouseEnterHandler);
      char.addEventListener('mouseleave', mouseLeaveHandler);

      // Limpieza
      return () => {
        char.removeEventListener('mouseenter', mouseEnterHandler);
        char.removeEventListener('mouseleave', mouseLeaveHandler);
      };
    });

    return () => {
      splitText.revert();
    };
  }, { scope: textRef });

  return { ref: textRef, timeline: animationComplete.current };
}