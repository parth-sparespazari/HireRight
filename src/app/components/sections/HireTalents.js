import Image from "next/image";

export default function HireTalents() {
    return (
        <section className="py-30 font-hanken bg-gradient-to-b from-[#FFF8E8] to-white">
            <div className="container mx-auto flex flex-col gap-y-15">
                <div className="flex flex-col gap-y-5">
                    <h2 className="font-dm-serif font-normal text-[64px] leading-[140%] tracking-[-0.01em]">
                        Hire Talents. <span className="text-[#D5621B] italic">Hassle free</span>
                    </h2>
                    <p className="font-normal text-[24px] leading-[116%] tracking-[-0.02em] text-[#231A16A3]">Transform your recruitment with AI companions that conduct natural, <br /> mentor-like interviews while giving you complete cost control.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                    <div className="flex flex-col gap-y-10 md:col-span-2">
                        <div className="flex flex-col gap-y-3">
                            <h4 className="font-dm-serif font-normal text-[24px] leading-[140%] tracking-[0em] text-[#343330]">Interview Management</h4>
                            <p className="font-normal text-[16px] leading-[140%] tracking-[-0.02em] text-[#231A16A3]">Streamline your entire interview process from a centralized dashboard. Create custom interview templates, add specific questions and AI companion preferences, then instantly generate shareable invite links for candidates. Track every interview from creation to completion with real-time status updates, performance scores, and comprehensive analytics.</p>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <h4 className="font-dm-serif font-normal text-[24px] leading-[140%] tracking-[0em] text-[#343330]">Candidate Profiles</h4>
                            <p className="font-normal text-[16px] leading-[140%] tracking-[-0.02em] text-[#231A16A3]">Manage your entire hiring pipeline through one powerful dashboard. Create custom interviews, invite candidates with one-click, then track their complete journey with detailed profiles, AI-generated reviews, and hiring recommendations. Every candidate interaction, performance score, and AI insight is centralized for smarter decision-making.</p>
                        </div>
                    </div>
                    <div className="md:col-span-3 flex justify-end">
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