import { useRef } from "react";
import { Carousel } from "antd";
import { CustomerSayBoxInformations } from "@/stack/stack";
import CustomerSayBox from "../CustomerSayBox";
import SubTitle from "../SubTitle";
import { CarouselRef } from "antd/es/carousel";

type props = {
    className?: string
};


function HomePageCustomerSay({className = "" }: props) {
    
    const carouselRef = useRef<CarouselRef>(null);
    
    return (
            <div className={`flex flex-col mt-20 mb-20 md:gap-10 sm:gap-14 gap-[70px]${className}`}>
                <div className="flex flex-row justify-between">
                    <SubTitle title="Testimonial" content="What Our Customer Say"/>
                    <div className="flex flex-row gap-3 items-end pr-3">
                        <button className="hover:scale-110 lg:w-[44px] lg:h-[44px] sm:w-[40px] sm:h-[40px] w-[36px] h-[36px] rounded-3xl bg-cover cursor-pointer" 
                            style={{
                                backgroundImage:`url("/assets/icons/VectorYellow.svg")`
                            }}
                            onClick={() => {
                                if (carouselRef.current) {
                                    carouselRef.current.prev();
                                }
                            }}
                        />
                        <button className="hover:scale-110 lg:w-[44px] lg:h-[44px] sm:w-[40px] sm:h-[40px] w-[36px] h-[36px] rounded-3xl bg-cover cursor-pointer" 
                            style={{
                                backgroundImage:`url("/assets/icons/VectorGreen.svg")`
                            }}
                            onClick={() => {
                                if (carouselRef.current) {
                                    carouselRef.current.next();
                                }
                            }}
                        />
                            
                    </div>
                </div>
                <div className="hidden lg:block">
                    <Carousel autoplay autoplaySpeed={3000} slidesToShow={2} ref={carouselRef}>
                        {
                            CustomerSayBoxInformations.map((item, index) => {
                                return(
                                    <CustomerSayBox key={index} item={item}/>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <div className="items-center lg:hidden w-[390px] sm:w-[420px] md:w-[460px] mx-auto">
                    <Carousel autoplay autoplaySpeed={3000} slidesToShow={1} ref={carouselRef}>
                        {
                            CustomerSayBoxInformations.map((item, index) => {
                                return(
                                    <CustomerSayBox key={index} item={item}/>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
    )
}
export default HomePageCustomerSay;