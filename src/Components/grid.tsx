import { useEffect } from 'react';

const Grid = () => {
    // Puedes añadir efectos aquí si los necesitas
    useEffect(() => {
        // Efectos opcionales
    }, []);

    return (
      <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
              <p className="text-left text-base/7 font-semibold dark:text-stone-400/80">
                  <span className='text-primary'>Year: </span>
                  2025
              </p>
              <p className="text-left leading-3 text-base/7 font-semibold dark:text-stone-400/80">
                  <span className='text-primary'>Client: </span>
                      LATAM
              </p>
              <p
                className="text-left text-primary font-bold mt-2 max-w-lg text-2xl lg:text-4xl font-semibold tracking-tight text-balance">
                  Campaña · Elige viajar mejor
              </p>

              <div className="mt-8 pt-8 lg:pt-12 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 border-t-2 border-gray-200">

                   {/*Primer elemento - ocupará 2 columnas en desktop*/}
                  <div className="relative lg:col-span-2 max-lg:order-1">
                      <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                      <div
                        className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] bg-gray-200">
                          <div className="px-8 pt-8 pb-8 sm:px-10 sm:pt-10 sm:pb-0">
                              <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                  Mobile friendly
                              </p>
                              <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                                  commodo.
                              </p>
                          </div>
                          <div
                            className="@container pt-8 pb-8 px-6 grid place-items-center relative sm:px-10 sm:min-h-[20rem] lg:flex lg:items-center lg:justify-center lg:flex-1 w-full">
                              <video
                                className="rounded-sm object-cover object-center max-w-full max-h-full"
                                src="/public/video/pantalla_OOH_MASSIVA-EVM-monitor_horizontal_10seg.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                poster="posterimage.jpg"
                              />
                          </div>
                      </div>
                      <div
                        className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                  </div>

                   {/*Segundo elemento*/}
                  <div className="relative max-lg:order-2">
                      <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                      <div
                        className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] bg-violet-200">
                          <div className="px-8 pt-8 pb-6 sm:px-10 sm:pt-10 sm:pb-0">
                              <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                  Mobile friendly
                              </p>
                              <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                                  commodo.
                              </p>
                          </div>
                          <div
                            className="@container pt-8 pb-8 px-6 grid place-items-center relative sm:px-10 sm:min-h-[20rem] lg:flex lg:items-center lg:justify-center lg:flex-1 w-full">
                              <video
                                className='rounded-sm object-cover object-center max-w-full max-h-full'
                                src="/public/video/DOM Descubre Chile Casa Costanera -10seg_1.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                poster="posterimage.jpg"
                              >
                              </video>
                          </div>
                      </div>
                      <div
                        className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                  </div>

                   {/*Tercer elemento*/}
                  <div className="relative max-lg:order-3">
                      <div className="absolute"></div>
                      <div
                        className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] bg-teal-200">
                          <div className="px-8 pt-8 pb-6 sm:px-10 sm:pt-10 sm:pb-0">
                              <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                  Mobile friendly
                              </p>
                              <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                                  commodo.
                              </p>
                          </div>
                          <div
                            className="@container pt-8 pb-8 px-6 grid place-items-center relative sm:px-10 sm:min-h-[20rem] lg:flex lg:items-center lg:justify-center lg:flex-1 w-full">
                              <video
                                className='rounded-sm object-cover object-center max-w-full max-h-full'
                                src="/public/video/DOM Descubre Chile Casa Costanera -10seg_1.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                poster="posterimage.jpg"
                              >
                              </video>
                          </div>
                      </div>
                      <div
                        className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
                  </div>

                   {/*Cuarto elemento*/}
                  <div className="relative lg:row-span-1 lg:col-span-1 max-lg:order-4">
                      <div className="absolute"></div>
                      <div
                        className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] bg-blue-200">
                          <div className="px-8 pt-8 pb-6 sm:px-10 sm:pt-10 sm:pb-0">
                              <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                  Mobile friendly
                              </p>
                              <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                                  commodo.
                              </p>
                          </div>
                          <div
                            className="@container pt-8 pb-8 px-6 grid place-items-center relative sm:px-10 sm:min-h-[20rem] lg:flex lg:items-center lg:justify-center lg:flex-1 w-full">
                              <video
                                className='rounded-sm object-cover object-center max-w-full max-h-full'
                                src="/public/video/DOM Descubre Chile Casa Costanera -10seg_1.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                poster="posterimage.jpg"
                              >
                              </video>
                          </div>
                      </div>
                      <div
                        className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
                  </div>

                   {/*Quinto elemento*/}
                  <div className="relative max-lg:order-5">
                      <div className="absolute"></div>
                      <div
                        className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] bg-sky-200">
                          <div className="px-8 pt-8 pb-6 sm:px-10 sm:pt-10 sm:pb-0">
                              <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                  Mobile friendly
                              </p>
                              <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                                  commodo.
                              </p>
                          </div>
                          <div
                            className="@container pt-8 pb-8 px-6 grid place-items-center relative sm:px-10 sm:min-h-[20rem] lg:flex lg:items-center lg:justify-center lg:flex-1 w-full">
                              <video
                                className='rounded-sm object-cover object-center max-w-full max-h-full'
                                src="/public/video/DOM Descubre Chile Casa Costanera -10seg_1.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                poster="posterimage.jpg"
                              >
                              </video>
                          </div>
                      </div>
                      <div
                        className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
                  </div>

              </div>

          </div>
      </div>
    );
};

export default Grid;




