import { Carousel } from "antd";
import SubTitle from "../SubTitle";
import YellowButton from "../YellowButton";
import GreenButton from "../GreenButton";

const cardList = [
    {
        name: "Basic",
        price: "$39",
        term: "/month",
        truck: "Single Truck",
        insurance: "Full Insurance",
        distance: "500 Km",
        realTime: "Real-time rate shopping",
        btnName: "Choose Plan",
        backColor: "secondary1",
        textColor: "heading",
        lineColor: "border_gray",
        btn: 1
    },
    {
        name: "Standard",
        price: "$59",
        term: "/month",
        truck: "Single Truck",
        insurance: "Full Insurance",
        distance: "500 Km",
        realTime: "Real-time rate shopping",
        btnName: "Choose Plan",
        backColor: "primary2",
        textColor: "secondary1",
        lineColor: "primary3",
        btn: 0
    },
    {
        name: "Premium",
        price: "$89",
        term: "/month",
        truck: "Double Truck",
        insurance: "Full Insurance",
        distance: "Unlimited",
        realTime: "Real-time rate shopping",
        btnName: "Choose Plan",
        backColor: "secondary1",
        textColor: "heading",
        lineColor: "border_gray",
        btn: 1
    }
]

const OurBestPricing = () => {
    return (
        <>
            <div className="flex flex-col w-full gap-[70px] items-center py-24">
                <SubTitle title="Pricing" content="Our Best Pricing" className="items-center"/>
                <div className="w-full hidden xl:flex xl:justify-between">
                    {
                        cardList.map((item) => {
                            return <div className={`py-16 px-16 flex flex-col justify-center text-center text-${item.textColor} bg-${item.backColor}`}>
                                        <p className={`font-myRubic font-medium text-${item.textColor} text-4xl`}>{item.name}</p>
                                        <div>
                                            <span className="font-myRubic font-medium   text-[85px]">{item.price}</span>
                                            <span className="font-myRubic font-normal text-[22px]">{item.term}</span>
                                        </div>
                                        <div className={`font-myRubic font-normal text-xl border-t border-t-${item.lineColor} py-4`}>
                                            {item.truck}
                                        </div>
                                        <div className={`font-myRubic font-normal text-xl border-t border-t-${item.lineColor} py-4`}>
                                            {item.insurance}
                                        </div>
                                        <div className={`font-myRubic font-normal text-xl border-t border-t-${item.lineColor} py-4`}>
                                            {item.distance}
                                        </div>
                                        <div className={`font-myRubic font-normal text-xl border-t border-t-${item.lineColor} border-b border-b-${item.lineColor} py-4`}>
                                            {item.btnName}
                                        </div>
                                        {
                                            item.btn === 0 ? <YellowButton content="Choose Plan" className="w-[194px] h-[60px] mx-auto mt-12"/>
                                            : <GreenButton content="Choose Plan" className="w-[194px] h-[60px] mx-auto mt-12"/> 
                                        }
                                    </div>
                        })
                    }

                </div>
                <div className="w-[400px] block xl:hidden">
                    <Carousel autoplay autoplaySpeed={3000} slidesToShow={1}>
                        {
                            cardList.map((item) => {
                                return <div className={`py-16 px-16 flex flex-col justify-center text-center bg-${item.backColor}`}>
                                    <p className={`font-myRubic font-medium text-${item.textColor} text-4xl`}>{item.name}</p>
                                    <div>
                                        <span className="font-myRubic font-medium text-[85px]">{item.price}</span>
                                        <span className="font-myRubic font-normal text-[22px]">{item.term}</span>
                                    </div>
                                    <div className={`font-myRubic font-normal text-xl border-t border-t-${item.lineColor} py-4`}>
                                        {item.truck}
                                    </div>
                                    <div className={`font-myRubic font-normal text-xl border-t border-t-${item.lineColor} py-4`}>
                                        {item.insurance}
                                    </div>
                                    <div className={`font-myRubic font-normal text-xl border-t border-t-${item.lineColor} py-4`}>
                                        {item.distance}
                                    </div>
                                    <div className={`font-myRubic font-normal text-xl border-t border-t-${item.lineColor} border-b border-b-${item.lineColor} py-4`}>
                                        {item.btnName}
                                    </div>
                                    {
                                        item.btn === 0 ? <YellowButton content="Choose Plan" className="w-[194px] h-[60px] mx-auto mt-12"/>
                                        : <GreenButton content="Choose Plan" className="w-[194px] h-[60px] mx-auto mt-12"/> 
                                    }
                                </div>

                            })
                        }
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default OurBestPricing;