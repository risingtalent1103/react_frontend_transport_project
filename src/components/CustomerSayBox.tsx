type props = {
    // 
    item: {
        avatarUrl: string,
        name: string,
        company: string,
        sayContent: string,
        rating: string,
        sayIcon: string,
        backColor: string,
        customerColor: string,
        contentColor: string
    }
    className?: string
};


function CustomerSayBox({item, className = "" }: props) {
    return (
            <div className={`flex flex-col justify-center items-center xl:w-[600px] xl:h-[425px] lg:w-[512px] lg:h-[363px] md:w-[100%] md:h-[326px] sm:w-[420px] sm:h-[305px] w-[390px] h-[283px] gap-6 bg-${item.backColor} ${className}`}>
                <div className="flex flex-row lg:w-[76%] sm:w-[78%] w-[80%]  justify-between items-center">
                    <div className="flex flex-row gap-2.5 items-center">
                        <img className="xl:w-[91px] xl:h-[91px] lg:w-[80px] md:w-[72px] sm:w-[64px] w-[59px]" src={item.avatarUrl} alt="avatar"/>
                        <div className="flex flex-col">
                            <p className={`lg:text-xl md:text-lg sm:text-base text-sm text-${item.customerColor} font-myRubic font-medium`}>{item.name}</p>
                            <p className={`lg:text-base md:text-sm sm:text-xs text-[10px] text-${item.customerColor} font-myKrub font-medium`}>{item.company}</p>
                        </div>
                    </div>
                    <img className="xl:w-[72.8px] xl:h-[72.8px] lg:w-[60px] md:w-[54px] sm:w-[49px] w-[46px]" src={item.sayIcon} alt="icon"/>
                </div>
                <div className="lg:w-[76%] sm:w-[78%] w-[80%] flex flex-col gap-8">
                    <p className={`lg:text-base md:text-sm sm:text-xs text-[11px] text-${item.contentColor} font-myKrub font-medium italic`}>
                        {item.sayContent}
                    </p>
                    <img className="w-[40%] " src={item.rating} alt="stars"/>
                </div>
            </div>
    )
}
export default CustomerSayBox;