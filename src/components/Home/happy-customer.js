import { HAPPY_CUSTOMER_DATA } from "@/utills/const";

const HappyCustomer = () => {

  return (
    <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
      <div className="items-center justify-between md:flex mb-[30px] md:mb-[80px]">
        <div>
          <h2 className="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
            Our Happy Customers
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600">
            Know about our clients, we are a woldwide corporate brand
          </p>
        </div>
        <div className="flex items-center gap-5 self-end">
          <div className="grid place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 feedback-prev">
            <img
              className="group-hover:filter-white"
              src="/assets/images/icons/icon-prev.svg"
              alt="control icon button"
            />
          </div>
          <div className="grid place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 feedback-next">
            <img
              className="group-hover:filter-white"
              src="/assets/images/icons/icon-next.svg"
              alt="control icon button"
            />
          </div>
        </div>
      </div>

      <div className="feedback-list ml-[-15px]">
        {HAPPY_CUSTOMER_DATA.map((item, index) => (
          <div
            key={index}
            className={`border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] ${item.borderClass}`}
          >
            <img
              className="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]"
              src={item.image}
              alt="avatar"
            />
            <p className="text-heading-6 font-chivo font-bold mb-[6px]">{item.name}</p>
            <p className="text-sm font-bold mb-5 text-gray-700">{item.company}</p>
            <p className="text-text text-gray-500">{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyCustomer;
