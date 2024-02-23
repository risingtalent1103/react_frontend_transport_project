import Banner from "@/components/Banner";
import Container from "@/components/Container";
import MeetExpertTeam2 from "@/components/MeetExpertTeam2";
import ContactIntroduction from "@/components/Contact/ContactIntrodction";
import TeamWhyChoose from "@/components/Team/TeamWhyChoose";

const OurTeam = () => {
    return (
        <>
            <Banner className="w-full h-[717px] md:h-[500px] bg-no-repeat bg-[bottom] 2xlc:bg-[center_-12rem] bg-cover" 
                name="Team" title="Our Team" imgUrl={"/images/banner/TeamBannerFull.png"} />
            <Container>
                <MeetExpertTeam2 />
            </Container>
            <div className="w-full py-16 bg-secondary1">
                <TeamWhyChoose />
            </div>
            <Container>
                <ContactIntroduction/>
            </Container>
        </>
    )
}
export default OurTeam;