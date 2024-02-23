import Banner from "@/components/Banner";
import Container from "@/components/Container";
import HomePageCustomerSay from "@/components/HomePageComponents/HomePageCustomerSay";
import OurLogisticsService from "@/components/OurLogisticsService";
import ProjectReviews from "@/components/Project/ProjectReviews";
import ServiceGoodness from "@/components/Service/ServiceGoodness";
const Service = () => {
    return (
        <>
            <Banner className="w-full h-[717px] md:h-[500px] bg-no-repeat bg-[bottom] 2xl:bg-[center_-35rem] bg-cover" name="Services" title="Our Logistics Service" imgUrl={"/images/banner/ServiceBannerFull.png"} />
            <Container className="py-16">
                <OurLogisticsService />
            </Container> 
            <div className="w-full py-16 bg-secondary1">
                <ServiceGoodness />
            </div>
            <Container className="sm:ml-auto ml-3">
                <HomePageCustomerSay/>
            </Container>
            <ProjectReviews/>
        </>
    )
}
export default Service;