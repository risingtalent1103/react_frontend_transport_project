import Container from "../../components/Container";
import OurLatestNews from "@/components/OurLatestNews/OurLatestNews";
import Banner from "@/components/Banner";

const OurLatestNewsContainer = () => {
    return(
        <>
            <Banner className="w-full h-[717px] md:h-[500px] mb-10 bg-no-repeat bg-[bottom_right]  2xl:bg-[center_-14rem] bg-cover"
                 name="Blog" title="Our Latest News" imgUrl={"/images/banner/BlogBannerFull.png"} />
            <Container>
                <div className="w-full lg:w-[60rem] lg:mx-auto">
                    <OurLatestNews/> 
                </div>
            </Container>
        </>
    )
}

export default OurLatestNewsContainer;