import gsap from 'gsap';

// Animaciones mejoradas para Grid con control de posición
export const animateYearElement = (element: HTMLElement | null): gsap.core.Tween | undefined => {
  if (!element) return;

  gsap.set(element, { opacity: 0, x: -20 });

  return gsap.to(element, {
    duration: 0.8,
    opacity: 1,
    x: 0,
    ease: "power2.out"
  });
};

export const animateClientElement = (element: HTMLElement | null): gsap.core.Tween | undefined => {
  if (!element) return;

  gsap.set(element, { opacity: 0, x: -20 });

  return gsap.to(element, {
    duration: 0.8,
    opacity: 1,
    x: 0,
    ease: "power2.out"
  });
};

export const animateTitleElement = (element: HTMLElement | null): gsap.core.Tween | undefined => {
  if (!element) return;

  gsap.set(element, { opacity: 0, y: 20 });

  return gsap.to(element, {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "elastic.out(1, 1.5)"
  });
};

// Animaciones para Header con control de posición
export const animateMotionText = (element: HTMLElement | null): gsap.core.Tween | undefined => {
  if (!element) return;

  gsap.set(element, { opacity: 0, y: 30 });

  return gsap.to(element, {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power3.out"
  });
};

export const animateGraphicsText = (element: HTMLElement | null): gsap.core.Tween | undefined => {
  if (!element) return;

  gsap.set(element, { opacity: 0, y: 30 });

  return gsap.to(element, {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power3.out"
  });
};

export const animateLogo = (element: HTMLElement | null): gsap.core.Tween | undefined => {
  if (!element) return;

  gsap.set(element, { opacity: 0, scale: 0.8, rotation: -15 });

  return gsap.to(element, {
    duration: 0.8,
    opacity: 1,
    scale: 1,
    rotation: -7,
    ease: "back.out(1.7)"
  });
};

// Secuencias de animación mejoradas
export const animateHeaderElements = (
  motionElement: HTMLElement | null,
  graphicsElement: HTMLElement | null,
  logoElement: HTMLElement | null
): gsap.core.Timeline => {
  const tl = gsap.timeline();

  if (motionElement) {
    tl.add(animateMotionText(motionElement));
  }
  if (graphicsElement) {
    tl.add(animateGraphicsText(graphicsElement), "+=0.3"); // Secuencia después de 0.3s del final de la anterior
  }
  if (logoElement) {
    tl.add(animateLogo(logoElement), "+=0.4"); // Secuencia después de 0.4s del final de la anterior
  }

  return tl;
};

export const animateAllTextElements = (
  yearElement: HTMLElement | null,
  clientElement: HTMLElement | null,
  titleElement: HTMLElement | null
): gsap.core.Timeline => {
  const tl = gsap.timeline();

  if (yearElement) {
    tl.add(animateYearElement(yearElement));
  }
  if (clientElement) {
    tl.add(animateClientElement(clientElement), "+=0.3"); // Secuencia después de 0.8s del final de la anterior
  }
  if (titleElement) {
    tl.add(animateTitleElement(titleElement), "+=0.6"); // Secuencia después de 0.6s del final de la anterior
  }

  return tl;
};

// Coordinación principal con posición absoluta
export const animateAllElementsSequentially = (
  headerElements: {
    motionElement: HTMLElement | null;
    graphicsElement: HTMLElement | null;
    logoElement: HTMLElement | null;
  },
  gridElements: {
    yearElement: HTMLElement | null;
    clientElement: HTMLElement | null;
    titleElement: HTMLElement | null;
  }
): gsap.core.Timeline => {
  const masterTL = gsap.timeline();

  // Animación del Header completa primero
  const headerTL = animateHeaderElements(
    headerElements.motionElement,
    headerElements.graphicsElement,
    headerElements.logoElement
  );

  masterTL.add(headerTL);

  // Animación del Grid después de que termine el Header
  const gridTL = animateAllTextElements(
    gridElements.yearElement,
    gridElements.clientElement,
    gridElements.titleElement
  );

  masterTL.add(gridTL, "+=0.5"); // Espera 0.5s después de que termine el header

  return masterTL;
};

// Función de limpieza mejorada
export const cleanupAnimations = (): void => {
  gsap.globalTimeline.clear();
};