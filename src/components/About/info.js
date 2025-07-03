
const Info = () => {

    return (
        <div className="full-width bg-green-900">
            <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 flex items-center mx-auto lg:mt-[150px] py-[96px] gap-[50px] max-w-[1320px]">
                <div className="hidden grid-cols-2 grid-rows-2 flex-1 gap-5 lg:grid">
                    <div>
                        <img
                            className="h-full w-full object-cover rounded-2xl"
                            src="/assets/images/thumbnail-5.png"
                            alt="Agon"
                        />
                    </div>
                    <div className="col-start-1 row-start-2">
                        <img
                            className="h-full w-full object-cover rounded-2xl"
                            src="/assets/images/thumbnail-12.png"
                            alt="Agon"
                        />
                    </div>
                    <div className="col-start-2 row-span-2">
                        <img
                            className="h-full w-full object-cover rounded-2xl"
                            src="/assets/images/thumbnail-13.png"
                            alt="Agon"
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <h1 className="font-extrabold font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 text-white mb-[26px]">
                        Our game-changing approach to working together
                    </h1>
                    <p className="text-text mb-9 text-[#D1DAE4]">
                        Check out stories from companies like Leroy Merlin and Decathlon to
                        get inspired by how much you can gain.
                    </p>
                    <button type="button">
                        {" "}
                        <a
                            className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-text w-fit"
                            href="/"
                        >
                            <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                                I am Button
                            </span>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Info;