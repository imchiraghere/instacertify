import Banner from "@/components/Contact/banner";
import ContactForm from "@/components/Contact/contact-form";
import FAQ from "@/components/Contact/faq";
import HowTest from "@/components/Contact/how-test";
import Location from "@/components/Contact/location";

export default function ContactUs() {
  return (
    <>
      <Banner />
      <HowTest />
      <FAQ />
      <ContactForm />
      <Location />
    </>
  );
}
