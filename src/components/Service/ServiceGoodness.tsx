import Container from "../Container";
import SubTitle from "../SubTitle";
import ServiceGoodnessItem from "./ServiceGoodnessItem";

const data = [
    {
        imgUrl: "/assets/icons/warehouse.svg",
        title: "Warehousing Services",
    },
    {
        imgUrl: "/assets/icons/safety.svg",
        title: "Safety & Quality",
    },
    {
        imgUrl: "/assets/icons/care.svg",
        title: "Care for Environment"
    }
]

const ServiceGoodness = () => {
    return (
        <div className="mx-[20px]">
                
            <Container className="flex flex-col items-center mx-auto]">
                <SubTitle title="Our Goodness" content="How We Works" className="items-center pb-8"/>
                <div className="flex flex-col-reverse md:flex-row gap-[40px] lg:gap-[60px]">
                    <div className="flex-1 relative">
                        <img className="h-full w-full pb-4 lg:pb-8" src="/images/service/GoodnessBig.png" alt="Big"/>
                        <div className="absolute h-[30vw] md:h-[200px] w-[30vw] md:w-[200px] bg-[white] bottom-0 right-0">
                            <div className="relative h-full w-full">
                                <div className="absolute h-full w-full right-[-1rem] bottom-[-1rem]">
                                    <img className="w-full h-full" src="/images/service/GoodnessSmall.png" alt="Small" />
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className="flex-1 md:py-8 flex flex-col gap-4 lg:gap-8 pr-10">
                        {
                            data.map((item, index) => {
                                return (
                                    <ServiceGoodnessItem key={index}  imgUrl={item.imgUrl} title={item.title}/>
                                )
                            })
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}   
export default ServiceGoodness;