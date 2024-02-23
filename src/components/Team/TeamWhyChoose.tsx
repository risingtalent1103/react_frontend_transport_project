import Container from "../Container";
import SubTitle from "../SubTitle";
import TeamWhyChooseItem from "./TeamWhyChooseItem";

const data = [
    {
        imgUrl: "/assets/icons/vission.svg",
        title: "Our Vission",
    },
    {
        imgUrl: "/assets/icons/estimate.svg",
        title: "Estimate Shipping",
    },
]

const  TeamWhyChoose = () => {
    return (
        <div className="mx-[20px]">
                
            <Container className="flex flex-col items-center mx-auto]">
                
                <div className="flex flex-col-reverse md:flex-row gap-[40px] lg:gap-[60px]">
                    <div className="flex-1 relative">
                        <img className="h-full w-full pb-4 lg:pb-8" src="/images/team/TeamWhyChooseBig.png" alt="Big"/>
                        <div className="absolute h-[30vw] md:h-[200px] w-[30vw] md:w-[200px] bg-[white] bottom-0 right-0">
                            <div className="relative h-full w-full">
                                <div className="absolute h-full w-full right-[-1rem] bottom-[-1rem]">
                                    <img className="w-full h-full" src="/images/team/TeamWhyChooseSmall.png" alt="Small" />
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className="flex-1 md:py-8 flex flex-col gap-4 lg:gap-8 pr-10">
                        <div className="border-b border-[#D6D6D6] ">
                            <SubTitle title="About" content="Why Choose Us" className="pb-8"/>
                            <p className="mb-8 font-myKrub font-medium lg:text-base text-paragraph">
                                Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.
                            </p>
                        </div>
                        <div className="flex flex-row gap-8">
                            {
                                data.map((item, index) => {
                                    return (
                                        <TeamWhyChooseItem key={index}  imgUrl={item.imgUrl} title={item.title}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}   
export default TeamWhyChoose;