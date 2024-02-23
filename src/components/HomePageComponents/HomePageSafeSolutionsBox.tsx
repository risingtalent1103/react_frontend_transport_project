import {serviceInformations} from "@/stack/stack"
import HomePageSafeSolution from "./HomePageSafeSolution";

const HomePageSafeSolutionsBox = () => {
    return(
        <>
            <div className="flex xl:flex-row flex-col mt-[96px] mb-[96px] gap-[30px] xl:items-start items-center justify-center">
                <div className="flex flex-col xl:w-[294px] gap-[15px] xl:items-start md:items-center">
                    <p className="w-[96px] h-[23px] bg-secondary1 border-l-4 border-primary1 pl-[10px] md:text-[14px] text-[12px] font-myRubic font-normal flex items-center">
                        What We Do
                    </p>
                    <p className="w-[294px] xl:text-left md:text-center text-light md:leading-[40px] md:text-[35px] text-[24px] font-myRubic font-semibold">
                        Safe & Reliable Cargo Solutions
                    </p>
                </div>
                <div className="xl:w-[900px] w-[100%] grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-[83px] lg:gap-y-[70px] gap-x-[43px] gap-y-[40px] justify-center">
                    {
                        serviceInformations.map((item, index) => {
                            return <HomePageSafeSolution item={item} key={index}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default HomePageSafeSolutionsBox;