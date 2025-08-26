import Link from "next/link";
import Image from "next/image";

import styles from "./TextSlider.module.css";

export default function HeroSection() {
    return (
        <section className="pt-15 pb-30 md:pt-15 md:pb-30 xl:pt-30 xl:pb-40 font-hanken bg-gradient-to-b from-white from-[0%] via-white via-[80%] to-[#FFF8E8] to-[80%]">
            <div className="container mx-auto px-4 flex flex-col items-center gap-y-0 ">
                <h1 className="font-normal text-[44px] md:text-[68px] xl:text-[96px] leading-normal text-center basis-full">Making Interviews more</h1>
                <TextSlider />
                <p className="font-medium text-[12px] md:text-[16px] xl:text-[20px] text-center basis-full mt-4">Finding the <span className="font-bold italic">best</span> will no more be an Hassle with AI that interacts, <br /> analyze and provides insights on your Hires, the unbiased way</p>
                <div className="flex flex-row items-center gap-5 mt-10">
                    <Link href="/plans" className="rounded-[1em] px-4 py-2 md:px-6 md:py-4 text-md font-medium transition-all duration-300 ease-in-out bg-[#6567e2] text-white hover:bg-[#7173e4] active:rounded-[0.7em]">
                        Watch Demo
                    </Link>
                    <Link href="/pricing" className="rounded-[1em] px-6 py-4 text-md font-medium transition-all duration-300 ease-in-out border-1 border-[#CAC4D0] hover:bg-[#f1f1f1] active:rounded-[0.7em]">
                        View Pricing
                    </Link>
                </div>
                <div className="flex flex-row items-center gap-5 mt-15">
                    <a href="">
                        <img src="/icons/Bluesky-vector.svg" alt="Bluesky" />
                    </a>
                    <a href="">
                        <img src="/icons/Github-vector.svg" alt="Github" />
                    </a>
                    <a href="">
                        <img src="/icons/Inst-vector.svg" alt="Instagram" />
                    </a>
                    <a href="">
                        <img src="/icons/Twitter-vector.svg" alt="LinkedIn" />
                    </a>
                </div>
                <Image
                    src="/Dashboard-video.png" 
                    alt="Dashboard" 
                    width={1106}
                    height={700}
                    priority
                    sizes="(max-width: 1024px) 100vw, 1106px"
                    className="mt-15"
                />
            </div>
        </section>
    );
}

function TextSlider() {
  return (
    <div className="font-dm-serif relative overflow-hidden h-[110px] w-full flex items-center justify-center">
      <div className={`${styles.slider} absolute bottom-0`}>
        <h2 className="font-normal italic text-[96px] leading-[110px] text-center text-[#DC5C24]">Expressive</h2>
        <h2 className="font-normal italic text-[96px] leading-[110px] text-center text-[#DC5C24]">Intuitive</h2>
        <h2 className="font-normal italic text-[96px] leading-[110px] text-center text-[#DC5C24]">Unbiased</h2>
        <h2 className="font-normal italic text-[96px] leading-[110px] text-center text-[#DC5C24]">Fun</h2>
      </div>
    </div>
  );
}