import Container from "../../components/Container";
import BlogSingleSolutions from "@/components/BlogSingle/BlogSingleSolutions";
import BlogSingleBanner from "@/components/BlogSingleBanner";

const BlogSingleContainer = () => {
    return(
        <>
            <BlogSingleBanner day="08" month="March" 
                title="How technology can help redraw the supply chain map" imgUrl={"/images/banner/BlogSingleBannerFull.png"}/>
            <Container>
                <BlogSingleSolutions/>
            </Container>
        </>
    )
}

export default BlogSingleContainer;