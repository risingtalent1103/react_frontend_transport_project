
function HomePageSafeSolution (props:any) {
    return (
        <>
            <div className="container flex flex-row gap-4">
                <div className="md:w-[84px] w-[55px] pl-3">
                    <img src={props.item.icon} alt="icon"/>
                </div>
                <div className="w-[295px] md:h-[115px] h-[76px] flex flex-col gap-3 pl-[25px] border-l border-border_gray">
                    <p className="w-[280px] h-[30px] text-heading md:text-[25px] text-[18px] font-myRubic font-normal">
                        {props.item.serviceName}
                    </p>
                    <p className="h-[72px] text-paragraph md:text-base text-[14px] font-myKrub font-medium">
                        {props.item.serviceContent}
                    </p>
                </div>
            </div>
        </>
    )
}
export default HomePageSafeSolution;