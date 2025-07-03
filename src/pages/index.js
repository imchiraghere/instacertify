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

export default function Home() {
  return (
    <>
      <Banner />
      <Logos />
      <WhyTrust />
      <Strategy />
      <Believe />
    { /*<Offer />
       <HappyCustomer /> */}
      <News />
      <Plan />
      <Subscribe />
    </>
  );
}
