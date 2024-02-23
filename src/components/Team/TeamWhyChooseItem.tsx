type props = {
    imgUrl: string,
    title: string,
}

const TeamWhyChooseItem = ({ imgUrl, title }: props) => {
    return (
        <>
            <div className="flex flex-col">
                <div>
                    <img className="mb-1" src={imgUrl} alt="icon"/>
                </div>
                <h3 className="font-myRubic font-medium text-[18px] lg:text-[25px] mb-2">{ title }</h3>
                <p className="font-myKrub font-medium text-paragraph text-[12px] lg:text-base">
                    Leverage agile frameworks to provide a robust synopsis for strategy foster.
                </p>
            </div>
        </>
    )
}
export default TeamWhyChooseItem;