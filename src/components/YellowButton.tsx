type props = {
    content: string,
    className?: string
};



function YellowButton({ content, className = "" }: props) {
    return (
        <div className={`group relative flex justify-center items-center bg-gradient-to-br from-gradient1 via-gradient2
                      to-gradient3 text-base text-heading font-myKrub font-semibold cursor-pointer overflow-hidden ${className}`}
        >
            <div className="absolute bottom-[-15px] right-[-10px] w-[30px] h-[35px] rotate-[20deg] 
                                bg-secondary1 rounded-[60%] group-hover:scale-[6.2] transition z-0"
            />
            <p className="z-10">
                {content}
            </p>
        </div>
    )
}
export default YellowButton;