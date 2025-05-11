
export default function Grid() {
    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <p className="text-left text-base/7 font-semibold dark:text-stone-400/80">
                    <span className='text-primary'>Year: </span>
                    2025</p>
                <p className="text-left leading-3 text-base/7 font-semibold dark:text-stone-400/80">
                    <span className='text-primary'>Client: </span>
                    Nombre del cliente</p>
                <p
                  className="text-left text-primary font-bold mt-2 max-w-lg text-2xl lg:text-4xl font-semibold tracking-tight text-balance">
                    Nombre Medio- Campaña
                </p>
                <div
                  className="mt-8 pt-8 lg:pt-12 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 border-t-2 border-gray-200">
                    {/* Primer elemento - ocupará 2 columnas en desktop */}
                    <div className="relative lg:col-span-2 max-lg:order-1">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                        <div
                          className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] bg-teal-200">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    Mobile friendly
                                </p>
                                <p className="mx-auto mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                                    commodo.
                                </p>
                            </div>
                            <div
                              className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                <div
                                  className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                    <img
                                      className="size-full object-cover object-top"
                                      src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                                      alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                          className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                    </div>

                    {/* Segundo elemento */}
                    <div className="relative max-lg:order-2">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                        <div
                          className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] bg-violet-200">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p
                                  className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                                </p>
                            </div>
                            <div
                              className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                <img
                                  className="w-full max-lg:max-w-xs"
                                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                                  alt=""
                                />
                            </div>
                        </div>
                        <div
                          className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                    </div>

                    {/* Tercer elemento */}
                    <div className="relative max-lg:order-4">
                        <div className="absolute inset-px rounded-lg bg-white"></div>
                        <div
                          className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] bg-orange-200">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p
                                  className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                                </p>
                            </div>
                            <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                                <img
                                  className="h-[min(152px,40cqw)] object-cover"
                                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                                  alt=""
                                />
                            </div>
                        </div>
                        <div
                          className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
                    </div>

                    {/* Cuarto elemento - ocupará 2 filas en desktop */}
                    <div className="relative lg:row-span-1 max-lg:order-3">
                        <div
                          className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        <div
                          className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)] bg-rose-200">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    Powerful APIs
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales
                                    gravida.
                                </p>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow">
                                <div
                                  className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                        <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                            <div
                                              className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                                                NotificationSetting.jsx
                                            </div>
                                            <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                                        </div>
                                    </div>
                                    <div className="px-6 pt-6 pb-14"> Your code example</div>
                                </div>
                            </div>
                        </div>
                        <div
                          className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    </div>

                    {/* Quinto elemento */}
                    <div className="relative max-lg:order-4">
                        <div className="absolute inset-px rounded-lg bg-white"></div>
                        <div
                          className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] bg-orange-200">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p
                                  className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                                </p>
                            </div>
                            <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                                <img
                                  className="h-[min(152px,40cqw)] object-cover"
                                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                                  alt=""
                                />
                            </div>
                        </div>
                        <div
                          className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
