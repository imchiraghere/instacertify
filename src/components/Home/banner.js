import { PAGE_SLUG } from "@/utills/const";
import Link from "next/link";

const Banner = () => {

    return (
        <div className="full-width banner-hero bg-orange-100 banner-1">
            <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 z-10 relative mx-auto mt-0 py-[60px] !mt-0 max-w-[1320px] lg:flex lg:items-center">
                <div className="flex-1">
                    <h1 className="font-chivo font-bold lg:text-display-2 md:text-[54px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px] mb-[40px]">

                        Be<span className="text-green-900">&nbsp;tested. Be Certified.&nbsp;</span>
                        <span>Be Unstoppable</span>
                        {/* We are<span className="text-green-900">&nbsp;awesome team&nbsp;</span>
                        <span>for your business dream</span> */}

                    </h1>
                    <p className="text-quote md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[60px] mb-[40px]">
                        No Matter What You Make, Where You Make, Our Quality Solutions Are Always For You.
                    </p>
                    <div className="flex items-center justify-start">
                        <button type="button">
                            <Link
                                className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-white bg-black text-heading-6 tracking-wide mr-[22px]"
                                href={PAGE_SLUG.ABOUT_US}
                            >
                                <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold ">
                                    About Us
                                </span>
                                {/* <i>
                                    <img
                                        className="ml-[7px] w-[12px] filter-white group-hover:filter-orange"
                                        src="./assets/images/icons/icon-right.svg"
                                        alt="arrow right icon"
                                    />
                                </i> */}
                                <i>
  <img
    className="ml-[7px] w-[12px] filter-white group-hover:filter-orange"
    src="./assets/images/icons/icon-right.svg"
    alt="arrow right icon"
  />
</i>

                            </Link>
                        </button>
                        <Link
                            className="text-base flex items-center font-chivo font-bold text-[18px] leading-[18px] gap-[5px]"
                            href={PAGE_SLUG.CONTACT_US}
                        >
                            Contact Us
                            <i>
                                <img
                                    className="ml-[7px] w-[12px]"
                                    src="./assets/images/icons/icon-right.svg"
                                    alt="arrow right icon"
                                />
                            </i>
                        </Link>
                    </div>
                </div>
                <div className="hidden relative flex-1 h-auto self-stretch lg:block">
                    <div className="absolute w-full left-20 animate-hero-thumb-sm-animation bottom-[-60px] max-w-[526px]">
                        <img
                            className="h-full w-full object-cover"
                            src="./assets/images/hero-1.png"
                            alt="Agon"
                        />
                    </div>
                    <div className="absolute opacity-80 animate-float max-w-[176px] bottom-[10%] -translate-x-1/3">
                        <div className="relative bg-green-900 bg-opacity-80 rounded-2xl grid place-items-center">
                            <img
                                className="h-full w-full object-cover"
                                src="./assets/images/video-bg.png"
                                alt="Agon"
                            />
                            <p className="text-heading-4 absolute text-white font-chivo font-bold ml-[49px]">
                                Watch intro video
                            </p>
                            <button className="rounded-full bg-white grid place-items-center absolute play-video w-[64px] h-[64px] left-[-15%]">
                                <img
                                    src="./assets/images/icons/icon-play.svg"
                                    alt="play button"
                                    width={15}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;