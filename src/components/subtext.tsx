
const SubText = (props: any) => {
    const {content} = props;
    return (
        <span className="font-myKubic font-normal text-[14px] px-2 border-l-[4px] border-primary1 bg-secondary1 mx-auto text-heading">
            {content}
        </span>
    )
    
}
export default SubText;