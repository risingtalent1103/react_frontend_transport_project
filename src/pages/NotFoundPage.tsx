import Container from "@/components/Container";
import PageNotFound from "@/components/PageNotFound/PageNotFound";
import Banner from "@/components/Banner";

const NotFoundPage = () => {
    return(
        <>
            <Banner className="w-full h-[500px] md:h-[315px] bg-no-repeat bg-[top] xl:bg-top bg-cover" 
                name="Pricing" title="Our Best Price" imgUrl=""/>
            <Container>
                <PageNotFound/>
            </Container>
        </>
    )
}

export default NotFoundPage;