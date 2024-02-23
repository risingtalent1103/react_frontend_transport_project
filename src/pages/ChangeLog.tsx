import Container from "@/components/Container";
import ChangeLogCom from "@/components/ChangeLog/ChangeLogCom";
import Banner from "@/components/Banner";

const ChangeLog = () => {
    return(
        <>
            <Banner className="w-full h-[717px] md:h-[500px] bg-no-repeat bg-[bottom] md:bg-center xl:bg-[center_-5rem] bg-cover" 
                name="Updates" title="Change Log" imgUrl={"/images/banner/ChangeLogBannerFull.png"}/>
            <Container>
                <ChangeLogCom/>
            </Container>
        </>
    )
}

export default ChangeLog;