type props = {
    content: string,
    className?: string
};

function GreenButton({ content, className = "" }: props) {
    return (
        <div className={`group relative flex justify-center items-center bg-primary2 text-base 
                        text-[white] font-myKrub font-semibold cursor-pointer overflow-hidden ${className}`}
        >
            <div className="absolute bottom-[-15px] right-[-10px] w-[30px] h-[35px] rotate-[20deg] 
                                bg-primary3 rounded-[60%] group-hover:scale-[6.2] transition z-0"
            />
            <p className="z-10">
                {content}
            </p>
        </div>
    )
}
export default GreenButton;