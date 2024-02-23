const ProjectSingleDetails = () => {
    return(
        <>
            <div className="container xl:w-[1200px] mx-auto flex py-24 flex-col-reverse lg:flex-row px-5 xl:px-0">
                <div className="lg:basis-[53.5%]"><img src="/images/project-single/Photo.png"></img></div>
                <div className="lg:basis-[46.5%] flex flex-col lg:items-center justify-center mb-12">
                    <div className="flex flex-col">
                        <p className="font-semibold font-myRubic text-2xl sm:text-4xl pb-10 text-heading">Project Details</p>
                        <div className="leading-10">
                            <label className="font-medium font-myRubic text-[18px] sm:text-xl text-heading">Customer&nbsp;</label>:<span className="font-normal font-myRubic text-[18px] sm:text-xl text-heading">&nbsp;&nbsp;David Warner</span><br/>
                            <label className="font-medium font-myRubic text-[18px] sm:text-xl text-heading">Category&nbsp;</label>:<span className="font-normal font-myRubic text-[18px] sm:text-xl text-heading">&nbsp;&nbsp;Warehouse Transportation</span><br/>
                            <label className="font-medium font-myRubic text-[18px] sm:text-xl text-heading">Date&nbsp;</label>:<span className="font-normal font-myRubic text-[18px] sm:text-xl text-heading">&nbsp;&nbsp;12 December, 2022</span><br/>
                            <label className="font-medium font-myRubic text-[18px] sm:text-xl text-heading">Status&nbsp;</label>:<span className="font-normal font-myRubic text-[18px] sm:text-xl text-heading">&nbsp;&nbsp;Completed</span><br/>
                            <label className="font-medium font-myRubic text-[18px] sm:text-xl text-heading">Tags&nbsp;</label>:<span className="font-normal font-myRubic text-[18px] sm:text-xl text-heading">&nbsp;&nbsp;Life Style Travel,Best Delivery</span><br/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectSingleDetails;