import { Link } from "react-router-dom";
type props = {
    item: {
        icon: string,
        serviceName: string,
        serviceContent: string,
    }
}

function LogisticsItem ({item}: props) {
    return (
        <>
            <div className="container flex flex-row md:flex-col gap-2 md:gap-4">
                <div className="md:w-[84px] w-[55px]">
                    <img src={item.icon} alt="icon"/>
                </div>
                <div className="w-[295px] md:h-[115px] h-[76px] flex flex-col gap-3 pl-[25px] border-l-[2px] border-border_gray md:pl-0 md:border-0">
                    <Link to="/service/detail">
                        <p className=" h-[30px] text-heading md:text-[25px] text-[18px] font-myRubic font-normal hover:text-primary1">
                            {item.serviceName}
                        </p>
                    </Link>
                    <p className="h-[72px] text-paragraph md:text-base text-[14px] font-myKrub font-medium">
                        {item.serviceContent}
                    </p>
                </div>
            </div>
        </>
    )
}
export default LogisticsItem;