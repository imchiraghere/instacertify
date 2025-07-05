import AnimatedButton from "../AnimatedButton";

const ContactForm = () => {
  return (
    <div className="bg-gray-100 relative p-[40px] md:pt-[91px] md:pr-[98px] md:pb-[86px] md:pl-[92px] mt-[150px] rounded-[58px]">
      <div className="mx-auto relative max-w-[1320px]">
        <img
          className="absolute right-0 hidden lg:block md:block max-w-[129px] top-[-50px]"
          src="./assets/images/mail.png"
          alt="mail image"
        />
        <p className="text-capitalized text-gray-500 uppercase tracking-[2px] mb-[15px]">
          Contact us
        </p>
        <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-[22px]">
          Have an project in mind?
        </h2>
        <p className="text-text text-gray-600 mb-[30px] md:mb-[60px] sm:w-full md:w-[50%] lg:w-[50%]">
          If you can't find the answer to your question, please fill out the
          contact form below, and our support team will get back to you as soon
          as possible.
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
              <p className="text-heading-6 font-bold font-chivo">
                Instacertify - BIS, ISI, EPR, <br />
                LMPC Consultant
              </p>
            </div>
            <div className="flex gap-1 text-text mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-map-pin-house-icon lucide-map-pin-house"
              >
                <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
                <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
                <path d="M18 22v-3" />
                <circle cx="10" cy="10" r="3" />
              </svg>{" "}
              {/* A-34, Sector 63 A, Noida, Gautam Buddh Nagar, Uttar Pradesh 201301 Delhi NCR  -India <br /> */}
              A-34, Sector 63 A, Noida, <br />
              Gautam Buddh Nagar, Uttar Pradesh 201307
            </div>
            <div className="flex items-center gap-1 text-text mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-phone-icon lucide-phone"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
              +91 9999118039
            </div>
            <div className="flex items-center gap-1 text-text mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-mail-icon lucide-mail"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
              Contact@instacertify.com
            </div>
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
              {/* <div className="flex flex-col gap-5">
                <button
                  className="group flex items-center transition-all duration-300 px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] font-chivo font-semibold text-md md:text-lg text-white bg-gray-900 hover:bg-gray-700 hover:-translate-y-[2px] w-fit"
                  type="submit"
                >
                  Send Message
                  <img
                    className="ml-[7px] w-[12px] filter-white transition-transform duration-300 transform group-hover:translate-x-5"
                    src="./assets/images/icons/icon-right.svg"
                    alt="arrow right icon"
                  />
                </button>
              </div> */}

              <AnimatedButton title={"Send Message"} />

              <p className="text-md text-gray-500">
                By clicking contact us button, you agree our terms and policy,
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
