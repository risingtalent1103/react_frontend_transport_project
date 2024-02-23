
import ContactIntroduction from "@/components/Contact/ContactIntrodction";
import Container from "@/components/Container";
import HomePageGetInTouch from "@/components/HomePageComponents/HomPageGetInTouch";
import HomePageCustomerSay from "@/components/HomePageComponents/HomePageCustomerSay";
import HomePageOpportunity from "@/components/HomePageComponents/HomePageOpportunity";
import HomePageSafeSolutionsBox from "@/components/HomePageComponents/HomePageSafeSolutionsBox";
import HomePageWhyUs from "@/components/HomePageComponents/HomePageWhyUs";
import ServiceImageCardBox from "@/components/HomePageComponents/ServiceImageCardBox";
import ServiceSuccessCounter from "@/components/HomePageComponents/ServiceSuccessCounter";
import MeetExpertTeam from "@/components/MeetExpertTeam";
import OurLatestNews1 from "@/components/OurLatestNews/OurLatestNews1";
import YellowButton from "@/components/YellowButton";

const HomePage = () => {
    return (
        <div className="w-full">
            <div className="h-[880px] bg-cover bg-center text-center" style={{backgroundImage:`url('images/HomePageBackground.png')`}}>
                <Container>
                    <div className="xl:w-[571px] xl:h-[406px] lg:w-[60%] lg:pt-[251px] md:pt-[200px] pt-[150px] flex flex-col gap-2 xl:ml-0 ml-[40px]">
                        <p className="w-[248px] h-[23px] text-[14px] sm:text-3 font-myRubic font-normal text-[white] bg-[#184206] bg-opacity-50 border-l-4 border-primary1">
                            Logistics & Supply Chain Solutions
                        </p>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-[6px]">
                                <p className="xl:text-6xl xl:leading-[70px] lg:w-[90%] sm:w-[70%] w-[350px] leading-tight md:text-5xl text-4xl text-[white] font-myRubic font-bold text-left">
                                    Your Gateway to any Destination in the World
                                </p>
                                <p className="lg:w-[90%] sm:w-[500px] w-[350px]  h-[72px] md:text-base text-[14px] text-[white] text-left font-myKrub font-medium">
                                    In augue ligula, feugiat ut nulla consequat. Ut est lacus, 
                                    molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, 
                                    nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. 
                                </p>
                            </div>
                            <YellowButton content="Explore More" className="w-[194px] h-[60px]"/>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <HomePageSafeSolutionsBox/>
            </Container>
            <div className="lg:h-[504px] h-[600px] bg-[url('images/HomePageBackground-2.png')] bg-cover bg-center">
                <img className="lg:h-[504px] h-[600px]" src="/images/HomePageBackground-2-Hover.png"/>
            </div>
            <Container className="relative xl:h-[409px] lg:h-[800px] sm:h-[600px] h-[420px] flex justify-center">
                <HomePageWhyUs className="absolute lg:top-[-138px] top-[-300px]"/>
            </Container>
            <Container className="mt-[112px] mb-[112px]">
                <ServiceSuccessCounter/>
            </Container>
            <ServiceImageCardBox/>
            <Container className="sm:ml-auto ml-3">
                <HomePageCustomerSay/>
            </Container>
            <HomePageOpportunity/>
            <Container>
                <MeetExpertTeam/>
            </Container>
            <div className="w-full bg-primary2 pt-[143px] px-5 xl:px-0">
                <HomePageGetInTouch/>
                <Container>
                    <ContactIntroduction/>
                </Container>
            </div>
            <Container>
                <div className="w-full lg:w-[60rem] lg:mx-auto">
                    <OurLatestNews1/> 
                </div>
            </Container>
            <div className="w-full h-[412px]" style={{backgroundImage:`url("/images/HomePage/BackgroundDownImg.png")`}}/>
        </div>
    )
}
export default HomePage;