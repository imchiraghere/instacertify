import BackToTop from "@/components/Layout/backtotop";
import Footer from "@/components/Layout/footer";
import Header from "@/components/Layout/header";
import "@/styles/globals.css";
import "../../public/assets/styles/app.min.css";
import "../../public/assets/styles/tailwind.min.css";
import WelcomePopup from "@/components/Layout/welcome-popup";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import NextTopLoader from "nextjs-toploader";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* <WelcomePopup /> */}
      <div className="overflow-x-hidden w-screen relative home-page">
        {/* <div className="full-with address hidden">
          <div className="flex items-center px-3 justify-between gap-5 mx-auto max-w-[1320px] py-[10px] md:mx-8">
            <p className="text-base hidden font-bold md:block">
              66 avenue des Champs, 75008, Paris, France
            </p>
            <div className="flex items-center gap-5 contact ml-auto gap-[10px] md:gap-5 md:flex-row">
              <span>(+01) - 456 789</span>
              <div className="border border-dashed border-white self-stretch"></div>
              <span>contact@agon.com</span>
            </div>
          </div>
        </div> */}
        {loading ? (
          <>
            {/* <Loader /> */}
            <NextTopLoader
              color="#ff6b35" // match brand green
              height={4}
              crawl
              showSpinner={false}
            />
          </>
        ) : (
          <>
            <div className="wrapper mx-auto text-gray-900 font-normal max-w-[1320px]">
              <a name="top"> </a>
              <Header />
              <main className="flex-grow mt-[your-header-height]">
                <NextTopLoader
                  color="#ff6b35" // match brand green
                  height={4}
                  crawl
                  showSpinner={false}
                />
                <Component {...pageProps} />
              </main>
              <Footer />
              <BackToTop />
            </div>
          </>
        )}

        {/* 💬 Welcome Popup */}
      </div>
    </>
  );
}
