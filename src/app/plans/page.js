import Image from "next/image";

export default function PlansPage() {
  return (
    <section className="pt-15 pb-20 md:pt-22 md:pb-30 xl:pt-30 xl:pb-40 font-hanken bg-[#F5EFE3]">
        <div className="container mx-auto px-4 sm:px-5 flex flex-col items-center gap-y-0 ">
            <h1 className="font-dm-serif font-normal text-[40px] md:text-[52px] xl:text-[72px] leading-[100%] tracking-[0] text-center basis-full">Explore new Possibilities</h1>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 auto-rows-auto gap-6 mt-16">

              <div className="lg:col-span-3 lg:row-span-2 bg-[#E8B58F] rounded-[2em] px-4 py-4 md:px-10 md:py-10">
                <div className="flex flex-col gap-5">
                  <h4 className="font-dm-serif font-normal text-[28px] leading-[120%] text-[#83400E]">AI Companions for your <br /> Interviews</h4>
                  <Image src="/explore_grid_1.png" alt="Explore" width={420} height={161} sizes="(max-width: 480px) 100%, 420px" priority className="w-full" />
                  <p className="font-medium text-[14px] sm:text-[16px] leading-[120%] text-[#733916] max-w-[400px]">Choose from our diverse cast of AI interviewers, each with unique expertise and communication approaches - making every interview feel natural and engaging.</p>
                </div>
              </div>

              <div className="lg:col-span-4 lg:row-span-1 bg-[#A5470D] rounded-[2em] px-4 py-4 md:px-10 md:py-10">
                <div className="flex flex-col gap-5">
                  <div className="flex self-end">
                    <div className="relative transform sm:translate-x-0 md:translate-x-6 mt-10 md:scale-110">
                      <Image src="/explore_grid_2_1.png" alt="Explore" width={601} height={78} sizes="(max-width: 640px) 100%, 601px" priority className="absolute bottom-4 left-1 z-1" />
                      <Image src="/explore_grid_2_2.png" alt="Explore" width={589} height={77} sizes="(max-width: 640px) 100%, 589px" priority className="" />
                    </div>
                  </div>
                  <h4 className="font-dm-serif font-normal text-[20px] sm:text-[24px] leading-[110%] text-[#F5F4F3]">Complete Visibility, Complete Control</h4>
                  <p className="font-medium text-[14px] sm:text-[16px] leading-[120%] text-[#E3DAD6B8] max-w-[400px]">Transform how you manage your interview budget with real-time usage tracking and intelligent spending insights.</p>
                </div>
              </div>

              <div className="lg:col-span-3 lg:row-span-1 lg:row-start-3 bg-[#F2C984] rounded-[2em] px-4 py-4 md:px-10 md:py-10">
                <div className="flex flex-col gap-5">
                  <div className="flex gap-6 items-center">
                    <Image src="/explore_grid_3.png" alt="Explore" width={82} height={82} sizes="(max-width: 480px) 70px, 82px" priority />
                    <button className="flex items-center gap-3 border-1 border-[#0C0C0EA3] rounded-full px-6 py-3">
                      <Image src="/icons/plus_icn.svg" alt="Plus" width={20} height={22} priority />
                      <span className="font-medium text-[16px] leading-[120%] text-[#0C0C0EA3]">Angela</span>
                    </button>
                  </div>
                  <h4 className="font-dm-serif font-normal text-[20px] sm:text-[24px] leading-[110%] text-[#5A3D0B]">Conversations That Feel Human</h4>
                  <p className="font-medium text-[14px] sm:text-[16px] leading-[120%] text-[#795312] max-w-[400px]">Dynamic and Real-time responses, follow-up questions, and adaptive conversations that evolve based on candidate answers.</p>
                </div>
              </div>

              <div className="lg:col-span-2 lg:row-span-2 bg-[#6567E2] rounded-[2em] px-4 py-4 md:px-6 md:py-10">
                <div className="flex flex-col gap-5">
                  <div className="transform translate-y-[-2em] md:translate-y-[-3em]">
                    <Image src="/explore_grid_4.png" alt="Explore" width={282} height={193} priority className="w-full" />
                  </div>
                  <h4 className="font-dm-serif font-normal text-[20px] leading-[110%] text-[#FFFFFF]">Every Dollar Justified, Every Decision Data-Driven</h4>
                  <p className="font-medium text-[14px] sm:text-[16px] leading-[120%] text-[#FEFEFECC] max-w-[400px]">Our comprehensive analytics show exactly how your interview investment translates to hiring success.</p>
                  <ul className="list-[square] list-inside pl-2 font-medium text-[14px] sm:text-[16px] leading-[120%] text-[#FEFEFECC]">
                      <li>Cost-Per-Quality-Hire</li>
                      <li>Channel Performance</li>
                      <li>Predictive Insights</li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-2 lg:row-span-2 bg-[#F5A26F] rounded-[2em] px-4 py-4 md:px-6 md:py-10 relative ring-2 ring-[#FFC815]">
                <div className="flex flex-col h-full gap-5">
                  <span className="absolute flex items-center gap-2 bg-[#FFC815] rounded-xl px-3 py-2 top-[-8px] right-0">
                    <Image src="/icons/plus_icn2.svg" alt="Explore" width={22} height={22} priority /> Enterprise
                  </span>
                  <Image src="/explore_grid_5.png" alt="Explore" width={269} height={150} sizes="(max-width: 480px) 100%, 269px" priority className="mt-8 w-full" />
                  <h4 className="font-dm-serif font-normal text-[20px] sm:text-[24px] leading-[110%] text-[#8C4012] mt-auto">Built for Scale, Designed for Growth</h4>
                  <p className="font-medium text-[14px] sm:text-[16px] leading-[120%] text-[#996124] max-w-[400px]">From startup to enterprise, our platform grows with you. </p>
                </div>
              </div>

            </div>

        </div>
    </section>
  );
}