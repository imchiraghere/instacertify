import BackToTop from "@/components/Layout/backtotop";
import Footer from "@/components/Layout/footer";
import Header from "@/components/Layout/header";
import "@/styles/globals.css";
import "../../public/assets/styles/app.min.css";
import "../../public/assets/styles/tailwind.min.css";
import WelcomePopup from "@/components/Layout/welcome-popup";

export default function App({ Component, pageProps }) {
  return (
    <>
        <WelcomePopup />
      <div className="overflow-x-hidden w-screen relative home-page">
        <div className="full-with address hidden">
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
        </div>
        <div className="wrapper mx-auto text-gray-900 font-normal max-w-[1320px]">
          <a name="top"> </a>
          <Header />
          <main className="flex-grow mt-[your-header-height]">
            <Component {...pageProps} />
          </main>
          <Footer />
          <BackToTop />
        </div>
        {/* 💬 Welcome Popup */}
      </div>
    </>
  );
}
