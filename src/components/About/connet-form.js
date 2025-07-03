
const ConnectForm = () => {

    return (
        <div className="bg-gray-100 relative p-[40px] md:pt-[91px] md:pr-[98px] md:pb-[86px] md:pl-[92px] full-width mt-[70px] lg:mt-[150px]">
            <div className="mx-auto relative max-w-[1320px]">
                <img
                    className="absolute right-0 max-w-[129px] top-[-50px]"
                    src="./assets/images/mail.png"
                    alt="mail image"
                />
                <p className="text-capitalized text-gray-500 uppercase tracking-[2px] mb-[15px]">
                    Contact us
                </p>
                <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-[22px]">
                    Have an project in mind?
                </h2>
                <p className="text-text text-gray-600 mb-[30px] md:mb-[60px]">
                    The right move at the right time saves your investment. live the dream
                    of expanding your business.
                </p>
                <div className="flex flex-col gap-8 mb-[15px] md:mb-[25px] lg:flex-row lg:gap-[50px] xl:gap-[98px]">
                    <div>
                        <div className="flex gap-[13px] mb-[15px] md:mb-[25px]">
                            <i>
                                <img
                                    src="./assets/images/icons/icon-home-fill.svg"
                                    alt="home icon"
                                />
                            </i>
                            <p className="text-heading-6 font-bold font-chivo">Agon Studio</p>
                        </div>
                        <p className="text-text text-gray-600">4517 Washington Ave.</p>
                        <p className="text-text text-gray-600 mb-[10px] md:mb-[16px]">
                            Manchester, Kentucky 39495
                        </p>
                        <p className="text-text text-gray-600 underline">(239) 555-0108</p>
                        <p className="text-text text-gray-600 underline">contact@agon.com</p>
                    </div>
                    <form className="flex-1" action="/">
                        <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                            <input
                                className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
                                type="text"
                                placeholder="Enter your name"
                            />
                            <input
                                className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
                                type="text"
                                placeholder="Company (optional)"
                            />
                        </div>
                        <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                            <input
                                className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
                                type="text"
                                placeholder="Your email"
                            />
                            <input
                                className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
                                type="text"
                                placeholder="Phone number"
                            />
                        </div>
                        <textarea
                            className="w-full py-5 resize-none outline-0 px-[30px] max-h-[150px] mb-[35px] md:mb-[56px]"
                            name=""
                            cols={100}
                            rows={10}
                            placeholder="Tell us about yourself"
                            defaultValue={""}
                        />
                        <div className="flex flex-col gap-5">
                            <button
                                className="flex items-center transition-colors duration-200 px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] font-chivo font-semibold text-md md:text-lg text-white bg-gray-900 w-fit"
                                type="submit"
                            >
                                Send Message
                                <i>
                                    {" "}
                                    <img
                                        className="ml-[7px] w-[12px] filter-white"
                                        src="./assets/images/icons/icon-right.svg"
                                        alt="arrow right icon"
                                    />
                                </i>
                            </button>
                            <p className="text-md text-gray-500">
                                By clicking contact us button, you agree our terms and policy,
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ConnectForm;