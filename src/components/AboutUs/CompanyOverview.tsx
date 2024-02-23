import GreenButton from "../GreenButton";
import SubTitle from "../SubTitle";

type props = {
    className?: string
};


function CompanyOverview({ className = "" }: props) {
    return (
            <div className={`container 2xl:w-[1470px] sm:w-auto w-[95vw] mx-auto flex xl:flex-row flex-col-reverse items-center xl:gap-[6.8%] gap-10 my-[100px] ${className}`}>
                <div className="relative  xl:w-[52%] sm:w-[100%] w-[95%] 2xl:h-[531px] xl:h-[470px] lg:h-[700px] md:h-[520px] sm:h-[420px] h-[277px]">
                    <img className="absolute w-[94.7%] top-0 left-0" src="/images/AboutUs/AboutUsTruck.png" alt="Truck"/>
                    <img className="absolute w-[32.2%] bottom-0 right-0 sm:border-t-[25px] border-t-[12px] sm:border-l-[25px] border-l-[12px] border-[white]" src="/images/AboutUs/AboutUsPerson.png" alt="Person"/>
                </div>
                <div className="flex flex-col xl:w-[41%] md:w-[70%] w-[95%] gap-9 justify-center items-start">
                    <div className="flex flex-col gap-[19px]">
                        <div className="flex flex-col gap-3">
                            <SubTitle title="About Us" content="Our Company Overview"/>
                            <p className="sm:text-base text-sm text-paragraph font-myKrub font-medium">
                                Leverage agile frameworks to provide a robust synopsis 
                                for strategy foster collaborative thinking to further 
                                the overall value proposition.
                            </p>
                        </div>
                        <div className="flex flex-col gap-7">
                            <div className="flex flex-row gap-[2.3%]">
                                <button className="w-[31.7%] h-[60px] bg-primary1 text-[white] xl:text-lg lg:text-base sm:text-sm text-xs font-myKrub font-medium">
                                    Our Approach
                                </button>
                                <button className="w-[31.7%] h-[60px] bg-secondary1 text-heading xl:text-lg lg:text-base sm:text-sm text-xs font-myKrub font-semibold">
                                    Our Approach
                                </button>
                                <button className="w-[31.7%] h-[60px] bg-secondary1 text-heading xl:text-lg lg:text-base sm:text-sm text-xs font-myKrub font-semibold">
                                    Our Approach
                                </button>
                            </div>
                            <p className="sm:text-base text-sm text-paragraph font-myKrub font-medium">
                                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem 
                                accusantium doloremque laudantium, totam rem aperiam eaque ipsa, 
                                quae ab illo inventore veritatis et quasi architecto beatae vitae 
                                dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.
                            </p>
                        </div>
                    </div>
                    <GreenButton content="Learn More" className="w-[194px] h-[60px]"/>
                </div>
            </div>
    )
}
export default CompanyOverview;