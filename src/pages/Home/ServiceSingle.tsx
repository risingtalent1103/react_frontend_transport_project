import Container from "@/components/Container";
import ServiceSingleBenefit from "@/components/ServiceSingle/ServiceSingleBenefit";
import ServiceSingleHow from "@/components/ServiceSingle/ServiceSingleHow";
import ServiceSingleSea from "@/components/ServiceSingle/ServiceSingleSea";
import Banner from "@/components/Banner";

const ServiceSingle = () => {
    return(
        <>
            <Banner className="w-full h-[717px] md:h-[500px] bg-no-repeat bg-[bottom] lg:bg-[center_-12rem] bg-cover" 
                name="Service Single" title="Service Details" imgUrl={"/images/banner/ServiceDetailsBannerFull.png"} />
            <Container>
                <ServiceSingleSea/>
                <ServiceSingleBenefit/>
                <ServiceSingleHow/>
            </Container>
        </>
    )
}

export default ServiceSingle;