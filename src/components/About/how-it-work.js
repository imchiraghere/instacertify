
const HowItWork = () => {

    return (
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 text-center mx-auto max-w-[905px]">
            <span className="font-chivo inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-4">
                How It Work ?
            </span>
            <div className="text-center mb-[88px]">
                <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
                    Cross-border ordering has never been easier
                </h2>
                <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p>
            </div>
            <div className="flex flex-col gap-5 items-center justify-center relative md:flex-wrap md:flex-row lg:gap-[30px] xl:gap-[110px]">
                <div className="rounded-2xl p-[30px] md:py-[20px] md:px-[53px] self-stretch relative bg-bg-2 md:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] xl:w-[calc(33.33%-75px)] transition-all duration-300 hover:translate-y-[-3px]">
                    <div className="bg-white rounded-full grid place-items-center mx-auto mb-8 w-[80px] h-[80px]">
                        <img
                            className="max-w-[36px]"
                            src="/assets/images/icons/icon-dharma-wheel.svg"
                            alt="icon"
                        />
                    </div>
                    <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">
                        Start Plan
                    </h4>
                    <p className="text-text text-gray-500">Choose any of our packages</p>
                    <img
                        className="hidden absolute right-0 lg:block top-1/2 translate-x-[30px] z-[-1] xl:translate-x-full xl:right-[-15px]"
                        src="/assets/images/icons/icon-arrow-1.svg"
                        alt="direction arrow"
                    />
                </div>
                <div className="rounded-2xl p-[30px] md:py-[20px] md:px-[53px] self-stretch relative bg-bg-3 md:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] xl:w-[calc(33.33%-75px)] transition-all duration-300 hover:translate-y-[-3px]">
                    <div className="bg-white rounded-full grid place-items-center mx-auto mb-8 w-[80px] h-[80px]">
                        <img
                            className="max-w-[36px]"
                            src="/assets/images/icons/icon-wave.svg"
                            alt="icon"
                        />
                    </div>
                    <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">
                        Connect
                    </h4>
                    <p className="text-text text-gray-500">Receive concepts In 24 hours</p>
                    <img
                        className="hidden absolute right-0 lg:block top-1/2 translate-x-[30px] z-[-1] xl:translate-x-full xl:right-[-15px]"
                        src="/assets/images/icons/icon-arrow-2.svg"
                        alt="direction arrow"
                    />
                </div>
                <div className="rounded-2xl p-[30px] md:py-[20px] md:px-[53px] self-stretch relative bg-bg-5 md:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] xl:w-[calc(33.33%-75px)] transition-all duration-300 hover:translate-y-[-3px]">
                    <div className="bg-white rounded-full grid place-items-center mx-auto mb-8 w-[80px] h-[80px]">
                        <img
                            className="max-w-[36px]"
                            src="/assets/images/icons/icon-headphones.svg"
                            alt="icon"
                        />
                    </div>
                    <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">
                        Match
                    </h4>
                    <p className="text-text text-gray-500">Development Stage</p>
                    <img
                        className="hidden absolute right-0 top-full lg:block translate-x-[-60px] z-[-1] xl:translate-y-[30px]"
                        src="/assets/images/icons/icon-arrow-3.svg"
                        alt="direction arrow"
                    />
                </div>
                <div className="rounded-2xl p-[30px] md:py-[20px] md:px-[53px] self-stretch relative bg-bg-9 md:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] xl:w-[calc(33.33%-75px)] transition-all duration-300 hover:translate-y-[-3px] lg:order-1">
                    <div className="bg-white rounded-full grid place-items-center mx-auto mb-8 w-[80px] h-[80px]">
                        <img
                            className="max-w-[36px]"
                            src="/assets/images/icons/icon-trees.svg"
                            alt="icon"
                        />
                    </div>
                    <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">
                        Review
                    </h4>
                    <p className="text-text text-gray-500">Project launch and checkout</p>
                    <img
                        className="hidden absolute left-0 lg:block top-1/2 translate-x-[-30px] z-[-1] xl:-translate-x-full xl:left-[-15px]"
                        src="/assets/images/icons/icon-arrow-4.svg"
                        alt="direction arrow"
                    />
                </div>
                <div className="rounded-2xl p-[30px] md:py-[20px] md:px-[53px] self-stretch relative bg-bg-5 md:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] xl:w-[calc(33.33%-75px)] transition-all duration-300 hover:translate-y-[-3px]">
                    <div className="bg-white rounded-full grid place-items-center mx-auto mb-8 w-[80px] h-[80px]">
                        <img
                            className="max-w-[36px]"
                            src="/assets/images/icons/icon-flower.svg"
                            alt="icon"
                        />
                    </div>
                    <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">
                        Complete
                    </h4>
                    <p className="text-text text-gray-500">After-release Support</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWork;