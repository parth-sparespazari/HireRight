import Link from "next/link";
import Image from "next/image";

import styles from "./TextSlider.module.css";

export default function HeroSection() {
    return (
        <>
        <section className="pt-30 pb-40 font-hanken bg-gradient-to-b from-white from-[0%] via-white via-[80%] to-[#FFF8E8] to-[80%]">
            <div className="container mx-auto px-4 flex flex-col items-center gap-y-0 ">
                <h1 className="font-normal text-[96px] leading-normal text-centerbasis-full">Making Interviews more</h1>
                <h2 className="font-dm-serif font-normal italic text-[96px] text-centerbasis-full text-[#DC5C24]">Fun</h2>
                {/* <TextSlider /> */}
                <p className="font-medium text-[20px] text-centerbasis-full">Finding the <span className="font-bold italic">best</span> will no more be an Hassle with AI that interacts, <br /> analyze and provides insights on your Hires, the unbiased way</p>
                <div className="flex flex-row items-center gap-5 mt-10">
                    <Link href="/plans" className="rounded-[1em] px-6 py-4 text-md font-medium transition-all duration-300 ease-in-out bg-[#6567e2] text-white hover:bg-[#7173e4] active:rounded-[0.7em]">
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
        </>
    );
}


// ...existing code...
function TextSlider() {
  return (
    <div className="relative h-10 overflow-hidden">
      <div className={styles.slider}>
        <div className={`${styles.slide} h-10 flex items-center justify-center text-xl font-bold`}>Text 1</div>
        <div className={`${styles.slide} h-10 flex items-center justify-center text-xl font-bold`}>Text 2</div>
        <div className={`${styles.slide} h-10 flex items-center justify-center text-xl font-bold`}>Text 3</div>
        <div className={`${styles.slide} h-10 flex items-center justify-center text-xl font-bold`}>Text 4</div>
      </div>
    </div>
  );
}
// ...existing code...