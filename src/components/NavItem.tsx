type props = {
    text: string;
    isActive?: boolean;
    meth:string;
    className?: string;
};

function NavItem({ text, isActive, meth, className }: props) {

    return (
        <>
            {
                meth === "laptop" ?  <div className="flex items-center cursor-pointer">
                    <div className={`text-[white]  text-[16px] ${isActive ? "border-b-[whilte] border-b-[2px]" : ""} h-[78px] flex items-center`}>
                        {text}
                    </div>
                </div> :  <div className="flex cursor-pointer">
                    <div className={`${className} my-3 text-secondary1 font-myKrub font-bold text-[16px] ${isActive ? "border-l-[white] border-l-[2px]" : ""} h-[20px] flex items-center`}>
                        {text}
                    </div>
                </div>
            }
        </>
    )
}
export default NavItem;