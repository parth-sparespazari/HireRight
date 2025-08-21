import Image from "next/image";

export default function CoreValues() {
    return (
        <section className="py-40 font-hanken">
            <div className="container mx-auto flex flex-col items-center gap-y-25">
                <h2 className="font-dm-serif font-normal text-[64px] leading-[130%] tracking-[-0.01em] text-center text-[#343330]">Our Core Value</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Auctor dapibus tristique augue congue tristique.</p>
                <div className="flex flex-wrap w-full items-center justify-between">
                    <input type="radio" id="tab1" name="tab" className="hidden peer/tab1" defaultChecked />
                    <label
                        htmlFor="tab1"
                        className="cursor-pointer px-4 py-2 border-b-2 peer-checked/tab1:border-red-500 peer-checked/tab1:text-red-600 text-gray-500 ml-auto"
                    >
                        Features
                    </label>

                    <input type="radio" id="tab2" name="tab" className="hidden peer/tab2" />
                    <label
                        htmlFor="tab2"
                        className="cursor-pointer px-4 py-2 border-b-2 peer-checked/tab2:border-red-500 peer-checked/tab2:text-red-600 text-gray-500"
                    >
                        Pricing
                    </label>

                    <input type="radio" id="tab3" name="tab" className="hidden peer/tab3" />
                    <label
                        htmlFor="tab3"
                        className="cursor-pointer px-4 py-2 border-b-2 peer-checked/tab3:border-red-500 peer-checked/tab3:text-red-600 text-gray-500 mr-auto"
                    >
                        FAQ
                    </label>

                    <div className="hidden peer-checked/tab1:block w-full">
                        <p>Amazing features explained here...</p>
                    </div>
                    <div className="hidden peer-checked/tab2:block w-full">
                        <p>Pricing details go here...</p>
                    </div>
                    <div className="hidden peer-checked/tab3:block w-full">
                        <p>Frequently Asked Questions...</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
}