
type props = {
    // 
    item: {
        imgUrl: string,
        serviceCardName: string,
        serviceCardContent: string,
    }
};

function ServiceImageCard({ item }: props) {
    return (
            <div className={`mx-auto relative 2xl:w-[300px] 2xl:h-[385px] xl:w-[320px] xl:h-[407px] lg:w-[325px] lg:h-[400px] w-[48vw] h-[58vmin] bg-cover`} style={{backgroundImage:`url("${item.imgUrl}")`}}>
                <div className="absolute left-[25px] bottom-[19px] flex flex-col gap-2">
                    <p className="md:text-xl sm:text-base text-[11px] text-[white] font-myRubic font-medium">
                        {item.serviceCardName}
                    </p>
                    <p className="md:text-base sm:text-xs text-[9px] text-primary1 font-myKrub font-medium">
                        {item.serviceCardContent}
                    </p>
                </div>
            </div>
    )
}
export default ServiceImageCard;