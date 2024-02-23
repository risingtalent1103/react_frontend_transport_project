import { expertTeamMemberInformations2 } from "@/stack/stack";
import SubTitle from "./SubTitle";
import TeamMemberCard from "./TeamMemberCard";

type props = {
    className?: string
};


function MeetExpertTeam2({ className = "" }: props) {
    return (
            <div className={`flex flex-col gap-10 my-[95px] ${className}`}>
                <SubTitle title="The Transporters" content="Meet Expert Team" className="items-center"/>
                <div className="px-4 grid grid-cols-3 gap-[2%] md:gap-[4.5%] justify-items-center">
                    {
                        expertTeamMemberInformations2.map((item, index) => {
                            return(
                                    <TeamMemberCard key={index} item={item}/>
                            )
                        })
                    }
                </div>
            </div>
    )
}
export default MeetExpertTeam2;