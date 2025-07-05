import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Link from "next/link";
import { FOOTER_INDUSTRIES, FOOTER_SERVICES } from "@/utills/const";
import EnquiryForm from "../FooterForm";

const Footer = () => {
  return (
    <footer className=" mb-[30px]">
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
        <div className="flex flex-col items-center gap-2 mb-14 md:flex-row md:justify-between">
          {" "}
          <img
            className="h-full object-cover  w-[90px] md:w-[101px] lg:w-[122px] xl:w-[139px]"
            src="/assets/img/sad.svg"
            alt="logo"
          />
          <div className="flex items-center flex-col gap-5 md:flex-row lg:gap-[30px]">
            <EnquiryForm />
          </div>
        </div>
        <div className="w-full bg-gray-200 h-[1px] mb-[52px]" />
        <div className="text-gray-600 grid gird-cols-1 gap-8 mb-[48px] md:grid-cols-2 lg:grid-cols-4 xl:gap-[98px]">
          <div>
            <h5 className="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
              Contact Us
            </h5>
            <p className="text-text mb-5">
              ADDRESS (CORPORATE OFFICE) <br />
              A-34, Sector 63 A, Noida, Uttar Pradesh 201307
            </p>
            <p className="text-text underline">+91 9999118039</p>
            <p className="text-text underline">Contact@instacertify.com</p>
          </div>
          {/* <div>
            <h5 class="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
              Services
            </h5>

            <marquee
              direction="up"
              scrollamount="2"
              behavior="scroll"
              height="200px"
            >
              <ul>
                {FOOTER_SERVICES?.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service?.url}
                      class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                    >
                      {service?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </marquee>
          </div> */}

          <div>
            <h5 className="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
              Industries
            </h5>
            {/* <marquee
              direction="up"
              scrollamount="2"
              behavior="scroll"
              height="200px"
            > */}
            <ul>
              {FOOTER_INDUSTRIES?.map((category, index) => (
                <li key={index} className="mb-2">
                  <Link
                    href={category?.url}
                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                  >
                    {category?.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* </marquee> */}
          </div>
          <div>
            <h5 className="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
              Support
            </h5>
            <ul>
              <li className="mb-2">
                <a
                  className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                  href="/"
                >
                  Blogs
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                  href="/"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                  href="/"
                >
                  FAQS
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                  href="/"
                >
                  Authors
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
              Useful links
            </h5>
            <ul>
              <li className="mb-2">
                <a
                  className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                  href="/"
                >
                  Events
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                  href="/"
                >
                  Shop
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                  href="/"
                >
                  Patterns
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                  href="/"
                >
                  Themes
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-services-wrapper">
          <h4 className="footer-title">Certifications</h4>
          <ul className="footer-services-list">
            {FOOTER_SERVICES.map((item, index) => (
              <li key={index}>
                <Link href={item.url}>
                  <span className="dot">•</span> {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full bg-gray-200 h-[1px] mb-[46px]" />
        <div className="text-gray-400 lg:flex lg:items-center lg:justify-between">
          <div className="md:flex md:items-center md:gap-6">
            <p className="text-lead font-bold">©Instacertify Official 2025</p>
            <div className="flex items-center justify-between md:gap-6">
              <a className="text-text" href="/">
                Privacy policy
              </a>
              <a className="text-text" href="/">
                Cookies
              </a>
              <a className="text-text" href="/">
                Terms of service
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 mt-5 lg:mt-0">
            <Link
              className="social-icon"
              href="https://www.facebook.com/share/15NtSiGZq8/?mibextid=wwXIfr"
            >
              <FaFacebookF />
            </Link>
            <Link
              className="social-icon"
              href="https://www.linkedin.com/company/instacertify"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              className="social-icon"
              href="https://x.com/instacertify?s=11"
            >
              <FaXTwitter />
            </Link>
            <Link className="social-icon" href="https://pin.it/37GLjxHab">
              <FaPinterest />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
