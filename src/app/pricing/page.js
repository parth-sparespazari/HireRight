export default function PricingPage() {
  return (
    <section className="pt-15 pb-20 md:pt-22 md:pb-30 xl:pt-30 xl:pb-40 font-hanken bg-[#F5EFE3]">
        <div className="container mx-auto px-4 sm:px-5 flex flex-col items-center gap-y-0 ">
            <h1 className="font-dm-serif italic font-normal text-[36px] md:text-[48px] xl:text-[72px] leading-none text-center basis-full">Title for Pricing</h1>
            <p className="font-medium text-[12px] md:text-[16px] xl:text-[20px] text-center basis-full mt-4">Finding the <span className="font-bold italic">best</span> will no more be an Hassle with AI that interacts, <br /> analyze and provides insights on your Hires, the unbiased way</p>
            <div className="flex flex-wrap w-full justify-center items-center gap-5 mt-10">
                <a href="" className="rounded-[0.7em] md:rounded-[1em] px-4 py-2 md:px-6 md:py-3 text-md font-medium transition-all duration-300 ease-in-out bg-[#6567e2] text-white hover:bg-[#7173e4] active:rounded-[0.7em]">
                    Yearly
                </a>
                <a href="" className="rounded-[0.7em] md:rounded-[1em] px-4 py-2 md:px-6 md:py-3 text-md font-medium transition-all duration-300 ease-in-out border-1 border-[#CAC4D0] hover:bg-[#f1f1f1] active:rounded-[0.7em]">
                    Monthly
                </a>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16 items-end">
                    <div className="flex flex-col gap-y-3 md:gap-y-4 xl:gap-y-10 bg-white rounded-[1em] p-8">
                      <div>
                        <h4 className="font-semibold text-[20px] md:text-[24px] leading-[100%] tracking-[-0.002em] mb-2">Starter</h4>
                        <p className="font-medium text-[14px] md:text-[16px] leading-[136%] tracking-[-0.002em] text-[#252525A3]">In-depth assessments, Insightful, Conversational Interviews</p>
                      </div>
                      <div>
                        <h2 className="font-semibold text-[28px] md:text-[36px] xl:text-[40px] leading-[100%] tracking-[-0.002em] mb-2">$0.55</h2>
                        <p className="font-semibold text-[14px] md:text-[16px] leading-[100%] tracking-[-0.002em]">per minute</p>
                      </div>
                      <div>
                        <a href="" className="rounded-[0.7em] md:rounded-[1em] px-4 py-2 md:px-6 md:py-3 w-full inline-block text-center text-md font-medium bg-[#D5621B] text-white active:rounded-[0.7em] transition-all duration-300 ease-in-out">Get Started</a>
                      </div>
                      <div>
                        <ul className="list-[square] list-inside pl-2 font-medium text-[14px] leading-[136%] tracking-[-0.002em] text-[#252525CC]">
                          <li>Accurate cheating detection</li>
                          <li>Video, transcript & Interview Timeline</li>
                          <li>Fully Customizable</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col ring-3 ring-[#6567E2] bg-[#6567E2] rounded-[1em]">
                      <p className="font-semibold text-[14px] leading-[100%] tracking-[-0.002em] text-center text-white py-4">Recommended</p>
                      <div className="flex flex-col gap-y-3 md:gap-y-4 xl:gap-y-10 bg-white rounded-[1em] p-8">
                        <div>
                          <h4 className="font-semibold text-[20px] md:text-[24px] leading-[100%] tracking-[-0.002em] mb-2">Professional</h4>
                          <p className="font-medium text-[14px] md:text-[16px] leading-[136%] tracking-[-0.002em] text-[#252525A3]">In-depth assessments, Insightful, Conversational Interviews</p>
                        </div>
                        <div>
                          <h2 className="font-semibold text-[28px] md:text-[36px] xl:text-[40px] leading-[100%] tracking-[-0.002em] mb-2">$0.55</h2>
                          <p className="font-semibold text-[14px] md:text-[16px] leading-[100%] tracking-[-0.002em]">per minute</p>
                        </div>
                        <div>
                          <a href="" className="rounded-[0.7em] md:rounded-[1em] px-4 py-2 md:px-6 md:py-3 w-full inline-block text-center text-md font-medium bg-[#D5621B] text-white active:rounded-[0.7em] transition-all duration-300 ease-in-out">Get Started</a>
                        </div>
                        <div>
                          <h6 className="font-semibold text-[14px] leading-[136%] tracking-[-0.002em] mb-2">Includes everything in Starter</h6>
                          <ul className="list-[square] list-inside pl-2 font-medium text-[14px] leading-[136%] tracking-[-0.002em] text-[#252525CC]">
                            <li>Accurate cheating detection</li>
                            <li>Video, transcript & Interview Timeline</li>
                            <li>Fully Customizable</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-3 md:gap-y-4 xl:gap-y-10 bg-white rounded-[1em] p-8">
                      <div>
                        <h4 className="font-semibold text-[20px] md:text-[24px] leading-[100%] tracking-[-0.002em] mb-2">Enterprise</h4>
                        <p className="font-medium text-[14px] md:text-[16px] leading-[136%] tracking-[-0.002em] text-[#252525A3]">Customized solution for your needs</p>
                      </div>
                      <div>
                        <h2 className="font-semibold text-[28px] md:text-[36px] xl:text-[40px] leading-[100%] tracking-[-0.002em] mb-2">Custom</h2>
                      </div>
                      <div>
                        <a href="" className="rounded-[0.7em] md:rounded-[1em] px-4 py-2 md:px-6 md:py-3 w-full inline-block text-center text-md font-medium bg-[#D5621B] text-white active:rounded-[0.7em] transition-all duration-300 ease-in-out">Get Started</a>
                      </div>
                      <div>
                        <h6 className="font-semibold text-[14px] leading-[136%] tracking-[-0.002em] mb-2">Includes everything in Professional</h6>
                        <ul className="list-[square] list-inside pl-2 font-medium text-[14px] leading-[136%] tracking-[-0.002em] text-[#252525CC]">
                          <li>Accurate cheating detection</li>
                          <li>Video, transcript & Interview Timeline</li>
                          <li>Fully Customizable</li>
                        </ul>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}