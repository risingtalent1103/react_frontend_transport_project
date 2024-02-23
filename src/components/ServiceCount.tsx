type props = {
    number: string,
    serviceContent: string,
    className?: string
};

function ServiceCount({ number, serviceContent, className = "" }: props) {
    return (
            <div className={`flex flex-row sm:gap-4 gap-2 items-center justify-center ${className}`}>
                <p className="lg:text-[50px] sm:text-[35px] text-2xl text-heading font-myRubic font-semibold">{number}</p>
                <button className="lg:w-[17px] lg:h-[17px] sm:w-3 sm:h-3 w-[9px] h-[9px] bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3 "/>
                <p className="lg:text-[20px] sm:text-base text-[10px] text-heading font-regular font-myLeague">{serviceContent}</p>
            </div>
    )
}
export default ServiceCount;