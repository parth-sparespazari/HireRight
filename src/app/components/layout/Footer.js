import Image from "next/image";

export default function Footer() {
    return (
        <footer className="pt-20 pb-10 font-hanken bg-[#101316]">
            <div className="flex flex-col gap-y-15 px-5 w-full mx-auto 2xl:max-w-[1636px]">
                <Image src="/Footer_logo.svg" alt="Logo" width={986} height={42} sizes="(max-width: 980px) 100vw, 986px" />
                <hr className="border-t border-[#E8E5E4A3]" />

                <div className="flex flex-wrap justify-between gap-15 md:gap-20 xl:gap-25">
                    <div className="flex flex-col gap-5">
                        <h4 className="font-semibold text-base leading-[110%] tracking-normal align-middle text-[#FAFAFACC]">About Us</h4>
                        <a href="" className="font-normal text-base leading-[110%] tracking-normal align-middle text-[#FAFAFAA3]">Contact</a>
                        <a href="" className="font-normal text-base leading-[110%] tracking-normal align-middle text-[#FAFAFAA3]">Careers</a>
                        <a href="" className="font-normal text-base leading-[110%] tracking-normal align-middle text-[#FAFAFAA3]">Our Team</a>
                        <a href="" className="font-normal text-base leading-[110%] tracking-normal align-middle text-[#FAFAFAA3]">Press</a>
                    </div>
                    <div className="flex flex-col gap-5 mr-auto">
                        <h4 className="font-semibold text-base leading-[110%] tracking-normal align-middle text-[#FAFAFACC]">Resources</h4>
                        <a href="" className="font-normal text-base leading-[110%] tracking-normal align-middle text-[#FAFAFAA3]">Why HireRight?</a>
                        <a href="" className="font-normal text-base leading-[110%] tracking-normal align-middle text-[#FAFAFAA3]">Features</a>
                        <a href="" className="font-normal text-base leading-[110%] tracking-normal align-middle text-[#FAFAFAA3]">Blog</a>
                        <a href="" className="font-normal text-base leading-[110%] tracking-normal align-middle text-[#FAFAFAA3]">Help & Support</a>
                    </div>
                    <div className="flex flex-row items-start gap-2 w-full md:w-auto">
                        <a href="">
                            <img src="/icons/Bluesky-vector-ft.svg" alt="Bluesky" />
                        </a>
                        <a href="">
                            <img src="/icons/Github-vector-ft.svg" alt="Github" />
                        </a>
                        <a href="">
                            <img src="/icons/Inst-vector-ft.svg" alt="Instagram" />
                        </a>
                        <a href="">
                            <img src="/icons/Twitter-vector-ft.svg" alt="LinkedIn" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-wrap justify-between gap-10">
                    <div className="flex flex-wrap flex-col md:flex-row justify-between gap-7 md:gap-10">
                        <a href="" className="font-normal text-base leading-[110%] tracking-normal align-middle text-[#FAFAFAA3]">Privacy Policy</a>
                        <a href="" className="font-normal text-base leading-[110%] tracking-normal align-middle text-[#FAFAFAA3]">Terms of Service</a>
                        <a href="" className="font-normal text-base leading-[110%] tracking-normal align-middle text-[#FAFAFAA3]">Cookie Policy</a>
                    </div>
                    <div className="flex flex-wrap gap-5 md:gap-10 w-full lg:w-auto">
                        <p className="font-normal text-base leading-[110%] tracking-normal align-middle text-[#FAFAFAA3]">2025 HireRight</p>
                        <p className="font-normal text-base leading-[110%] tracking-normal align-middle text-[#FAFAFAA3]">Designed & Developed in Singapore</p>
                    </div>
                </div>

            </div>
        </footer>
    );
}