type props = {
    iconUrl: string;
    text: string;
};

//Use this in the Service List (icon and name) in HomePage.
function HomePageServiceIconName2 ({iconUrl, text}: props) {
    return(
        <>
            <div className="flex flex-row sm:gap-[15px] gap-2 items-center">
                <img className="lg:w-[63px] md:w-[55px] sm:w-[50px] w-[46px] " src={iconUrl} alt="icon"/>
                <p className="lg:text-[20px] md:text-lg sm:text-base text-sm text-heading font-normal font-myRubic">{text}</p>
            </div>
        </>
    )
}

export default HomePageServiceIconName2;
