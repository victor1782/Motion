import logoUrl from '../assets/pill.svg'; // Importación por defecto (como URL)

export default function Header() {
  return (
    <>
      <div className='bg-gray-50 static font-work-sans text-primary pt-12 font-extrabold leading-20 text-[5.625rem] text-left pl-8'>
        MOTION <br/> GRAPHICS
      </div>
      <div className="relative">
        <img
          src={logoUrl}
          alt="Logo"
          className="h-12 w-auto relative bottom-2 left-80 -rotate-7 z-10"
        />
      </div>
    </>
  );
}