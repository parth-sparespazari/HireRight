import Pricing from "@/app/components/sections/Pricing.js";

export default function PricingPage() {
  return (
    <section className="pt-15 pb-20 md:pt-22 md:pb-30 xl:pt-30 xl:pb-40 font-hanken bg-[#F5EFE3]">
        <div className="container mx-auto px-4 sm:px-5 flex flex-col items-center gap-y-0 ">
            <h1 className="font-dm-serif italic font-normal text-[36px] md:text-[48px] xl:text-[72px] leading-none text-center basis-full">Title for Pricing</h1>
            <p className="font-medium text-[12px] md:text-[16px] xl:text-[20px] text-center basis-full mt-4">Finding the <span className="font-bold italic">best</span> will no more be an Hassle with AI that interacts, <br /> analyze and provides insights on your Hires, the unbiased way</p>
            <Pricing />
        </div>
    </section>
  );
}