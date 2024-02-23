import { useNavigate } from "react-router-dom";
const PageNotFound = () => {

    const navigate = useNavigate();

    const handleBackHome = () => {
        navigate("/");
    }
    return(
        <>
            <div className="flex flex-col justify-center items-center leading-none pt-[150px] pb-20">
                <div className="font-myRubic text-heading md:text-[350px] text-[200px] font-semibold">
                    <span>4</span>
                    <span className="text-gradient1">0</span>
                    <span>4</span>
                </div>
                <div className="font-myRubic font-semibold text-heading text-[35px] leading-normal">
                    Oops! Page not found
                </div>
                <div className="font-myKrub font-medium text-paragraph text-[16px] pb-6">
                    Let’s get you to where you need to be.
                </div>
                <button className="w-[194px] h-[60px] bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3 text-[16px] text-mykrub font-semibold" onClick={handleBackHome}>
                    Back to home
                </button>
            </div>
        </>
    )
}

export default PageNotFound;