import { BELIEVE_FEATURES } from "@/utills/const";

const Believe = () => {
  return (
    <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[100px]">
      <div className="lg:grid lg:grid-cols-2 lg:gap-[30px] xl:gap-[95px]">
        <div className="relative">
          <img
            className="rounded-2xl mb-[30px] lg:mb-0 lg:flex-1"
            src="/assets/images/cert.svg"
            alt="Agon"
          />
        </div>
        <div className="flex-1 order-1">
          <span className="font-chivo inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[15px] leading-[14px] mb-[22px]">
            Instacertify Certifications Made Simple
          </span>
          <h3 className="font-chivo font-bold md:text-[40px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">
            Simply your path to product certification excellence with our expert
            solutions
          </h3>
          <p
            style={{ fontSize: "18px" }}
            className="text-quote md:text-lead-md text-gray-600 mb-[30px]"
          >
            We are India's leading product testing and compliance solutuion
            partner, driving rapid industry growth. Specializing in quality
            testing and consulting, we cover a wide array of certifications,
            including BIS, CRS, ISI, CDSCO, WPC, IMEI-DOT, GMARK, SABER, SFDA,
            LMPC, CIB, EPR, and E-waste Management, to empower businesses across
            the country.
          </p>
          <div className="border border-green-900 border-dashed mb-[30px]" />

          <div className="md:grid md:grid-cols-2 md:gap-y-[34px] lg:gap-x-[70px]">
            {BELIEVE_FEATURES.map((item, index) => (
              <div className="mb-[30px] lg:mb-0" key={index}>
                <div className="flex items-center mb-[17px]">
                  <div
                    style={{
                      paddingLeft: "5%",
                      paddingRight: "5%",
                      paddingTop: "2.5%",
                      paddingBottom: "2.5%",
                      marginRight: "5%",
                    }}
                    className="rounded-full bg-green-900 text-white flex items-center justify-center text-base font-bold"
                  >
                    {index + 1}
                  </div>
                  <h4 className="text-heading-6 font-chivo font-bold">
                    {item.title}
                  </h4>
                </div>
                {/* <p className="text-excerpt text-gray-600">{item.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Believe;
