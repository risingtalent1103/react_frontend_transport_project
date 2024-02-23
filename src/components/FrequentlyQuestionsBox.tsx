import { useState } from "react";
import SubTitle from "./SubTitle";
import YellowButton from "./YellowButton";

function FrequentlyQuestionsBox () {

    const [btnState, setBtnState] = useState(1);
    const onButtonClick = (value:any) => {
        setBtnState(value);
    }

    return(
        <>
            <div className="xl:bg-secondary1 bg-[white] w-full xl:h-[739px] flex xl:flex-row flex-col items-center xl:justify-end justify-center xl:gap-[3.6%] gap-[150px]">
                <div className="xl:w-[35%] w-[90%] flex flex-col gap-[50px]">
                    <div className="w-[70%]">
                        <SubTitle title="FAQ" content="Frequently Asked Questions"/>
                    </div>
                    <div className="flex flex-col gap-[44px]">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row select-none justify-between items-center cursor-pointer" onClick={() => onButtonClick(1)}>
                                <p className="md:text-xl sm:text-lg text-base text-heading font-myRubic font-regular">
                                    How can I pay for your logistics services?
                                </p>
                                <img className={btnState ===1 ? `w-[16px] h-[8px]` : `w-[8px] h-[16px]`} src={btnState ===1 ? `/assets/icons/YellowDrop.svg` : `/assets/icons/BlackDrop.svg`} alt="DropArray"/>
                            </div>
                            <p className="w-[85%] sm:text-base text-sm text-paragraph font-myKrub font-medium" style={{display:btnState === 1 ? `block` : `none`}}>
                                Leverage agile frameworks to provide a robust synopsis 
                                for strategy foster collaborative thinking to further 
                                the overall value proposition. Organically grow the 
                                holistic world view of disruptive.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row select-none justify-between items-center cursor-pointer" onClick={() => onButtonClick(2)}>
                                <p className="md:text-xl sm:text-lg text-base text-heading font-myRubic font-regular">
                                    What payment methods are supported?
                                </p>
                                <img className={btnState ===2 ? `w-[16px] h-[8px]` : `w-[8px] h-[16px]`} src={btnState ===2 ? `/assets/icons/YellowDrop.svg` : `/assets/icons/BlackDrop.svg`} alt="DropArray"/>
                            </div>
                            <p className="w-[85%] sm:text-base text-sm text-paragraph font-myKrub font-medium" style={{display:btnState === 2 ? `block` : `none`}}>
                                Leverage agile frameworks to provide a robust synopsis 
                                for strategy foster collaborative thinking to further 
                                the overall value proposition. Organically grow the 
                                holistic world view of disruptive.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row select-none justify-between items-center cursor-pointer" onClick={() => onButtonClick(3)}>
                                <p className="md:text-xl sm:text-lg text-base text-heading font-myRubic font-regular">
                                    What options for logistics plans are available?
                                </p>
                                <img className={btnState ===3 ? `w-[16px] h-[8px]` : `w-[8px] h-[16px]`} src={btnState ===3 ? `/assets/icons/YellowDrop.svg` : `/assets/icons/BlackDrop.svg`} alt="DropArray"/>
                            </div>
                            <p className="w-[85%] sm:text-base text-sm text-paragraph font-myKrub font-medium" style={{display:btnState === 3 ? `block` : `none`}}>
                                Leverage agile frameworks to provide a robust synopsis 
                                for strategy foster collaborative thinking to further 
                                the overall value proposition. Organically grow the 
                                holistic world view of disruptive.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row select-none justify-between items-center cursor-pointer" onClick={() => onButtonClick(4)}>
                                <p className="md:text-xl sm:text-lg text-base text-heading font-myRubic font-regular">
                                    Can I specify a delivery date when ordering?
                                </p>
                                <img className={btnState ===4 ? `w-[16px] h-[8px]` : `w-[8px] h-[16px]`} src={btnState ===4 ? `/assets/icons/YellowDrop.svg` : `/assets/icons/BlackDrop.svg`} alt="DropArray"/>
                            </div>
                            <p className="w-[85%] sm:text-base text-sm text-paragraph font-myKrub font-medium" style={{display:btnState === 4 ? `block` : `none`}}>
                                Leverage agile frameworks to provide a robust synopsis 
                                for strategy foster collaborative thinking to further 
                                the overall value proposition. Organically grow the 
                                holistic world view of disruptive.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative 2xl:w-[798px] xl:w-[700px] md:w-[90%] w-[95%] xl:h-[539px] lg:h-[670px] md:h-[550px] sm:h-[480px] h-[330px] flex items-center">
                    <img className="absolute right-0 2xl:w-[682px] xl:w-[86.5%] sm:w-[90%] w-[95%] h-[100%]" src="/images/AboutUs/QuestionsBoxPerson.png" alt="Person"/>
                    <div className="absolute xl:left-[0] sm:left-[10%] left-[5%] xl:top-auto top-[70%] sm:w-[56%] w-[80%] sm:h-[68%] h-[80%] flex items-center justify-center bg-primary2">
                        <div className="flex flex-col w-[73%] xl:gap-5 md:gap-10 gap-4">
                            <div className="flex flex-col gap-5">
                                <p className="w-[75px] text-[14px] text-[white] text-center font-myRubic font-normal border-l-[4px] border-primary1 bg-primary3 ">
                                    Let’s Talk
                                </p>
                                <div className="md:text-xl sm:text-base text-sm text-[white] font-myRubic font-medium leading-tight ">
                                    You need any help? get free consultation
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <img className="sm:w-[63px] w-[43px]" src="/assets/icons/phoneWhite.svg" alt="phone"/>
                                <p className="sm:text-base text-xs text-[white] font-myKrub font-medium">
                                    Have Any Questions<br/>
                                    (00) 112 365 489
                                </p>
                            </div>
                            <YellowButton content="Contact Us" className="w-[102px] sm:w-[140px] h-[43px] sm:h-[60px]"></YellowButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FrequentlyQuestionsBox;