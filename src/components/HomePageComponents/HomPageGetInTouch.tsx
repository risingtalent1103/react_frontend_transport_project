import IconAndText from "../IconAndText";
import YellowButton from "../YellowButton";
import clock from "/assets/icons/clock.svg";
import email from "/assets/icons/email.svg";
import phone from "/assets/icons/phone.svg";

const GetInTouch = () => {
    return (
        <>
            <div className="container xl:w-[1200px] mx-auto flex flex-col md:flex-row justify-between">
                <div className="basis-[37%]">
                    <div className="text-[white]  px-3 md:px-0 flex flex-col">
                        <span className="w-[80px] px-2 py-[3px] mb-3 font-myRubic font-normal text-[12px] sm:text-[14px] border-l-[4px] border-primary1 bg-primary3">
                            Contact
                        </span>
                        <h3 className="font-myRubic font-bold text-2xl sm:text-[35px] ">
                            Get in touch with us
                        </h3>
                        <div className="w-[80%] font-myKrub font-medium text-[14px] sm:text-base text-[white] mt-5">
                            Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.
                        </div>
                    </div>
                    <div className="w-full flex flex-wrap-reverse sm:flex-wrap sm:flex-col py-10 gap-y-8 gap-x-10">
                        <IconAndText className="w-[185px] sm:w-[230px]" icon={clock} text1="Mon - Sat 9.00 - 18.00" text2="Sunday Closed" meth="0" />
                        <IconAndText className="w-[185px] sm:w-[230px]" icon={email} text1="Email" text2="contact@logistics.com" meth="0" />
                        <IconAndText className="w-[155px] sm:w-[185px]" icon={phone} text1="Call Us" text2="(00) 112 365 489" meth="0" />
                    </div>
                </div>
                <form className="basis-[63%] flex flex-col gap-y-8 pt-[42px]">
                    <div className="flex justify-between flex-col lg:flex-row">
                        <input className="w-full lg:w-[48%] mb-8 lg:mb-0 h-[60px] pl-7 border border-[#70B454] focus:border-[#70B454]
                                                focus:outline-none focus:bg-primary3 bg-transparent placeholder:text-[white] placeholder:font-myLeague
                                                placeholder:text-xl text-[white] font-myLeague text-xl" type="text" placeholder="Your name*"></input>
                        <input className="w-full lg:w-[48%] h-[60px] pl-7 border border-[#70B454] focus:border-[#70B454]
                                                focus:outline-none focus:bg-primary3 bg-transparent placeholder:text-[white] placeholder:font-myLeague
                                                placeholder:text-xl text-[white] font-myLeague text-xl" type="email" placeholder="Email*"></input>
                    </div>
                    <div className="flex justify-between flex-col lg:flex-row">
                        <input className="w-full lg:w-[48%] mb-8 lg:mb-0 h-[60px] pl-7 border border-[#70B454] focus:border-[#70B454]
                                                focus:outline-none focus:bg-primary3 bg-transparent placeholder:text-[white] placeholder:font-myLeague
                                                placeholder:text-xl text-[white] font-myLeague text-xl" type="tel" placeholder="Phone Number*"></input>
                        <input className="w-full lg:w-[48%] h-[60px] pl-7 border border-[#70B454] focus:border-[#70B454]
                                                focus:outline-none focus:bg-primary2 bg-transparent placeholder:text-[white] placeholder:font-myLeague
                                                placeholder:text-xl text-[white] font-myLeague text-xl" type="text" placeholder="City*"></input>
                    </div>
                    <textarea className="w-full h-[153px] pl-7 border border-[#70B454] focus:border-[#70B454]
                                                focus:outline-none focus:bg-primary3 bg-transparent placeholder:text-[white] placeholder:font-myLeague
                                                placeholder:text-xl text-[white] font-myLeague text-xl pt-3" placeholder="Your Message"></textarea>
                    <YellowButton content="Send Message" className="w-[194px] h-[60px]"/>
                </form>
            </div>
        </>
    )
}

export default GetInTouch;