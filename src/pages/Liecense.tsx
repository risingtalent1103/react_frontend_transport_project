import Container from "@/components/Container";
import LiecenseFont from "@/components/Liecense/LiecenseFont";
import LiecenseIcon from "@/components/Liecense/LiecenseIcon";
import LiecensePhotography from "@/components/Liecense/LiecensePhotography";
import Banner from "@/components/Banner";

const Liecense = () => {
    return(
        <>
            <Banner className="w-full h-[717px] md:h-[500px] bg-no-repeat bg-[bottom] md:bg-center xl:bg-[top] bg-cover" 
                name="Licenses" title="All Assets Licenses" imgUrl={"/images/banner/LicensesBannerFull3.png"}/>
            <Container>
                <LiecenseIcon/>
                <LiecensePhotography/>
                <LiecenseFont/>    
            </Container>
        </>
    )
}

export default Liecense;