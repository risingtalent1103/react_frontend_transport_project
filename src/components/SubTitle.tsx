type props = {
    title: string,
    content?: string,
    className?: string,
};


function SubTitle({ title, content = "", className = "items-start" }: props) {
    return(
        <div className={`flex flex-col gap-5 ${className}`}>
            <span className="font-myKubic font-normal text-[14px]  px-2 border-l-[4px] border-primary1 bg-secondary1 text-heading">
                {title}
            </span>
            <div className="font-myRubic font-semibold lg:text-[35px] md:text-[32px] sm:text-[28px] text-2xl leading-tight text-heading ">
                {content}
            </div>
        </div>
    )
}
export default SubTitle;


