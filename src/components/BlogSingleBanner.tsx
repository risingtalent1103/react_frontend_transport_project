import Container from "./Container";
type props = {
    day: string,
    month: string,
    title: string,
    imgUrl: string,
};

const BlogSingleBanner = ({day, month, title, imgUrl}: props) => {
    return (
        <div className={`w-full h-[717px] md:h-[500px] bg-no-repeat bg-top xl:bg-[center_top_-10rem] bg-cover`} style={{backgroundImage:`url('${imgUrl}')`}}>
            <div className="bg-gradient-to-r from-banner from-5% md:from-[0]  md:via-[primary5]/30 md:via-[35%] md:to-[primary5]/10 md:to-100% w-full h-full flex items-center">    
                <Container>
                        <div className="text-[white] pt-[8%] px-5 xl:px-0 w-[300px] md:w-[500px] lg:w-full">
                            <div className="flex gap-[10px] items-center just">
                                <img className="w-[22px] h-[23.5px] md:w-[51px] md:h-[56px]" src='/assets/icons/calenderwhite.svg'/>
                                <div className="flex flex-col text-center">
                                    <div className="font-myRubic font-semibold text-[16.77px] md:text-[35px] mx-auto leading-none pb-1">
                                        {day}
                                    </div>
                                    <div className="font-myKrub text-[6.71px] md:text-[18px] leading-none">
                                        {month}
                                    </div>
                               </div>
                            </div>
                            <h3 className="font-myKrub font-bold text-[32px] md:text-[60px] ">{title}</h3>
                        </div>
                </Container>
            </div>
        </div>
    )
}
export default BlogSingleBanner;