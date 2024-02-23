type props = {
    item: {
        avatarUrl: string,
        name: string,
        position: string,        
    }
    className?: string
};


function TeamMemberCard({item, className = "" }: props) {
    return (
            <div className={`flex flex-col sm:w-auto w-[119.75px] xl:h-[538px] lg:h-[458px] md:h-[342px] sm:h-[285px] h-[177px] ${className}`}>
                <img className="" src={item.avatarUrl} alt="member"/>
                <div className="relative h-[20%] bg-heading">
                    <div className="absolute bottom-[14%] left-[8.7%] flex flex-col">
                        <p className="xl:text-xl lg:text-base md:text-sm sm:text-xs text-[8px] text-[white] font-myRubic font-medium">{item.name}</p>
                        <p className="xl:text-base lg:text-sm md:text-xs sm:text-[8px] text-[6px] text-[white] font-myKrub font-medium">{item.position}</p>
                    </div>
                    <div className="absolute flex flex-row lg:gap-6 sm:gap-4 gap-2 justify-center items-center w-[54%] h-[55%] bottom-[72.5%] right-0 bg-gradient-to-tr from-gradient1 to-gradient2">
                        <img className="w-[11%] h-[36%] cursor-pointer hover:scale-125 transition" src="/assets/icons/Linkedin.svg" alt="Linkedin"/>
                        <img className="w-[11%] h-[36%] cursor-pointer hover:scale-125 transition" src="/assets/icons/twitter.svg" alt="Twitter"/>
                        <img className="w-[11%] h-[36%] cursor-pointer hover:scale-125 transition" src="/assets/icons/facebook.svg" alt="Facebook"/>
                        <img className="w-[11%] h-[36%] cursor-pointer hover:scale-125 transition" src="/assets/icons/instagram.svg" alt="Instagram"/>
                    </div>
                </div>
            </div>
    )
}
export default TeamMemberCard;