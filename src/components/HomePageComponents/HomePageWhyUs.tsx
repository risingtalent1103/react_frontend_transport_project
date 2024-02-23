import HomePageServiceIconName1 from "./HomePageServiceIconName1";
import icon1 from "/assets/icons/icon1.svg"
import icon7 from "/assets/icons/icon7.svg"
import HomePageWhyUsImageCard from "./HomePageWhyUsImageCard";

type props = {
    className? : string,
}

const HomePageWhyUs = ({ className = "" }: props) => {
    return(
        <>
            <div className={`xl:h-[547px] xl:w-[100%] w-[90%] xl:pt-[85px] pt-[30px] flex xl:flex-row flex-col justify-center items-center bg-[white] xl:gap-0 gap-[30px] ${className}`}>
                <div className="xl:w-[45%] w-[90%] flex flex-col gap-[25px]">
                    <div className=" flex flex-col gap-3">
                        <p className="sm:w-[68px] w-[61px] h-[23px] sm:text-[14px] text-xs font-myRubic font-normal
                                     text-heading bg-secondary1 border-l-4 border-primary1 
                                     flex items-center justify-center"
                        >
                            Why Us
                        </p>
                        <p className="sm:text-[35px] sm:leading-[42px] text-2xl font-myRubic font-semibold">
                            We provide full range global logistics solution
                        </p>
                        <p className="h-[144px] sm:text-base text-[14px] font-myKrub font-regular">
                            Leverage agile frameworks to provide a robust synopsis 
                            for strategy foster collaborative thinking to further the overall value proposition.
                            <br/><br/>
                            Organically grow the holistic world view of 
                            disruptive innovation via workplace diversity and empowerment.
                        </p>
                    </div>
                    <div className="flex flex-col gap-[22px]">
                        <HomePageServiceIconName1 iconUrl={icon1} text="Delivery on Time"/>
                        <HomePageServiceIconName1 iconUrl={icon7} text="Optimized Travel Cost"/>
                    </div>
                </div>
                <HomePageWhyUsImageCard className="ml-[-16px]"/>
            </div>
        </>
    )
}

export default HomePageWhyUs;