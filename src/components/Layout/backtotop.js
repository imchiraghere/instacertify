import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="backToTop"
      className={`fixed bottom-28 right-[20px] z-[9999] w-[48px] h-[48px] rounded-full grid place-items-center transition-all duration-300 ${
        visible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="rounded-full bg-green-900 grid place-items-center w-[48px] h-[48px]"
        aria-label="Scroll to top"
      >
        <img src="/assets/images/icons/icon-up.svg" alt="to top icon" />
      </button>
    </div>
  );
};

export default BackToTop;
