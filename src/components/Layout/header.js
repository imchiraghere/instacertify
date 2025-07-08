import { HEADER_SLUG, PAGE_SLUG } from "@/utills/const";
import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedButton from "../AnimatedButton";
import { ChevronDown, ChevronUp } from "lucide-react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 230);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const MenuItem = ({ item, level = 0 }) => {
    const [hovered, setHovered] = useState(false);
    const hasChildren = item.children && item.children.length > 0;

    const submenuStyle = {
      position: "absolute",
      top: "45px",
      backgroundColor: "#fff",
      padding: "10px 0",
      minWidth: "200px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      opacity: hovered ? 1 : 0,
      pointerEvents: hovered ? "auto" : "none",
      borderRadius: "4px",
      zIndex: 1000,
      transition: "opacity 0.3s ease",
    };

    if (level === 1) {
      submenuStyle.top = "20%";
      submenuStyle.left = 0;
      submenuStyle.transform = hovered
        ? "translateX(200px)"
        : "translateX(0px)";
      submenuStyle.transition += ", transform 0.3s ease";
    } else if (level === 2) {
      submenuStyle.top = 0;
      submenuStyle.left = "100%";
      submenuStyle.transition += ", transform 0.3s ease";
    } else if (level >= 3) {
      submenuStyle.top = 0;
      submenuStyle.right = "100%";
      submenuStyle.transition += ", transform 0.3s ease";
    }

    return (
      <li
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          padding: level === 0 ? "10px 5px" : "10px 18px ",
          listStyle: "none",
          whiteSpace: "nowrap",
          cursor: "pointer",
          fontFamily: "Chivo, sans-serif",
          fontSize: level === 0 ? "16px" : "14px",
        }}
      >
        <Link
          href={item.href}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            userSelect: "none",
            color: hovered ? "#ec691f" : "",
          }}
        >
          <span
            style={{
              transform:
                level !== 0 && hovered ? "translateX(5px)" : "translateX(0)",
              transition: "transform 0.3s ease",
            }}
          >
            {item.label}
          </span>
          {hasChildren && (
            <img
              src={
                level === 0
                  ? "/assets/images/icons/icon-caret.svg"
                  : "./assets/images/icons/icon-arrow-right.svg"
              }
              alt="caret"
              style={{
                width: "9px",
                height: "9px",
                marginLeft: "auto",
                transition: "transform 0.3s ease",
              }}
            />
          )}
        </Link>

        {hasChildren && (
          <ul style={submenuStyle}>
            {item?.children?.map((child, idx) => (
              <MenuItem item={child} key={idx} level={level + 1} />
            ))}
          </ul>
        )}
      </li>
    );
  };

  const InlineMenu = () => {
    return (
      <nav className="header-menu">
        <ul className="header-menu-list">
          {HEADER_SLUG?.map((item, index) => (
            <MenuItem item={item} key={index} />
          ))}
        </ul>
      </nav>
    );
  };

  const RecursiveMobileMenu = ({ items }) => {
    return (
      <ul className="pl-0">
        {items.map((item, idx) => (
          <MobileMenuItem item={item} key={idx} />
        ))}
      </ul>
    );
  };

  const MobileMenuItem = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasChildren = item.children && item.children.length > 0;

    const handleToggle = (e) => {
      if (hasChildren) {
        e.preventDefault(); // Prevents navigation if submenu exists
        setIsExpanded(!isExpanded);
      }
    };

    return (
      <li className="py-[13px] group font-chivo">
        <div
          className="flex justify-between items-center transition-all duration-200 hover:text-green-900 hover:translate-x-[2px] cursor-pointer"
          onClick={handleToggle}
        >
          {/* <Link href="/" className="block w-full"> */}
          <Link
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="block w-full"
          >
            {item.label}
          </Link>
          {hasChildren && (
            <span className="ml-2">
              {isExpanded ? (
                <ChevronUp className="w-[18px] h-[18px]" />
              ) : (
                <ChevronDown className="w-[18px] h-[18px]" />
              )}
            </span>
          )}
        </div>

        {hasChildren && isExpanded && (
          <div className="pl-5 pt-2">
            <RecursiveMobileMenu items={item.children} />
          </div>
        )}
      </li>
    );
  };

  return (
    <>
      <div class={`overlay ${menuOpen ? "show" : ""} `}></div>
      <header
        className={`h-auto full-width relative py-[15px] md:px-[53px] lg:py-[26px] ${
          isSticky ? "sticky-header" : ""
        }`}
      >
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 flex items-center justify-between mx-auto relative !mt-0 max-w-[1320px]">
          <Link className="flex" href="/">
            <img
              className="logo z-50 w-[120px] md:w-[101px] lg:w-[122px] xl:w-[139px]"
              src={isSticky ? "/assets/img/sodag.svg" : "/assets/img/sad.svg"}
              alt="logo image"
            />
          </Link>
          <InlineMenu />

          <div className="hidden xl:block">
            <AnimatedButton title="Get Certified" href={"/contact-us"} />
          </div>
        </div>

        {/* --------for mobile---------- */}
        <div
          style={{ marginTop: menuOpen && "2%" }}
          className={`burger-icon burger-icon-white menu__icon cursor-pointer ${
            menuOpen ? "burger-close" : ""
          } burger-visible-mobile`}
          onClick={toggleMenu}
        >
          <span className="burger-icon-top" />
          <span className="burger-icon-mid"> </span>
          <span className="burger-icon-bottom" />
        </div>

        {/* <nav
          className={`fixed top-0 right-0 bg-white flex flex-col h-screen nav-shadow overflow-y-scroll nav-mobile transition-all duration-200 w-[380px] z-[100] ${
            menuOpen ? "" : "opacity-0 pointer-events-none"
          }  `}
        >
          <div className="flex items-center border-b p-[15px] lg:p-[26px] gap-[10px] border-[#F2F4F7]">
            <img
              className="max-w-[50px]"
              src="./assets/images/avatar-9.png"
              alt="avatar"
            />
            <div>
              <p className="font-bold">Hi! Steven</p>
              <p className="text-sm font-chivo text-gray-500">
                You have 5 new messages
              </p>
            </div>
          </div>
          <div className="p-[30px]">
            <ul className="font-chivo font-medium text-[16px] leading-[16px]">
              <li className={`group menu-mobile-item py-[13px] `}>
                <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                  <p>Home</p>
                </div>
              </li>
              <li className=" py-[13px]">
                <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                  <p>About</p>
                </div>
              </li>
              <li className="group menu-mobile-item py-[13px]">
                <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                  <p>Services</p>
                </div>
              </li>
              <li className="group menu-mobile-item py-[13px]">
                <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                  <p>News</p>
                </div>
              </li>
              <li
                className={`group menu-mobile-item py-[13px] ${
                  expanded && "expand"
                }`}
                onClick={toggleExpand}
              >
                <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                  <p>Blog</p>
                  <img
                    className="w-[18px] h-[18px]"
                    src="./assets/images/icons/icon-angle-down-fill.svg"
                    alt="angle icon"
                  />
                </div>
                <ul className="pl-5 menu-child hidden pt-[10px]">
                  <li className="text-md py-[10px]" id="b1">
                    <Link
                      className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                      href="/"
                    >
                      Blog 01
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="group menu-mobile-item py-[13px]">
                <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                  <p>Events</p>
                </div>
              </li>
            </ul>
            <div className="mt-5 border-t border-b border-gray-100 pb-5 mb-[25px] pt-[30px]">
              <p className="font-bold text-heading-6 mb-[10px]">Your Account</p>
              <ul className="text-[15px]">
                <li className="py-[13px]">
                  <Link
                    className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                    href="/"
                  >
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-gray-400 font-chivo text-[13px]">
              Copyright 2022 © Agon - Agency Template.
              <br />
              <span>Designed by</span>
              <Link className="text-green-900" href="http://alithemes.com">
                &nbsp;AliThemes
              </Link>
            </div>
          </div>
        </nav> */}

        <nav
          className={`fixed  top-0 right-0 bg-white flex flex-col h-screen nav-shadow overflow-y-scroll nav-mobile transition-all duration-200 w-[380px] z-[100] ${
            menuOpen ? "" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex items-center border-b p-[20px] lg:p-[26px] gap-[10px] border-[#F2F4F7]">
            <img
              className="logo z-50 w-[120px] md:w-[101px] lg:w-[122px] xl:w-[139px]"
              src="/assets/img/sodag.svg"
              alt="logo image"
            />
          </div>

          <div className="p-[30px]">
            <RecursiveMobileMenu items={HEADER_SLUG} />

            {/* You can keep this part as is */}
            {/* <div className="mt-5 border-t border-b border-gray-100 pb-5 mb-[25px] pt-[30px]">
              <p className="font-bold text-heading-6 mb-[10px]">Your Account</p>
              <ul className="text-[15px]">
                <li className="py-[13px]">
                  <Link
                    className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                    href="/"
                  >
                    Profile
                  </Link>
                </li>
              </ul>
            </div> */}
            <div className="text-gray-400 font-chivo flex items-center justify-center text-[13px] mt-[50px]">
              Copyright 2025 © InstaCertify
              <br />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
