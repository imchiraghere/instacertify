import { BELIEVE_FEATURES } from "@/utills/const";

const Believe = () => {

  return (
    <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[100px]">
      <div className="lg:grid lg:grid-cols-2 lg:gap-[30px] xl:gap-[95px]">
        <div className="relative">
          <img
            className="rounded-2xl mb-[30px] lg:mb-0 lg:flex-1"
            src="/assets/images/thumbnail-2.png"
            alt="Agon"
          />
        </div>
        <div className="flex-1 order-1">
          <span className="font-chivo inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">
            What We Do, What You Get
          </span>
          <h3 className="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">
            We believe that our works can contribute to a better world.
          </h3>
          <p className="text-quote md:text-lead-lg text-gray-600 mb-[50px]">
            Necessary to deliver white glove, fully managed campaigns that surpass
            industry benchmarks.Take your career to next level. Apply to our team
            and see what we can do together. You’re good enough.
          </p>
          <div className="border border-green-900 border-dashed mb-[48px]" />

          <div className="md:grid md:grid-cols-2 md:gap-y-[34px] lg:gap-x-[70px]">
            {BELIEVE_FEATURES.map((item, index) => (
              <div className="mb-[30px] lg:mb-0" key={index}>
                <div className="flex items-center mb-[17px]">
                  <img className="mr-[9px]" src={item.icon} alt="icon" />
                  <h4 className="text-heading-6 font-chivo font-bold">{item.title}</h4>
                </div>
                <p className="text-excerpt text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Believe;
