import { Link } from "react-router-dom";
const imgList =["1.png", "2.png","3.png","2(1).png","2(2).png","2(3).png"]

const ProjectCard = () => {
    return(
        <>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 py-20 mx-5 xl:mx-0">
                {
                    imgList.map((item, index) => {
                        return <Link to={`/project/detail/:${index}`} key={index}>
                            <div className="group relative">
                                <img className="group-hover:scale-105" src={`/images/project-image/${item}`}></img>
                                <img className="hidden group-hover:inline-block absolute top-[10%] left-[10%] w-4/5" src="/images/project-image/Hover.png"></img>
                            </div>
                        </Link>
                    })
                }
            </div>
        </>
    )
}

export default ProjectCard;