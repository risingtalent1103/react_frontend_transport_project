type props = {
    children: JSX.Element | JSX.Element[] | String,
    className?: string
};

function Container({ children, className = "" }: props) {
    return (
        <div className={`container mx-auto `}>
            <div className={`xl:w-[1200px] mx-auto ${className}`}> 
                {children}
            </div>
        </div>
    )
}
export default Container;