const ServiceSingleBenefit = () => {
    return(
     <>
         <div className="container flex flex-col xl:flex-row mb-24 gap-y-5">
            <div className="xl:basis-[36.8%]">
                <div className="text-2xl sm:text-4xl font-myRubic font-semibold text-heading  px-5 xl:px-0">Benefit of Service</div>
                <div className="pt-5 text-xs sm:text-base font-myKrub font-medium text-paragraph px-5 xl:px-0">
                    Sed ut perspiciatis, unde omnis iste natu volupta temaccu santium doloremque laudantium, totam rem quae ab illo inventore veritatis.
                </div>
                <div className="container pt-10 text-base sm:text-xl font-myKrub font-normal text-heading leading-tight px-5 xl:px-0">
                    <div className="flex items-center"><img src="/assets/icons/Vector.png"></img>&nbsp;&nbsp;Clearance and compliance service</div>
                    <br/>
                    <div className="flex items-center"><img src="/assets/icons/Vector.png"></img>&nbsp;&nbsp;Saving Time to Deal with commodo iaculis</div>
                    <br/>
                    <div className="flex items-center"><img src="/assets/icons/Vector.png"></img>&nbsp;&nbsp;Automate your business elis tristique</div>
                    <br/>
                    <div className="flex items-center"><img src="/assets/icons/Vector.png"></img>&nbsp;&nbsp;Saving Time to Deal with commodo iaculis</div>
                    <br/>
                </div>
            </div>
            <div className="xl:basis-[6.2%]"></div>
            <div className="xl:basis-[57%]">
                <img src="/images/service-single/service-single2.png"></img>
            </div>
         </div>
     </>
    )
 }
 export default ServiceSingleBenefit;