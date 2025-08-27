import Image from "next/image";

export default function WhyHireRight() {
    return (
        <section className="py-15 md:py-20 xl:py-30 font-hanken bg-[#FFF8E8]">
            <div className="container mx-auto px-5 flex flex-col items-center gap-y-15 md:gap-y-20 xl:gap-y-25">
                <Image src="/icons/Logo-icon1.svg" alt="Logo" width={134} height={140} priority sizes="(max-width: 768px) 86px, 134px" />
                <h2 className="font-dm-serif font-normal italic text-[40px] leading-[100%] tracking-[-0.02em] text-center">Why HireRight?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-y-3 md:gap-y-4 xl:gap-y-6">
                        <Image src="/icons/why-hireright1.svg" alt="Feature 1" width={56} height={56} />
                        <h4 className="font-dm-serif font-normal text-[24px] leading-[120%] tracking-[-0.02em] text-[#343330]">Intuitive AI Interviews That Feel Human</h4>
                        <p className="font-medium text-[16px] leading-[130%] tracking-[-0.02em] text-[#343330CC]">Natural conversations with mentor-like AI companions. Choose from specialized personalities that adapt to each role and candidate style, creating authentic interactions that reveal true potential.</p>
                    </div>
                    <div className="flex flex-col gap-y-3 md:gap-y-4 xl:gap-y-6">
                        <Image src="/icons/why-hireright2.svg" alt="Feature 1" width={56} height={56} />
                        <h4 className="font-dm-serif font-normal text-[24px] leading-[120%] tracking-[-0.02em] text-[#343330]">Complete Cost Control & Transparency</h4>
                        <p className="font-medium text-[16px] leading-[130%] tracking-[-0.02em] text-[#343330CC]">Real-time usage tracking with smart analytics. 78% link conversion rate and intelligent alerts prevent costly waste while keeping your budget predictable.</p>
                    </div>
                    <div className="flex flex-col gap-y-3 md:gap-y-4 xl:gap-y-6">
                        <Image src="/icons/why-hireright3.svg" alt="Feature 1" width={56} height={56} />
                        <h4 className="font-dm-serif font-normal text-[24px] leading-[120%] tracking-[-0.02em] text-[#343330]">Smart Insights That Drive Better Hires</h4>
                        <p className="font-medium text-[16px] leading-[130%] tracking-[-0.02em] text-[#343330CC]">Advanced analytics reveal hiring patterns, optimal timing, and candidate success indicators. Performance scoring and interview playback turn conversations into actionable intelligence.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}