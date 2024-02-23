import { serviceImageCardInformations } from "@/stack/stack";
import ServiceImageCard from "./ServiceImageCard";
import { Carousel } from "antd";
import GreenButton from "../GreenButton";
import { Link } from "react-router-dom";

type props = {
    className?: string
};


function ServiceImageCardBox({className = "" }: props) {
    return (
            <div className={`flex flex-col md:gap-[65px] sm:gap-[75px] gap-[80px] bg-[url('/images/HomePageBackground-3.png')] xl:bg-[length:1920px_400px] md:bg-[length:1500px_350px] sm:bg-[length:900px_300px] bg-[length:700px_280px] bg-no-repeat bg-bottom ${className}`}>
                <div className="flex flex-col lg:gap-[35px] md:gap-[50px] sm:gap-[60px] gap-[70px]">
                    <p className="md:text-[35px] sm:text-2xl text-xl text-heading font-myRubic font-semibold text-center">
                        Transporting Across The World
                    </p>
                    <div className="hidden 2xl:block">
                        <Carousel slidesToShow={5}>
                            {
                                serviceImageCardInformations.map((item, index) => {
                                    return(
                                        <ServiceImageCard item={item} key={index} />
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                    <div className="hidden xl:block 2xl:hidden">
                        <Carousel slidesToShow={4}>
                            {
                                serviceImageCardInformations.map((item, index) => {
                                    return(
                                        <ServiceImageCard item={item} key={index} />
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                    <div className="hidden lg:block xl:hidden">
                        <Carousel slidesToShow={3}>
                            {
                                serviceImageCardInformations.map((item, index) => {
                                    return(
                                        <ServiceImageCard item={item} key={index} />
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                    <div className="sm:block lg:hidden">
                        <Carousel slidesToShow={2}>
                            {
                                serviceImageCardInformations.map((item, index) => {
                                    return(
                                        <ServiceImageCard item={item} key={index} />
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </div>
                <Link to="/project/detail/:1"><GreenButton content="More Work" className="mx-auto lg:mb-[150px] sm:mb-[100px] mb-[50px] w-[194px] h-[60px]"/></Link>
            </div>
    )
}
export default ServiceImageCardBox;