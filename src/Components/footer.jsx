import { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo y texto */}
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-gray-800">
              <a href="#">
                <img src="/public/img/bick_footer.svg" alt="logotipo footer"/>
              </a>
            </div>
            <p className="mt-2 text-gray-600 max-w-md">
            </p>
          </div>
          
          <div className="w-lg px-20 sm:px-0 rotate-355">
            <img src="/img/Think%20and%20Create.svg" alt="concepto footer"/>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 color-primary text-center lg:text-left border-t border-gray-200 text-primary">
          <p>Copyright © {new Date().getFullYear()}. Todos los derechos reservados.</p>
        </div>

        {/* Botón para subir */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 p-3 bg-primary text-white rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:bg-primary-dark hover:scale-110 ${
            showScrollButton
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"/>
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;