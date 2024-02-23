import { serviceIconNameInformations } from "@/stack/stack";
import SubTitle from "../SubTitle";
import HomePageServiceIconName2 from "./HomePageServiceIconName2";

type props = {
    className? : string,
}

const HomePageOpportunity = ({ className = ""}: props) => {
    return (
        <>
            <div className={`flex xl:flex-row flex-col  ${className}`}>
                <div className="relative flex items-center xl:w-[50%] w-[100%] 2xl:h-[900px] xl:h-[800px] lg:h-[700px] md:h-[550px] sm:h-[420px] h-[360px] z-20">
                    <div className="absolute xl:w-[100%] md:w-[90%] w-[85%] 2xl:h-[900px] xl:h-[800px] lg:h-[700px] md:h-[550px] sm:h-[420px] h-[360px] left-0 bg-primary2"/>
                    <div className="absolute xl:h-[70%] w-[95%] h-[80%] xl:right-[-109px] right-0 bg-no-repeat bg-cover bg-center bg-[url('/images/HomePage/HomePageOpportunity.png')]">
                        <div className="absolute flex items-center justify-center 2xl:w-[415px] md:w-[350px] sm:w-[250px] w-[167px] xl:h-[139px] md:h-[100px] sm:h-[70px] h-[56px] bottom-0 left-[20%] bg-no-repeat bg-center bg-[url('/images/HomePage/OpportunityYelloGradient.png')]">
                            <div className="sm:w-[80%] w-[87%] flex flex-row items-center sm:gap-5 gap-3">
                                <img className="2xl:w-[65px] xl:w-14 lg:w-12 md:w-10 sm:w-8 w-[26px]" src="/images/Icons/FlyingAir.svg" alt="icon"/>
                                <p className="2xl:text-2xl xl:text-lg md:text-xl sm:text-sm text-[10px] text-heading font-myRubic font-regular">Moving your products across borders</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative xl:w-[50%] w-[100%] 2xl:h-[900px] xl:h-[800px] lg:h-[700px] md:h-[650px] sm:h-[500px] h-[450px] flex items-center justify-center z-0 xl:bg-secondary1">
                    <img className="absolute w-[95%] lg:top-20 top-[100px] " src="/images/HomePage/WorldMapPattern.svg" alt="map"/>
                    <div className="flex flex-col sm:w-[65%] w-[90%] lg:gap-[60px] sm:gap-10 gap-8">
                        <div className="flex flex-col gap-4">
                            <SubTitle title="Why Choose" content="We create opportunity to reach potential" />
                            <p className="w-[88%] sm:text-base text-sm text-paragraph font-myKrub font-medium">
                                Leverage agile frameworks to provide a robust 
                                synopsis for strategy foster collaborative thinking 
                                to further the overall value proposition. 
                            </p>
                        </div>
                        <div className="w-[100%] grid grid-rows-3 grid-cols-2 2xl:gap-x-[72px] 
                                        2xl:gap-y-5 xl:gap-x-10 xl:gap-y-4 lg:gap-x-[70px] lg:gap-y-6 
                                        md:gap-x-10 sm:gap-x-6 sm:gap-y-4 gap-x-2 gap-y-2"
                        >
                            {
                                serviceIconNameInformations.map((item, index) => {
                                    return(
                                        <HomePageServiceIconName2 key={index} iconUrl={item.iconUrl} text={item.text}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomePageOpportunity;