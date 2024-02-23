import Container from "@/components/Container";
import OurBestPricing from "@/components/Pricing/OurBestPricing";
import Banner from "@/components/Banner";
import HomePageCustomerSay from "@/components/HomePageComponents/HomePageCustomerSay";

const Pricing = () => {
    return(
        <>
            <Banner className="w-full h-[717px] md:h-[500px] bg-no-repeat bg-[bottom] md:bg-center xl:bg-[center_-23rem] bg-cover" 
                name="Pricing" title="Our Best Price" imgUrl={"/images/banner/PricingBannerFull.png"}/>
            <Container>
                <OurBestPricing/>
            </Container>
            <Container className="sm:ml-auto ml-3">
                <HomePageCustomerSay/>
            </Container>
        </>
    )
}

export default Pricing;