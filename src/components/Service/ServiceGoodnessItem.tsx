type props = {
    imgUrl: string,
    title: string,
}

const ServiceGoodnessItem = ({ imgUrl, title }: props) => {
    return (
        <>
            <div className="flex">
                <div className="pr-3">
                    <img src={imgUrl} alt="icon" />
                </div>
                <div className="pt-1">
                    <h3 className="font-myRubic font-medium text-[18px] lg:text-[25px] pb-2">{ title }</h3>
                    <p className="font-myKrub font-medium text-paragraph text-[12px] lg:text-base">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking</p>
                </div>
            </div>
        </>
    )
}
export default ServiceGoodnessItem;