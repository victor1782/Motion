import gsap from 'gsap';

export const animateYearElement = (element: HTMLElement | null) => {
  if (!element) return;

  gsap.from(element, {
    duration: 0.8,
    opacity: 0,
    x: -20,
    ease: "power2.out",
    delay: 0.2
  });
};

export const animateClientElement = (element: HTMLElement | null) => {
  if (!element) return;

  gsap.from(element, {
    duration: 0.8,
    opacity: 0,
    x: -20,
    ease: "power2.out",
    delay: 0.6
  });
};

export const animateTitleElement = (element: HTMLElement | null) => {
  if (!element) return;

  gsap.from(element, {
    duration: 1,
    opacity: 0,
    y: 20,
    ease: "elastic.out(1, 0.5)",
    delay: 1.5
  });
};

// Opcional: Animación combinada para todos los elementos
export const animateAllTextElements = (
  yearElement: HTMLElement | null,
  clientElement: HTMLElement | null,
  titleElement: HTMLElement | null
) => {
  animateYearElement(yearElement);
  animateClientElement(clientElement);
  animateTitleElement(titleElement);
};