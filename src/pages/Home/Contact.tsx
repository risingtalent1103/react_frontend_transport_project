import ContactIntroduction from "@/components/Contact/ContactIntrodction";
import SendMessage from "@/components/Contact/SendMessage";
import Container from "@/components/Container";
import Banner from "@/components/Banner";
import FrequentlyQuestionsBox from "@/components/FrequentlyQuestionsBox";

const Contact = () => {
    return(
        <>
            <Banner className="w-full h-[717px] md:h-[500px] bg-no-repeat bg-right-bottom 2xl:bg-[center_-35rem] bg-cover" 
                name="Contact" title="Our Contact" imgUrl={"/images/banner/ContactBannerFull.png"} />
            <Container>
                <SendMessage/>
                <ContactIntroduction/>
            </Container>
            <FrequentlyQuestionsBox/>
            <div className="pb-[400px] xl:pb-[0px]"></div>
        </>
    )
}

export default Contact;