import Image from "next/image";

export default function HireTalents() {
    return (
        <section className="py-15 md:py-20 xl:py-30 font-hanken bg-gradient-to-b from-[#FFF8E8] to-white">
            <div className="container mx-auto px-4 sm:px-5">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-10 items-center">
                    <div className="flex flex-col gap-y-5 lg:col-span-5 order-2 lg:order-1">
                        <h2 className="font-dm-serif font-normal text-[32px] md:text-[48px] xl:text-[64px] leading-[115%] xl:leading-[140%] tracking-[-0.01em]">
                            Hire Talents. <span className="text-[#D5621B] italic">Hassle free</span>
                        </h2>
                        <p className="font-normal text-[14px] md:text-[18px] xl:text-[24px] leading-[110%] xl:leading-[116%] tracking-[0.02em] md:tracking-[-0.02em] text-[#231A16A3]">Transform your recruitment with AI companions that conduct natural, <br /> mentor-like interviews while giving you complete cost control.</p>
                    </div>
                    <div className="flex flex-col gap-y-7 md:gap-y-10 lg:col-span-3 xl:col-span-2 order-3 lg:order-2">
                        <div className="flex flex-col gap-y-3">
                            <h4 className="font-dm-serif font-normal text-[24px] leading-[140%] tracking-[0em] text-[#343330]">Interview Management</h4>
                            <p className="font-normal text-[12px] md:text-[16px] leading-[140%] tracking-[0.02em] md:tracking-[-0.02em] text-[#231A16A3]">Streamline your entire interview process from a centralized dashboard. Create custom interview templates, add specific questions and AI companion preferences, then instantly generate shareable invite links for candidates. Track every interview from creation to completion with real-time status updates, performance scores, and comprehensive analytics.</p>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <h4 className="font-dm-serif font-normal text-[24px] leading-[140%] tracking-[0em] text-[#343330]">Candidate Profiles</h4>
                            <p className="font-normal text-[12px] md:text-[16px] leading-[140%] tracking-[0.02em] md:tracking-[-0.02em] text-[#231A16A3]">Manage your entire hiring pipeline through one powerful dashboard. Create custom interviews, invite candidates with one-click, then track their complete journey with detailed profiles, AI-generated reviews, and hiring recommendations. Every candidate interaction, performance score, and AI insight is centralized for smarter decision-making.</p>
                        </div>
                    </div>
                    <div className="flex justify-start lg:justify-end lg:col-span-2 xl:col-span-3 order-1 lg:order-3">
                        <Image src="/Hire_talent.png"
                            alt="Hire talent"
                            width={664}
                            height={420}
                            sizes="(max-width: 640px) 100vw, 664px"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}