const imageList = ["2.png", "3.png", "2(1).png"]

const ProjectSingleRelated = () => {
    return(
        <>
            <div className="mb-24 px-5 xl:px-0">
                <h1 className="font-semibold font-myRubic text-2xl sm:text-4xl pb-9 text-heading">Related Project</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-7">
                    {
                        imageList.map((item, index) => {
                            return <div className="group relative" key={index}>
                                <img src={`/images/project-single/${item}`}></img>
                                <img className="absolute w-[80%] top-[10%] left-[10%] hidden group-hover:inline-block" src="/images/project-single/Hover.png"></img>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ProjectSingleRelated;