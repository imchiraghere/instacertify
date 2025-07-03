
import Link from "next/link";

const Subscribe = () => {

    return (
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 mt-[70px] md:mt-[150px]">
            <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] gap-5 mx-auto bg-orange-100 px-[15px] py-[50px] md:flex md:px-[52px] md:py-[72px] lg:gap-[40px] lg:h-[420px] xl:h-[390px] max-w-[1190px]">
                <div className="flex-1 mb-[30px]">
                    <p className="text-capitalized uppercase text-gray-500 tracking-[2px] mb-[13px]">
                        newsletter
                    </p>
                    <h4 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[20px]">
                        Subscribe our newsletter
                    </h4>
                    <p className="text-text text-gray-500">
                        By clicking the button, you are agreeing with our
                    </p>
                    <Link className="text-green-900" href="/">
                        Term &amp; Conditions
                    </Link>
                    <form className="mt-[30px]" action="/">
                        <div className="bg-white flex items-center justify-between p-3 rounded-[55px]">
                            <input
                                className="ml-[25px]"
                                type="text"
                                placeholder="Enter your mail ..."
                            />
                            <button
                                className="rounded-full bg-green-900 grid place-items-center w-[56px] h-[56px]"
                                type="submit"
                            >
                                <img
                                    className="filter-white"
                                    src="./assets/images/icons/icon-right.svg"
                                    alt=""
                                />
                            </button>
                        </div>
                    </form>
                </div>
                <div className="relative flex-1">
                    <img
                        className="h-full w-full object-cover rounded-2xl img-shadow lg:absolute lg:max-w-[332px] lg:h-[403px] lg:right-0"
                        src="./assets/images/thumbnail-2.png"
                        alt="Agon"
                    />
                    <img
                        className="h-full w-full object-cover absolute animate-float w-[225px] h-[170px] rounded-[14px] bottom-[-20px] left-[-10px]"
                        src="./assets/images/chart.png"
                        alt="Agon"
                    />
                </div>
            </div>
        </div>
    )
}
export default Subscribe;