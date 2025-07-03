import { PAGE_SLUG } from "@/utills/const";

const Faqs = () => {

    return (

        <div className="gap-6 flex flex-col mx-auto px-5 xl:gap-[50px] max-w-[950px] mt-[70px] lg:mt-[98px]">
            <div className="flex-1 mb-[40px]">
                <div className="text-center mb-[22px]">
                    <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
                        Frequently asked questions
                    </h2>
                    <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p>
                </div>
                <p className="text-text text-gray-600 text-center mx-auto mb-[40px] md:w-[55ch]">
                    Feeling inquisitive? Have a read through some of our FAQs or contact our
                    supporters for help
                </p>
                <div className="flex flex-col md:flex-row md:gap-[35px]">
                    <div className="mb-[30px] lg:mb-0">
                        <div className="flex items-center mb-[17px]">
                            <img
                                className="mr-[9px]"
                                src="./assets/images/icons/icon-leaf.svg"
                                alt="leaf icon"
                            />
                            <h4 className="text-heading-6 font-chivo font-bold">
                                People first{" "}
                            </h4>
                        </div>
                        <p className="text-excerpt text-gray-600">
                            The latest design trends meet hand-crafted templates.
                        </p>
                    </div>
                    <div className="mb-[30px] lg:mb-0">
                        <div className="flex items-center mb-[17px]">
                            <img
                                className="mr-[9px]"
                                src="./assets/images/icons/icon-leaf.svg"
                                alt="leaf icon"
                            />
                            <h4 className="text-heading-6 font-chivo font-bold">
                                Agile approach{" "}
                            </h4>
                        </div>
                        <p className="text-excerpt text-gray-600">
                            The latest design trends meet hand-crafted templates.
                        </p>
                    </div>
                    <div className="mb-[30px] lg:mb-0">
                        <div className="flex items-center mb-[17px]">
                            <img
                                className="mr-[9px]"
                                src="./assets/images/icons/icon-leaf.svg"
                                alt="leaf icon"
                            />
                            <h4 className="text-heading-6 font-chivo font-bold">
                                New mindset{" "}
                            </h4>
                        </div>
                        <p className="text-excerpt text-gray-600">
                            The latest design trends meet hand-crafted templates.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex-[1.5]">
                <div className="relative accordion-item mb-5">
                    <details>
                        <summary className="flex justify-between py-5 items-center gap-5 px-[30px]">
                            <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5">
                                Where is my order? Quisque molestie
                            </h4>
                        </summary>
                        <p className="text-text content font-chivo mt-[30px] ml-[30px]">
                            Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium
                            mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend
                            velit, luctus mattis ante nulla condimentum nulla.
                        </p>
                    </details>
                </div>
                <div className="relative accordion-item mb-5">
                    <details>
                        <summary className="flex justify-between py-5 items-center gap-5 px-[30px]">
                            <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5">
                                How can I return an item purchased online?
                            </h4>
                        </summary>
                        <p className="text-text content font-chivo mt-[30px] ml-[30px]">
                            Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium
                            mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend
                            velit, luctus mattis ante nulla condimentum nulla.
                        </p>
                    </details>
                </div>
                <div className="relative accordion-item mb-5">
                    <details>
                        <summary className="flex justify-between py-5 items-center gap-5 px-[30px]">
                            <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5">
                                Can I cancel or change my order?
                            </h4>
                        </summary>
                        <p className="text-text content font-chivo mt-[30px] ml-[30px]">
                            Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium
                            mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend
                            velit, luctus mattis ante nulla condimentum nulla.
                        </p>
                    </details>
                </div>
                <div className="relative accordion-item mb-5">
                    <details>
                        <summary className="flex justify-between py-5 items-center gap-5 px-[30px]">
                            <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5">
                                I have promotional or discount code?
                            </h4>
                        </summary>
                        <p className="text-text content font-chivo mt-[30px] ml-[30px]">
                            Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium
                            mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend
                            velit, luctus mattis ante nulla condimentum nulla.
                        </p>
                    </details>
                </div>
                <div className="relative accordion-item mb-5">
                    <details>
                        <summary className="flex justify-between py-5 items-center gap-5 px-[30px]">
                            <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5">
                                What are the delivery types you use?
                            </h4>
                        </summary>
                        <p className="text-text content font-chivo mt-[30px] ml-[30px]">
                            Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium
                            mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend
                            velit, luctus mattis ante nulla condimentum nulla.
                        </p>
                    </details>
                </div>
                <div className="relative accordion-item mb-5">
                    <details>
                        <summary className="flex justify-between py-5 items-center gap-5 px-[30px]">
                            <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5">
                                How can I pay for my purchases?
                            </h4>
                        </summary>
                        <p className="text-text content font-chivo mt-[30px] ml-[30px]">
                            Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium
                            mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend
                            velit, luctus mattis ante nulla condimentum nulla.
                        </p>
                    </details>
                </div>
                <div className="relative accordion-item mb-5">
                    <details>
                        <summary className="flex justify-between py-5 items-center gap-5 px-[30px]">
                            <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5">
                                Can I cancel my order?
                            </h4>
                        </summary>
                        <p className="text-text content font-chivo mt-[30px] ml-[30px]">
                            Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium
                            mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend
                            velit, luctus mattis ante nulla condimentum nulla.
                        </p>
                    </details>
                </div>
            </div>
            <div className="flex items-center justify-center mb-[50px]">
                <button type="button">
                    <a
                        className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-green-900 text-white hover:bg-gray-900 hover:-translate-y-[2px] mr-[22px]"
                        href={PAGE_SLUG.CONTACT_US}
                    >
                        <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                            Join Our Team
                        </span>
                        <i>
                            {" "}
                            <img
                                className="ml-[7px] w-[12px] filter-white group-hover:filter-white"
                                src="./assets/images/icons/icon-right.svg"
                                alt="arrow right icon"
                            />
                        </i>
                    </a>
                </button>
                <a
                    className="text-base flex items-center font-chivo font-bold text-[18px] leading-[18px] gap-[5px]"
                    href={PAGE_SLUG.CONTACT_US}
                >
                    Support Center
                </a>
            </div>
        </div>
    )
}
export default Faqs;