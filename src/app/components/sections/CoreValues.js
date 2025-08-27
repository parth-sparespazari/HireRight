import Image from "next/image";

export default function CoreValues() {
    return (
        <section className="py-15 md:py-20 xl:py-30 font-hanken">
            <div className="container mx-auto px-5 max-w-[1184] flex flex-col items-center gap-y-5">
                <h2 className="font-dm-serif font-normal text-[32px] md:text-[48px] xl:text-[64px] leading-[130%] tracking-[-0.01em] text-center text-[#343330]">Our Core Value</h2>
                <p className="font-normal text-[14px] md:text-[18px] xl:text-[24px] leading-[116%] tracking-[-0.02em] text-center align-middle text-[#231A16A3]">Lorem ipsum dolor sit amet consectetur. Auctor dapibus tristique augue congue tristique.</p>
                <div className="flex flex-wrap w-full items-center justify-between gap-x-2 mt-10">
                    <input type="radio" id="tab1" name="tab" className="hidden peer/tab1" defaultChecked />
                    <label
                        htmlFor="tab1"
                        className="cursor-pointer font-medium py-4 xl:py-6 rounded-tl-[2em] rounded-bl-[2em] rounded-tr-[0.7em] rounded-br-[0.7em] text-[#370D00] text-center grow transition-all duration-300 ease-in-out bg-[#FFDBCECC] hover:bg-[#f1d5ce] hover:rounded-tr-[1em] hover:rounded-br-[1em] peer-checked/tab1:bg-[#71361d] peer-checked/tab1:text-white peer-checked/tab1:rounded-[2em] peer-checked/tab1:hover:rounded-[2em] peer-checked/tab1:hover:bg-[#6f687c]"
                    >
                        <span className="flex md:hidden justify-center">
                            <Image src="/icons/Core_Icon1.svg"
                                alt="Simple yet Powerful"
                                width={20}
                                height={20}
                            />
                        </span>
                        <span className="hidden md:block text-xl xl:text-2xl leading-[1.2] tracking-normal align-middle">Simple yet Powerful</span>
                    </label>

                    <input type="radio" id="tab2" name="tab" className="hidden peer/tab2" />
                    <label
                        htmlFor="tab2"
                        className="cursor-pointer font-medium py-4 xl:py-6 rounded-[0.7em] text-[#370D00] text-center grow transition-all duration-300 ease-in-out bg-[#FFDBCECC] hover:bg-[#f1d5ce] hover:rounded-[0.7em] md:rounded-[1em] peer-checked/tab2:bg-[#71361d] peer-checked/tab2:text-white peer-checked/tab2:rounded-[2em] peer-checked/tab2:hover:rounded-[2em] peer-checked/tab2:hover:bg-[#6f687c]"
                    >
                        <span className="flex md:hidden justify-center">
                            <Image src="/icons/Core_Icon2.svg"
                                alt="Intuitive to use"
                                width={20}
                                height={20}
                            />
                        </span>
                        <span className="hidden md:block text-xl xl:text-2xl leading-[1.2] tracking-normal align-middle">Intuitive to use</span>
                    </label>

                    <input type="radio" id="tab3" name="tab" className="hidden peer/tab3" />
                    <label
                        htmlFor="tab3"
                        className="cursor-pointer font-medium py-4 xl:py-6 rounded-tl-[0.7em] rounded-bl-[0.7em] rounded-tr-[2em] rounded-br-[2em] text-[#370D00] text-center grow transition-all duration-300 ease-in-out bg-[#FFDBCECC] hover:bg-[#f1d5ce] hover:rounded-tl-[1em] hover:rounded-bl-[1em] peer-checked/tab3:bg-[#71361d] peer-checked/tab3:text-white peer-checked/tab3:rounded-[2em] peer-checked/tab3:hover:rounded-[2em] peer-checked/tab3:hover:bg-[#6f687c]"
                    >
                        <span className="flex md:hidden justify-center">
                            <Image src="/icons/Core_Icon3.svg"
                                alt="Interactive back and forth"
                                width={20}
                                height={20}
                            />
                        </span>
                        <span className="hidden md:block text-xl xl:text-2xl leading-[1.2] tracking-normal align-middle">Interactive back and forth</span>
                    </label>

                    <div className="hidden peer-checked/tab1:block w-full mt-10">
                        <Image src="/Video_reel.svg"
                            alt="Hire talent"
                            width={1184}
                            height={740}
                            sizes="(max-width: 1024px) 100vw, 1184px"
                        />
                    </div>
                    <div className="hidden peer-checked/tab2:block w-full mt-10">
                        <Image src="/Video_reel.svg"
                            alt="Hire talent"
                            width={1184}
                            height={740}
                            sizes="(max-width: 1024px) 100vw, 1184px"
                        />
                    </div>
                    <div className="hidden peer-checked/tab3:block w-full mt-10">
                        <Image src="/Video_reel.svg"
                            alt="Hire talent"
                            width={1184}
                            height={740}
                            sizes="(max-width: 1024px) 100vw, 1184px"
                        />
                    </div>
                </div>
            </div>
            
        </section>
    );
}