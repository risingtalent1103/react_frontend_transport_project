const list = [
    "National Customer Service Center - 24 hours a day.",
    "Online shipping navigator lets you quote, book, and track shipments",
    "Your Logistics Needs Are At The Heart Of Our Business",
    "Very careful handling of valuable goods",
    "Time saving and convenient transportation services in your area"
]

const ProjectSingleWharehouse = () => {
    return(
        <>
            <div className="mb-24 px-5 xl:px-0">
                <h1 className="font-semibold font-myRubic text-2xl sm:text-4xl pb-4 text-heading">Warehouse Transportation</h1>
                <p className="font-medium font-myKrub text-[14px] sm:text-base pb-7 text-paragraph">Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat tempus.Phasellus at quam id elit hendrerit semper feugiat id nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Fusce lectus ex, pretium efficitur suscipit sed, faucibus vel elit Integer adipiscing erat eget risus sollicitudin pellentesque non erat. Maecenas nibh dolor malesuada sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere.</p>
                <div>
                    {
                        list.map((item, index) => {
                            return <div className="flex sm:items-center" key={index}><img className="pt-1" src="/assets/icons/Vector.png" ></img><p className="ps-5 text-normal font-myRubic text-base sm:text-xl text-heading">{item}</p><br/><br/></div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ProjectSingleWharehouse;