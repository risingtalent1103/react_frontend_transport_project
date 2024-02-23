import Container from "../../components/Container";
import ProjectSingleDetails from "@/components/ProjectSingle/ProjectSingleDetails";
import ProjectSingleRelated from "@/components/ProjectSingle/ProjectSingleRelated";
import ProjectSingleTransportation from "@/components/ProjectSingle/ProjectSingleTransportation";
import ProjectSingleWharehouse from "@/components/ProjectSingle/ProjectSingleWharehouse";
import Banner from "@/components/Banner";

const ProjectSingle = () => {
    return(
        <>
            <Banner className="w-full h-[717px] md:h-[500px] bg-no-repeat bg-right-bottom lg:bg-[center_-10rem]  xl:bg-[center_-20rem] bg-cover" 
                name="Warehouse Transportation" title="Air Cargo Transportation" imgUrl={"/images/banner/ProjectSingleBannerFull.png"} />
            <div className="w-full lg:bg-[#F4F4F4]">
                <ProjectSingleDetails/>
            </div>
    	    <Container>
                <ProjectSingleWharehouse/>
                <ProjectSingleTransportation/>
                <ProjectSingleRelated/>
            </Container>
        </>
    )
}

export default ProjectSingle;