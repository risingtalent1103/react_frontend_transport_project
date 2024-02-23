import Container from "./Container";
type props = {
    name: string,
    title: string,
    imgUrl: string,
    className?: string
};

const Banner = ({name, title, imgUrl, className = ""}: props) => {
    return (
        <div className={`${className}`} style={{backgroundImage:`url("${imgUrl}")`}}>
            <div className="bg-gradient-to-r from-banner from-5% md:from-[15%]  md:via-[primary5]/30 md:via-[35%] md:to-[primary5]/10 md:to-100% w-full h-full flex items-center">    
                <Container>
                        <div className="text-[white] pt-[8%] px-5 md:px-0 w-[250px] md:w-[500px] lg:w-full">
                            <span className="px-2 py-[3px] font-myRubic font-regular text-[14px] border-l-[4px] border-primary1 bg-[#184206]/50">{name}</span>
                            <h3 className="font-myKrub font-bold text-[32px] md:text-[60px] ">{title}</h3>
                        </div>
                </Container>
            </div>
        </div>
    )
}
export default Banner;