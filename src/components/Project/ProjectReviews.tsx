const ProjectReviews = () => {
    return (
        <>
            <div className="border-0 w-full h-[1px] bg-gradient-to-r from-[white] via-[#D4D4D4] to-[white]"></div>
            <div className="hidden xl:grid grid-cols-4 w-full">
                <div className="flex items-center justify-center h-[156px] border-r-[#D4D4D4] border-r">
                    <p className="font-myRubic text-5xl font-semibold text-heading pr-4">24</p>
                    <div className="w-[17px] h-[17px] bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3"></div>
                    <p className="text-normal text-xl pl-4">Our Location</p>
                </div>
                <div className="flex items-center justify-center h-[156px] border-r-[#D4D4D4] border-r">
                    <p className="font-myRubic text-5xl font-semibold text-heading pr-4">1294</p>
                    <div className="w-[17px] h-[17px] bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3"></div>
                    <p className="text-normal text-xl pl-4">Delivered Packages</p>
                </div>
                <div className="flex items-center justify-center h-[156px] border-r-[#D4D4D4] border-r">
                    <p className="font-myRubic text-5xl font-semibold text-heading pr-4">3594</p>
                    <div className="w-[17px] h-[17px] bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3"></div>
                    <p className="text-normal text-xl pl-4">Satisfied Clients</p>
                </div>
                <div className="flex items-center justify-center h-[156px]">
                    <p className="font-myRubic text-5xl font-semibold text-heading pr-4">247+</p>
                    <div className="w-[17px] h-[17px] bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3"></div>
                    <p className="text-normal text-xl pl-4">Owned Vehicles</p>
                </div>
            </div>
            <div className="xl:hidden grid grid-cols-2 w-full">
                <div className="flex items-center pl-5 h-[57px] sm:h-[156px] border-r-[#D4D4D4] border-r">
                    <p className="font-myRubic text-2xl sm:text-5xl font-semibold text-heading pr-2 sm:pr-4">24</p>
                    <div className="w-[11.56px] sm:w-[17px] h-[11.56px] sm:h-[17px] bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3"></div>
                    <p className="text-normal text-xs sm:text-xl pl-2 sm:pl-4">Our Location</p>
                </div>
                <div className="flex items-center pl-5 h-[57px] sm:h-[156px]">
                    <p className="font-myRubic text-2xl sm:text-5xl font-semibold text-heading pr-2 sm:pr-4">1294</p>
                    <div className="w-[11.56px] sm:w-[17px] h-[11.56px] sm:h-[17px] bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3"></div>
                    <p className="text-normal text-xs sm:text-xl pl-2 sm:pl-4">Delivered Packages</p>
                </div>
            </div>
            <div className="border-0 w-full h-px bg-gradient-to-r from-[white] via-[#D4D4D4] to-[white]"></div>
            <div className="xl:hidden grid grid-cols-2 w-full pb-16">
                <div className="flex items-center pl-5 h-[57px] sm:h-[156px] border-r-[#D4D4D4] border-r">
                    <p className="font-myRubic text-2xl sm:text-5xl font-semibold text-heading pr-2 sm:pr-4">3594</p>
                    <div className="w-[11.56px] sm:w-[17px] h-[11.56px] sm:h-[17px] bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3"></div>
                    <p className="text-normal text-xs sm:text-xl pl-2 sm:pl-4">Satisfied Clients</p>
                </div>
                <div className="flex items-center pl-5 h-[57px] sm:h-[156px]">
                    <p className="font-myRubic text-2xl sm:text-5xl font-semibold text-heading pr-2 sm:pr-4">247+</p>
                    <div className="w-[11.56px] sm:w-[17px] h-[11.56px] sm:h-[17px] bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3"></div>
                    <p className="text-normal text-xs sm:text-xl pl-2 sm:pl-4">Owned Vehicles</p>
                </div>
            </div>
        </>
    )
}

export default ProjectReviews;