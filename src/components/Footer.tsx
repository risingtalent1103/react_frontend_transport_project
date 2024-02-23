import { Link } from "react-router-dom";

import Container from "./Container";
import IconAndText from "./IconAndText";
import YellowButton from "./YellowButton";
import email from "/assets/icons/email.svg";
import phone from "/assets/icons/phone.svg";

function Footer() {
    return (
        <div className="xl:relative w-full xl:h-[562px] bg-primary2 xl:pb-0 pb-[45px]">
            <div className="xl:block hidden xl:absolute top-0 w-full h-[118px]  bg-[white] opacity-10 z-0"/>
            <Container className="xl:relative flex xl:flex-row flex-col xl:items-start items-center justify-end ">
                <div 
                    className="xl:absolute left-[-45px] pt-[45px] xl:w-[427px] xl:h-[395px]  w-[90%] 
                                flex flex-col items-center xl:gap-[77px] lg:gap-[50px] md:gap-[40px] sm:gap-10 gap-6 
                                xl:border-x-[54px] border-primary2 bg-primary2"
                >
                    <img className="xl:w-[95%] sm:w-[50%] w-[60%]" src="/assets/icons/logo.svg" alt="Logo"/>
                    <div className="w-full flex flex-col xl:gap-8 lg:gap-10 sm:gap-10 gap-6">
                        <p className="xl:text-start text-center md:text-base sm:text-sm text-xs text-[white] leading-relaxed font-myKrub font-medium">
                            Leverage agile frameworks to provide a robust 
                            synopsis for strategy  collaborative thinking 
                            to further the overall value proposition.
                        </p>
                        <div className="flex xl:flex-col xl:w-auto w-[100%] justify-center xl:gap-[30px] md:gap-[14%] sm:gap-[10%] gap-[7%]">
                                <IconAndText className="w-[180px] sm:w-[227px]" icon={email} text1="Email" text2="contact@logistics.com" meth="0" />
                                <IconAndText className="min-w-[150px] sm:w-[185px]" icon={phone} text1="Call Us" text2="(00) 112 365 489" meth="0" />
                        </div>
                    </div>
                </div>
                <div className="xl:mt-12 md:mt-[105px] sm:mt-[80px] mt-[50px] xl:w-auto sm:w-[60%] w-[80%] flex xl:flex-row flex-col xl:gap-[140px] md:gap-[100px] sm:gap-[70px] gap-[40px]">
                    <div className="flex flex-row xl:gap-[140px] sm:gap-[40%] gap-[30%]">
                        <div className="flex flex-col md:gap-[74px] sm:gap-13 gap-8">
                            <p className="text-2xl text-[white] font-myRubic font-medium">
                                Pages
                            </p>
                            <div className="flex flex-col sm:gap-5 gap-3">
                                <Link to="/aboutus"><p className="text-base text-[white] font-myKrub font-medium cursor-pointer">About Us</p></Link>
                                <Link to="/team"><p className="text-base text-[white] font-myKrub font-medium cursor-pointer">Our Team</p></Link>
                                <Link to="/project/list"><p className="text-base text-[white] font-myKrub font-medium cursor-pointer">Our Project</p></Link>
                                <Link to="/pricing"><p className="text-base text-[white] font-myKrub font-medium cursor-pointer">Pricing</p></Link>
                                <Link to="/contact"><p className="text-base text-[white] font-myKrub font-medium cursor-pointer">Contact</p></Link>
                            </div>
                        </div>
                        <div className="flex flex-col md:gap-[74px] sm:gap-13 gap-8">
                            <p className="text-2xl text-[white] font-myRubic font-medium">
                                Utility
                            </p>
                            <div className="flex flex-col sm:gap-5 gap-3">
                                <Link to="/styleguide"><p className="text-base text-[white] font-myKrub font-medium cursor-pointer">Style Guide</p></Link>
                                <Link to="/changelog"><p className="text-base text-[white] font-myKrub font-medium cursor-pointer">Changelog</p></Link>
                                <Link to="/license"><p className="text-base text-[white] font-myKrub font-medium cursor-pointer">Licenses</p></Link>
                                <Link to="/protection"><p className="text-base text-[white] font-myKrub font-medium cursor-pointer">Protected</p></Link>
                                <Link to="/pagenotfound"><p className="text-base text-[white] font-myKrub font-medium cursor-pointer">Not Found</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col xl:gap-[85px] md:gap-[60px] sm:gap-10 gap-7">
                        <p className="text-2xl text-[white] font-myRubic font-medium">
                            Subscribe
                        </p>
                        <div className="flex flex-col xl:gap-5 md:gap-10 sm:gap-8 gap-5">
                            <input type="email" 
                                    className="xl:w-[303px] w-[100%] h-[60px] pl-7 border border-[#70B454] focus:border-[#70B454] 
                                                focus:outline-none focus:bg-primary3 bg-transparent placeholder:text-[white] placeholder:font-myLeague 
                                                placeholder:text-xl text-[white] font-myLeague text-xl"
                                    placeholder="Email Here*"
                            />
                            <div className="flex flex-row xl:gap-[35px] sm:gap-[20%] gap-[15%] items-center">
                                <YellowButton content="Send Me" className="h-[60px] w-[148px]"/>
                                <div className="flex flex-row sm:gap-[23px] gap-4 items-center">
                                    <img className="w-[21.75px] h-[21.75px] hover:scale-125 transition cursor-pointer" src="/assets/icons/linkedinwhite.svg" alt="Linkedin"/>
                                    <img className="w-[21.5px] h-[17.1px] hover:scale-125 transition cursor-pointer" src="/assets/icons/twitterwhite.svg" alt="Twitter"/>
                                    <img className="w-[23px] h-[21.5px] hover:scale-125 transition cursor-pointer" src="/assets/icons/facebookwhite.svg" alt="Facebook"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Footer;