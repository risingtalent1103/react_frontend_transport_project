type props = {
    icon: string;
    text1: string;
    text2: string;
    meth: string;
    className?:string;
};

function IconAndText({ icon, text1, text2, meth, className="" }: props) {
    return (
        <>
            {
                meth === "0" ? <div className={`${className} flex justify-between items-center gap-[15px]`} >
                    <div className="rounded-[50%] hover:scale-110 group border-[#70B454] border-[1px] bg-primary5 w-[50px] sm:w-[63px] h-[50px] sm:h-[63px] flex justify-center items-center">
                        <img src={icon} className="group-hover:scale-[1.7] cursor-pointer w-[17px] sm:w-[22px] h-[17px] sm:h-[22px]" alt={icon} />
                    </div>
                    <h6 className="text-[white] text-[11px] sm:text-[14px] font-myKrub font-medium">
                        {text1} <br />
                        {text2}
                    </h6>
                </div> : <div className="flex flex-col lg:items-center gap-[15px]">
                    <div className="rounded-[50%] hover:scale-110 group border-[#70B454] border-[1px] bg-[70B454] w-[50px] sm:w-[63px] h-[50px] sm:h-[63px] flex justify-center items-center">
                        <img src={icon} className="group-hover:scale-[1.7] cursor-pointer w-[17px] sm:w-[22px] h-[17px] sm:h-[22px]" alt={icon} />
                    </div>
                    <div className="text-[white] text-[11px] sm:text-[14px] font-myKrub font-medium lg:text-center">
                        {
                            text1.length > 0 && <p>{text1}</p>
                        }
                        {text2}
                    </div>
                </div>
            }
        </>
    )
}
export default IconAndText;