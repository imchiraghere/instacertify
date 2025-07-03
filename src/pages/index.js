import Banner from "@/components/Home/banner";
import Believe from "@/components/Home/believe";
import HappyCustomer from "@/components/Home/happy-customer";
import Logos from "@/components/Home/logos";
import News from "@/components/Home/news";
import Offer from "@/components/Home/offer";
import Plan from "@/components/Home/plan";
import Strategy from "@/components/Home/strategy";
import Subscribe from "@/components/Home/subscribe";
import WhyTrust from "@/components/Home/why-trust";
import { useState } from "react";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      {showVideo && (
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-80 video-iframe bg-[#0b0b0b] z-[999999]">
          <div className="mx-auto video w-1/2" style={{ marginTop: "10%" }}>
            <div className="flex justify-end">
              <button
                className="text-white text-[20px]"
                type="button"
                title="Close (Esc)"
                onClick={() => setShowVideo(false)}
              >
                x
              </button>
            </div>
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/oRI37cOPBQQ?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <Banner onOpen={() => setShowVideo(true)} />
      <Logos />
      <WhyTrust />
      <Strategy />
      <Believe />
      <Offer />
      {/* <HappyCustomer /> */}
      <News />
      <Plan />
      <Subscribe />
    </>
  );
}
