import { PAGE_SLUG } from "@/utills/const";
import Link from "next/link";
import { useEffect, useState } from "react";

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

    return (
        <>
            <div class="absolute top-0 left-0 w-screen h-full bg-opacity-80 hidden video-iframe bg-[#0b0b0b] z-[999999]">
                <div class="mx-auto video w-1/2">
                    <div class="flex justify-end">
                        <button class="text-white close-video text-[20px]" type="button" title="Close (Esc)">x</button>
                    </div>
                    <iframe class="aspect-video w-full" src="https://www.youtube.com/embed/oRI37cOPBQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div class={`overlay ${menuOpen ? "show" : ""} `} ></div>
            <header className={`h-auto full-width relative py-[15px] lg:py-[26px] ${isSticky ? "sticky-header" : ""}`} >
                <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 flex items-center justify-between mx-auto relative !mt-0 max-w-[1320px]">
                    <Link className="flex" href="/">
                        <img
                            className="logo z-50 w-[90px] md:w-[101px] lg:w-[122px] xl:w-[139px]"
                            src="/assets/img/sad.svg"
                            alt="logo image"
                        />
                    </Link>
                    <nav className="z-50 absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:block">
                        <ul className="navbar flex flex-col justify-center font-chivo gap-[34px] lg:flex-row">
                            <li className="flex items-center group">
                                <Link
                                    className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                                    href={PAGE_SLUG.HOME}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="flex items-center group">
                                <Link
                                    className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                                    href={PAGE_SLUG.ABOUT_US}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li class="flex items-center group">
                                <Link class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]" href="/">
                                    Certification
                                </Link>
                                <i><img class="icon-caret group-hover:filter-green" src="./assets/images/icons/icon-caret.svg" alt="caret" /></i>
                                <ul className="menu-child translate-y-4 opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="ab1"
                                    >
                                        <a className="flex items-center justify-between text-[14px]" href="/about-1.html">
                                            <span className="whitespace-nowrap">America</span>
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-arrow-right.svg"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="ab2"
                                    >
                                        <a className="flex items-center justify-between text-[14px]" href="/about-2.html">
                                            <span className="whitespace-nowrap">Asia Pacific</span>
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-arrow-right.svg"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="ab2"
                                    >
                                        <a className="flex items-center justify-between text-[14px]" href="/about-2.html">
                                            <span className="whitespace-nowrap">AMEA</span>
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-arrow-right.svg"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="ab3"
                                    >
                                        <a className="flex items-center justify-between text-[14px]" href="/about-3.html">
                                            <span className="whitespace-nowrap">Global</span>
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-arrow-right.svg"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="flex items-center group relative">
                                <Link
                                    className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px] flex items-center"
                                    href="/"
                                >
                                    Product Testing
                                </Link>
                                <i>
                                    <img className="icon-caret group-hover:filter-green" src="./assets/images/icons/icon-caret.svg" alt="caret" />
                                </i>
                                <ul className="menu-child translate-y-4 opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="b1"
                                    >
                                        <Link className="flex items-center text-[14px]" href="/blog-1.html">
                                            <span className="whitespace-nowrap">Chemicals</span>
                                        </Link>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="b1"
                                    >
                                        <Link className="flex items-center justify-between text-[14px]" href="/blog-1.html">
                                            <span className="whitespace-nowrap">Electronics & Electricals</span>
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-arrow-right.svg"
                                                alt=""
                                            />
                                        </Link>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="b1"
                                    >
                                        <Link className="flex items-center text-[14px]" href="/blog-1.html">
                                            <span className="whitespace-nowrap">Food & Water</span>
                                        </Link>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="b1"
                                    >
                                        <Link className="flex items-center text-[14px]" href="/blog-1.html">
                                            <span className="whitespace-nowrap">Lightning</span>
                                        </Link>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="b1"
                                    >
                                        <Link className="flex items-center text-[14px]" href="/blog-1.html">
                                            <span className="whitespace-nowrap">MSDS</span>
                                        </Link>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="b1"
                                    >
                                        <Link className="flex items-center text-[14px]" href="/blog-1.html">
                                            <span className="whitespace-nowrap">REACH</span>
                                        </Link>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="b1"
                                    >
                                        <Link className="flex items-center text-[14px]" href="/blog-1.html">
                                            <span className="whitespace-nowrap">ROHS</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li class="flex items-center group">
                                <Link class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]" href="/">
                                    Resources
                                </Link>
                                <i><img class="icon-caret group-hover:filter-green" src="./assets/images/icons/icon-caret.svg" alt="caret" /></i>
                                <ul className="menu-child translate-y-4 opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="ab1"
                                    >
                                        <a className="flex items-center justify-between text-[14px]" href="/about-1.html">
                                            <span className="whitespace-nowrap">Industry Events</span>
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-arrow-right.svg"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="ab2"
                                    >
                                        <a className="flex items-center justify-between text-[14px]" href="/about-2.html">
                                            <span className="whitespace-nowrap">News</span>
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-arrow-right.svg"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="ab2"
                                    >
                                        <a className="flex items-center justify-between text-[14px]" href="/about-2.html">
                                            <span className="whitespace-nowrap">Standards</span>
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-arrow-right.svg"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>

                    <div className="hidden xl:block">
                        <button type="button">
                            <Link
                                className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] hidden lg:flex"
                                href={PAGE_SLUG.CONTACT_US}
                            >
                                <span className="block text-inherit w-full h-full rounded-[50px] text-heading-6 font-bold font-chivo">
                                    Contact Us
                                </span>
                                <i>
                                    <img
                                        className="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                                        src="./assets/images/icons/icon-right.svg"
                                        alt="arrow right icon"
                                    />
                                </i>
                            </Link>
                        </button>
                    </div>
                </div>

                {/* --------for mobile---------- */}
                <div
                    className={`burger-icon burger-icon-white menu__icon cursor-pointer ${menuOpen ? "burger-close" : ""} burger-visible-mobile`}
                    onClick={toggleMenu}
                >
                    <span className="burger-icon-top" />
                    <span className="burger-icon-mid"> </span>
                    <span className="burger-icon-bottom" />
                </div>

                <nav className={`fixed top-0 right-0 bg-white flex flex-col h-screen nav-shadow overflow-y-scroll nav-mobile transition-all duration-200 w-[380px] z-[100] ${menuOpen ? "" : "opacity-0 pointer-events-none"}  `}>
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
                            <li className={`group menu-mobile-item py-[13px] ${expanded && "expand"}`} onClick={toggleExpand}>
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
                </nav>
            </header>
        </>
    )
}
export default Header;