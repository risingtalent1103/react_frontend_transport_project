// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { newDatas } from "@/stack/stack";
import SubTitle from "../SubTitle";

const OurLatestNews = () => {
    
    const navigate = useNavigate();
    const toBlogPage = (id: number) => {
        navigate(`/news/detail/:${id}`);
    }
    return (
        <div className="container px-3 lg:px-0">
            {/* title part */}
            <div className="border-b-2 border-secondary1 pt-10 pb-6 mx-auto">
                <SubTitle className="items-center" key="ourlastetnews" title="Our Bolg" content="Our Latest News"/>
            </div>

            {/*Lastest new's main content */}
            {newDatas.map((item, index) => {
                return (
                    <div className="flex flex-col gap-1 md:gap-4 py-[29px] border-b-2 border-secondary1" key={index}>
                        {/* Picture insert part */}
                        <div className="flex flex-row gap-[2px] md:gap-[20px]">
                            <div className="basis-[47%] relative group  cursor-pointer" onClick={() => { toBlogPage(index);}}>
                                <img className="w-full h-full" src={item.url} alt='image new'/>
                                <div className="hidden group-hover:inline-flex bg-[#24361C] opacity-[91%] absolute top-[10%] left-[10%] w-4/5 h-4/5 items-center justify-center">
                                    <span className="text-[white] font-myKrub text-[6.71px] md:text-base">Read More</span>
                                </div>
                            </div>
                            {/* Calender part */}
                            <div className=""> 
                                <div className="flex flex-col items-center px-2">
                                    <img className="w-[22px] h-[23.5px] md:w-[51px] md:h-[56px]" src='/assets/icons/calender.svg'/>
                                    <div className="font-myRubic font-semibold text-[16.77px] md:text-[40px] mx-auto leading-none py-1">
                                        {item.day}
                                    </div>
                                    <div className="font-myKrub text-[6.71px] md:text-[18px] text-[#676F64] leading-none">
                                        {item.month}
                                    </div>
                                </div>
                            </div>
                            {/* Description part */}
                            <div className="basis-[42%] border-l-2 border-secondary1">
                                <div className="flex flex-col pl-[4px] md:pl-[29px] gap-[4px] md:gap-[18px]">
                                    <div className="flex flex-col gap-[4px] md:gap-[16px]">
                                        <p className="font-myRubic font-medium text-[12px] md:text-[25px] hover:text-[#FFBE34] cursor-pointer" onClick={() => {toBlogPage(index)}}>
                                            {item.title}
                                        </p>
                                        <p className="font-myKrub font-medium text-[#676F64] text-[8px] md:text-[16px]">
                                            We are dedicated in creating added value<br/> for our customers by implementing modern technology in our work. 
                                        </p>
                                    </div>
                                    <div className="pl-[16px] md:pl-[29px]">
                                        <ul className="list-disc font-semibold text-[8px] md:text-[16px]">
                                            <li>Urgent transport solutions</li>
                                            <li>Reliable & experienced staffs</li>
                                            <li>Urgent transport solutions</li>
                                            <li>Reliable & experienced staffs</li>
                                        </ul>
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }) }
            
        </div>
    )
}
export default OurLatestNews;