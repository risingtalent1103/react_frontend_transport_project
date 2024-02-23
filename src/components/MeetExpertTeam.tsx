import { expertTeamMemberInformations } from "@/stack/stack";
import SubTitle from "./SubTitle";
import TeamMemberCard from "./TeamMemberCard";

type props = {
    className?: string
};


function MeetExpertTeam({ className = "" }: props) {
    return (
            <div className={`flex flex-col gap-10 my-[95px] ${className}`}>
                <SubTitle title="The Transporters" content="Meet Expert Team" className="items-center"/>
                <div className="flex flex-row gap-[4.5%] justify-center">
                    {
                        expertTeamMemberInformations.map((item, index) => {
                            return(
                                <TeamMemberCard key={index} item={item}/>
                            )
                        })
                    }
                </div>
            </div>
    )
}
export default MeetExpertTeam;