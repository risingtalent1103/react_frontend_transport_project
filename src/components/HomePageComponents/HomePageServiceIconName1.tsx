type props = {
    iconUrl: string;
    text: string;
};

//Use this in the Service List (icon and name) in HomePage.
function HomePageServiceIconName1 ({iconUrl, text}: props) {
    return(
        <>
            <div className="flex flex-row gap-[15px] items-center">
                <img className="sm:w-[58px] sm:h-[58px] w-[40px] h-[40px]" src={iconUrl}/>
                <p className="sm:text-[25px] text-base text-heading font-normal font-myRubic">{text}</p>
            </div>
        </>
    )
}

export default HomePageServiceIconName1;
