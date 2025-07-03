import { PAGE_SLUG } from "@/utills/const";


const Banner = () => {
    return (
        <div className="full-width bg-bg-2">
            <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 z-10 relative mx-auto !mt-0 py-[60px] max-w-[1320px] lg:flex lg:items-end lg:justify-between">
                <div className="lg:w-[60%] lg:mr-[150px]">
                    <span className="font-chivo inline-block bg-bg-6 text-green-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[10px]">
                        What We Do, What You Get
                    </span>
                    <h1 className="font-chivo font-bold lg:text-display-2 md:text-[64px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px] mb-[30px]">
                        Advanced analytics to grow your business
                    </h1>
                    <p className="text-quote md:text-lead-lg text-gray-500 relative z-10 pr-[40px] lg:pr-[60px] mb-[44px]">
                        Integrated workflow designed for product teams. We create world-class
                        development and branding
                    </p>
                    <div className="flex items-center justify-start mb-[50px]">
                        <button type="button">
                            <a
                                className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-white bg-black text-heading-6 tracking-wide mr-[22px]"
                                href={PAGE_SLUG.CONTACT_US}
                            >
                                <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                                    Join Our Team
                                </span>
                                <i>
                                    {" "}
                                    <img
                                        className="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                                        src="/assets/images/icons/icon-right.svg"
                                        alt="arrow right icon"
                                    />
                                </i>
                            </a>
                        </button>
                        <a
                            className="text-base flex items-center font-chivo font-bold text-[18px] leading-[18px] gap-[5px]"
                            href={PAGE_SLUG.CONTACT_US}
                        >
                            Contact Us
                        </a>
                        <i>
                            <img
                                className="ml-[7px] w-[12px]"
                                src="/assets/images/icons/icon-right.svg"
                                alt="arrow right icon"
                            />
                        </i>
                    </div>
                </div>
                <div className="relative">
                    <div className="flex justify-between w-full flex-wrap lg:flex-col gap-[40px] lg:gap-0">
                        <div className="flex items-start lg:mb-[60px] last:mb-0 gap-[26px]">
                            <div className="bg-white rounded-full w-[80px] h-[80px]">
                                <img
                                    className="h-full w-full object-cover p-[18px]"
                                    src="/assets/images/icons/icon-waves.svg"
                                    alt="icon"
                                />
                            </div>
                            <div className="flex-1">
                                <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 text-green-900 mb-[5px]">
                                    +12k
                                </h2>
                                <p className="text-text text-gray-500">Projects done</p>
                            </div>
                        </div>
                        <div className="flex items-start lg:mb-[60px] last:mb-0 gap-[26px]">
                            <div className="bg-white rounded-full w-[80px] h-[80px]">
                                <img
                                    className="h-full w-full object-cover p-[18px]"
                                    src="/assets/images/icons/icon-pine.svg"
                                    alt="icon"
                                />
                            </div>
                            <div className="flex-1">
                                <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 text-green-900 mb-[5px]">
                                    +68
                                </h2>
                                <p className="text-text text-gray-500">Offices / Factories</p>
                            </div>
                        </div>
                        <div className="flex items-start lg:mb-[60px] last:mb-0 gap-[26px]">
                            <div className="bg-white rounded-full w-[80px] h-[80px]">
                                <img
                                    className="h-full w-full object-cover p-[18px]"
                                    src="/assets/images/icons/icon-anchor.svg"
                                    alt="icon"
                                />
                            </div>
                            <div className="flex-1">
                                <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 text-green-900 mb-[5px]">
                                    +15k
                                </h2>
                                <p className="text-text text-gray-500">Constant clients</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute hidden bottom-[-60px] left-[-117px] translate-x-[-260px] lg:block">
                        <img
                            className="h-full w-full object-cover animate-hero-thumb-sm-animation"
                            src="/assets/images/hero-about2.png"
                            alt="Agon"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;