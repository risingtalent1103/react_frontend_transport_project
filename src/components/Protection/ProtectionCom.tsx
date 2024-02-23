const ProtectionCom = () => {
    return(
        <>
            <div className="h-[395px] my-20 sm:my-40 bg-primary2 flex flex-col justify-center items-center gap-y-10">
                <p className="font-myRubic font-bold text-[35px] text-[white]">Enter Password</p>
                <form className="w-[100%] sm:w-[498px] font-myKrub font-normal text-base text-[white] flex  flex-col sm:flex-row items-center justify-between px-5 gap-x-6 gap-y-6">
                    <input className="w-[95%] sm:w-[317px] h-[60px] bg-transparent border-input_border border-2" type="password" placeholder="Enter Your Password"></input>
                    <input className="w-[95%] sm:w-[156px] h-[60px] bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3 text-[16px] font-myKrub font-semibold text-[#23212A]" type="submit" value="Submit"></input>
                </form>
            </div>
        </>
    )
}

export default ProtectionCom;