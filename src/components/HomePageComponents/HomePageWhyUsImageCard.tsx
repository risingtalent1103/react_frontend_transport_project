type props = {
    className? : string,
}

const HomePageWhyUsImageCard = ({ className = ""}: props) => {
    return (
        <>
            <div className={`relative lg:w-[565px] lg:h-[462px] sm:w-[472px] sm:h-[385px] w-[374px] h-[306px] ${className}`}>
                <img className="absolute top-0 right-0 lg:w-[461px] lg:h-[415px] sm:w-[400px] w-[305px] h-[275px] " src="images/HomePageAir.jpg"/>
                <img className="absolute bottom-0 left-0 lg:w-[302px] lg:h-[225px] sm:w-[250px] w-[200px] h-[150px] border-t-[22px] border-r-[22px] border-[white]" src="images/HomePageGirl.png"/>
            </div>

        </>
    )
}

export default HomePageWhyUsImageCard;