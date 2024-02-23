const LiecenseFont = () => {
    return(
        <>
            <div className="flex flex-col pb-20 lg:flex-row ml-[5%] xl:ml-[0%]">
                <div className="basis-[33%] pb-10 font-myRubic font-bold text-4xl text-heading">
                    Font
                </div>
                <div className="basis-[67%]">
                    <div className="font-myKrub font-normal text-base text-paragraph">
                        TransitFlow template uses free licensed
                        <span className="font-semibold text-heading"> Google Fonts </span>. please check 
                        <span className="font-semibold text-heading"> Rubik </span> and 
                        <span className="font-semibold text-heading"> Krub</span>.
                    </div>
                </div>
            </div>
        </>
    )
}

export default LiecenseFont;