import AboutInstacertify from "@/components/About/about-instacertify";
import Banner from "@/components/About/banner";
import Blogs from "@/components/About/blogs";
import ConnectForm from "@/components/About/connet-form";
import Faqs from "@/components/About/faqs";
import HappyCrousel from "@/components/About/happy-crousel";
import HowItWork from "@/components/About/how-it-work";
import Info from "@/components/About/info";
import OurStorySection from "@/components/About/our-story";
import SimpleFocusSection from "@/components/About/simplefocus-section";
import TeamSection from "@/components/About/team-section";

export default function AboutUs() {
  return (
    <>
      <Banner />
      <OurStorySection />
      <AboutInstacertify />
      <SimpleFocusSection />
      <TeamSection />
      {/* <HowItWork />
      <Info />
      <Blogs />
      <Faqs />
      <ConnectForm />
      <HappyCrousel /> */}
    </>
  );
}
