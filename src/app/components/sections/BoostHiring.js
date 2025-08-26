import Link from "next/link";

export default function BoostHiring() {
    return (
        <section className="py-15 md:py-20 xl:py-30 font-hanken relative z-1">
            <div className="container mx-auto px-4 flex flex-col items-center gap-y-5">
                <h2 className="font-dm-serif font-normal text-[40px] leading-[140%] tracking-[-1%] text-center align-middle">Ready to boost your Hiring </h2>
                <p className="font-normal text-[20px] leading-[116%] tracking-[-2%] text-center align-middle">Lorem ipsum dolor sit amet consectetur. Auctor dapibus tristique augue congue tristique.</p>
                <Link href="/plans" className="rounded-full px-4 py-2 md:px-6 md:py-4 mt-7 text-md font-medium transition-all duration-100 ease-in-out bg-[#6567e2] text-white hover:bg-[#7173e4] active:rounded-[0.7em]">
                    Explore plans
                </Link>
            </div>
        </section>
    );
}