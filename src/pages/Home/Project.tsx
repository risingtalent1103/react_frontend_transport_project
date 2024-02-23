import ProjectCard from "@/components/Project/ProjectCard";
import ProjectReviews from "@/components/Project/ProjectReviews";
import Container from "@/components/Container";
import Banner from "@/components/Banner";

const Project = () => {
    return(
        <>
            <Banner className="w-full h-[717px] md:h-[500px] bg-no-repeat bg-right-bottom xl:bg-[center_-12rem] bg-cover" 
                name="Gallery" title="Our Project" imgUrl={"/images/banner/ProjectBannerFull.png"} />
            <Container>
                <ProjectCard/>
            </Container>
            <ProjectReviews/>
        </>
    )
}

export default Project;