import Banner from "@/components/Banner";
import OurLogisticsService from "@/components/OurLogisticsService";
import Container from "@/components/Container";
import CompanyOverview from "@/components/AboutUs/CompanyOverview";
import MeetExpertTeam from "@/components/MeetExpertTeam";
import HomePageCustomerSay from "@/components/HomePageComponents/HomePageCustomerSay";
import OurBestPricing from "@/components/Pricing/OurBestPricing";
import FrequentlyQuestionsBox from "@/components/FrequentlyQuestionsBox";
import ContactIntroduction from "@/components/Contact/ContactIntrodction";

const AboutUs = () => {
    return (
        <>
            <Banner className="w-full h-[717px] lg:h-[500px] bg-no-repeat bg-right-bottom xl:bg-[center_-14rem] bg-cover" 
                name="About Us" title="About Our Logistics" imgUrl={"/images/banner/AboutBannerFull.png"} />
            <CompanyOverview />
            <div className="w-full py-16 bg-secondary1">
                <Container>
                    <OurLogisticsService />
                </Container> 
            </div>
            <Container>
                <MeetExpertTeam/>
            </Container>
            <Container className="sm:ml-auto ml-3">
                <HomePageCustomerSay/>
            </Container>
            <Container>
                <OurBestPricing/>
            </Container>
            <FrequentlyQuestionsBox/>
            <Container className="xl:mt-0 sm:mt-[250px] mt-[170px]">
                <ContactIntroduction/>
            </Container>
        </>   
    )
}

export default AboutUs;