import Banner from "@/components/Home/banner";
import Believe from "@/components/Home/believe";
import EquipmentSlider from "@/components/Home/Equipments";
import FAQSection from "@/components/Home/faq";
import HappyCustomer from "@/components/Home/happy-customer";
import IndustryCard from "@/components/Home/industries";
import Logos from "@/components/Home/logos";
import News from "@/components/Home/news";
import Offer from "@/components/Home/offer";
import Plan from "@/components/Home/plan";
import Strategy from "@/components/Home/strategy";
import Subscribe from "@/components/Home/subscribe";
import WhyTrust from "@/components/Home/why-trust";
import WhyWeAreBest from "@/components/Home/whyWeAreBest";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Banner />
      <Logos />
      <WhyTrust />
      <Believe />
      <Strategy />
      <IndustryCard />
      <EquipmentSlider />
      <Offer />
      <WhyWeAreBest />
      <News />
      <FAQSection />
      <HappyCustomer />
      {/* <Plan /> */}
      {/* <Subscribe /> */}
    </>
  );
}
