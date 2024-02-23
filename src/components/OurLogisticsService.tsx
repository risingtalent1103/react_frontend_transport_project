import SubTitle from "./SubTitle";
import LogisticsItem from "./LogisticsItem";
import { serviceInformations2 } from "@/stack/stack";
// import BtnMoreWork from "./BtnMoreWork";
import { Link } from "react-router-dom";
import GreenButton from "./GreenButton";

const OurLogisticsService = () => {
    return (
        <div className="w-full flex flex-col gap-[55px] items-center">
            <SubTitle title="What We Do" content="Our Logistics Services" className="items-center"/>
            <div className="w-full grid grid-cols-12 gap-10">
                {
                    serviceInformations2.map((item, index) => {
                        return (
                            <div className="col-span-12 md:col-span-6 xl:col-span-4 mx-auto">
                                <LogisticsItem key={index} item={item}/>
                            </div>
                        )
                    })
                }
            </div>
            <Link to="/service/detail">
                <GreenButton content="More Work" className="w-[194px] h-[60px]"/>
            </Link>
        </div>
    )
}
export default OurLogisticsService;