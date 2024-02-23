import Container from "@/components/Container";
import ProtectionCom from "@/components/Protection/ProtectionCom";
import Banner from "@/components/Banner";

const Protection = () => {
    return(
        <> 
            <Banner className="w-full h-[717px] md:h-[500px] bg-no-repeat bg-[top] xl:bg-top bg-cover" 
                name="Protection" title="Password Protection" imgUrl={"/images/banner/ProtectionBannerFull2.png"}/>
            <Container>
                <ProtectionCom/>
            </Container>
        </>
    )
}

export default Protection;