import Banner from "@/components/About/banner";
import Blogs from "@/components/About/blogs";
import ConnectForm from "@/components/About/connet-form";
import Faqs from "@/components/About/faqs";
import HappyCrousel from "@/components/About/happy-crousel";
import HowItWork from "@/components/About/how-it-work";
import Info from "@/components/About/info";

export default function AboutUs() {
    return (
        <>
            <Banner />
            <HowItWork />
            <Info />
            <Blogs />
            <Faqs />
            <ConnectForm />
            <HappyCrousel />
        </>
    );
}
