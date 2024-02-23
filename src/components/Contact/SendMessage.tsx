import IconAndText from "../IconAndText";
import YellowButton from "../YellowButton";
import clock from "/assets/icons/clock1.svg";
import email from "/assets/icons/email1.svg";
import phone from "/assets/icons/phone1.svg";


const SendMessage = () => {
    return (
        <>
            <div className="w-[95%] sm:w-[80%] mx-auto mt-24 bg-primary2 flex flex-col justify-center items-center px-[2.5%] sm:px-24 py-24">
                <div className="text-[white]  px-3 md:px-0 flex flex-col items-center">
                    <span className="px-2 py-[3px] mb-3 font-myRubic font-normal text-[14px] border-l-[4px] border-primary1 bg-[#184206]/50">
                        Contact
                    </span>
                    <h3 className="font-myRubic font-bold text-[35px] ">
                        Get in touch with us
                    </h3>
                </div>
                <p className="font-medium font-myRubic text-[18px] sm:text-xl text-[white] text-center">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.</p>
                <div className="w-full grid grid-cols-2 lg:grid-cols-3 py-10 gap-y-5">
                    <IconAndText icon={clock} text1="Mon - Sat 9.00 - 18.00" text2="Sunday Closed" meth="1" />
                    <IconAndText icon={email} text1="" text2="contact@logistics.com" meth="1" />
                    <IconAndText icon={phone} text1="" text2="(00) 112 365 489" meth="1" />
                </div>
                <form className="w-full flex flex-col gap-y-8">
                    <div className="flex justify-between flex-col lg:flex-row">
                        <input className="w-full lg:w-[48%] mb-8 lg:mb-0 h-[60px] pl-7 border border-secondary1 focus:border-secondary1
                                                focus:outline-none focus:bg-primary3 bg-transparent placeholder:text-[white] placeholder:font-myLeague
                                                placeholder:text-xl text-[white] font-myLeague text-xl" type="text" placeholder="Your name*"></input>
                        <input className="w-full lg:w-[48%] mb-8 lg:mb-0 h-[60px] pl-7 border border-secondary1 focus:border-secondary1
                                                focus:outline-none focus:bg-primary3 bg-transparent placeholder:text-[white] placeholder:font-myLeague
                                                placeholder:text-xl text-[white] font-myLeague text-xl" type="email" placeholder="Email*"></input>
                    </div>
                    <div className="flex justify-between flex-col lg:flex-row">
                        <input className="w-full lg:w-[48%] mb-8 lg:mb-0 h-[60px] pl-7 border border-secondary1 focus:border-secondary1
                                                focus:outline-none focus:bg-primary3 bg-transparent placeholder:text-[white] placeholder:font-myLeague
                                                placeholder:text-xl text-[white] font-myLeague text-xl" type="tel" placeholder="Phone Number*"></input>
                        <input className="w-full lg:w-[48%] mb-8 lg:mb-0 h-[60px] pl-7 border border-secondary1 focus:border-secondary1
                                                focus:outline-none focus:bg-primary3 bg-transparent placeholder:text-[white] placeholder:font-myLeague
                                                placeholder:text-xl text-[white] font-myLeague text-xl" type="text" placeholder="City*"></input>
                    </div>
                    <textarea className="w-full h-[153px] pl-7 border border-secondary1 focus:border-secondary1
                                                focus:outline-none focus:bg-primary3 bg-transparent placeholder:text-[white] placeholder:font-myLeague
                                                placeholder:text-xl text-[white] font-myLeague text-xl pt-3" placeholder="Your Message"></textarea>
                    {/* <input className="w-[194px] lg:mx-auto h-[60px] bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3 text-[16px] font-myKrub font-semibold text-[#23212A]" type="submit" value="Send Message"></input> */}
                    <YellowButton content="Send Message" className="w-[194px] h-[60px] mx-auto"/>
                </form>
            </div>
        </>
    )
}

export default SendMessage;