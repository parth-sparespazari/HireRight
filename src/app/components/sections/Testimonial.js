import Image from "next/image";

export default function Testimonial() {
    return (
        <section className="relative py-30 font-hanken">
            <div className="absolute inset-0 flex justify-center items-center z-0 top-20">
                <Image src="/icons/testimonial_bg.svg"
                    alt="Hire talent"
                    width={1034}
                    height={941}
                    sizes="(max-width: 1024px) 100vw, 1034px"
                />
            </div>
            <div className="relative z-10 container mx-auto flex flex-col items-center gap-y-5">
                <h2 className="font-dm-serif font-normal text-[64px] leading-[130%] tracking-[-0.01em] text-center text-[#343330]">Testimonial</h2>
                <p className="font-normal text-[24px] leading-[116%] tracking-[-0.02em] text-center align-middle text-[#231A16A3]">Lorem ipsum dolor sit amet consectetur. Auctor dapibus tristique augue congue tristique.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-y-12 lg:gap-x-16 mt-25 w-full items-start">
                    
                    <div className="flex justify-center">
                        <div className="max-w-[477px] rounded-[20px] gap-6 border-1 border-[#58240E3D] flex flex-col bg-[#fffbf8] py-5 px-8">
                            <p className="font-medium text-md leading-[120%] tracking-[-0.1px] align-middle">Lorem ipsum dolor sit amet consectetur. Pulvinar eget et in gravida mi. A ullamcorper pulvinar scelerisque egestas leo mauris cras ornare.</p>
                            <div className="flex gap-3 items-center">
                                <div className="w-12 h-12 border-1 border-[#58240E3D] rounded-full bg-white"></div>
                                <div className="flex flex-col gap-1 grow">
                                    <h4 className="font-dm-serif font-normal text-[24px] leading-[1.2] tracking-[-0.2px] align-middle">Dr. Lorem ipsum</h4>
                                    <span className="font-medium text-[14px] leading-[120%] tracking-[-0.2px] align-middle">Founder, Successful startup</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="max-w-[477px] rounded-[20px] gap-6 border-1 border-[#58240E3D] flex flex-col bg-[#fffbf8] py-5 px-8 mt-10">
                            <p className="font-medium text-md leading-[120%] tracking-[-0.1px] align-middle">Lorem ipsum dolor sit amet consectetur. Pulvinar eget et in gravida mi. A ullamcorper pulvinar scelerisque egestas leo mauris cras ornare.</p>
                            <div className="flex gap-3 items-center">
                                <div className="w-12 h-12 border-1 border-[#58240E3D] rounded-full bg-white"></div>
                                <div className="flex flex-col gap-1 grow">
                                    <h4 className="font-dm-serif font-normal text-[24px] leading-[1.2] tracking-[-0.2px] align-middle">Dr. Lorem ipsum</h4>
                                    <span className="font-medium text-[14px] leading-[120%] tracking-[-0.2px] align-middle">Founder, Successful startup</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2 flex justify-center mt-4 md:mt-0">
                        <div className="max-w-[477px] rounded-[20px] gap-6 border-1 border-[#58240E3D] flex flex-col bg-[#fffbf8] py-5 px-8">
                            <p className="font-medium text-md leading-[120%] tracking-[-0.1px] align-middle">Lorem ipsum dolor sit amet consectetur. Pulvinar eget et in gravida mi. A ullamcorper pulvinar scelerisque egestas leo mauris cras ornare.</p>
                            <div className="flex gap-3 items-center">
                                <div className="w-12 h-12 border-1 border-[#58240E3D] rounded-full bg-white"></div>
                                <div className="flex flex-col gap-1 grow">
                                    <h4 className="font-dm-serif font-normal text-[24px] leading-[1.2] tracking-[-0.2px] align-middle">Dr. Lorem ipsum</h4>
                                    <span className="font-medium text-[14px] leading-[120%] tracking-[-0.2px] align-middle">Founder, Successful startup</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            
        </section>
    );
}