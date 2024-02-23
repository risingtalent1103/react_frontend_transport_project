import ServiceCount from "../ServiceCount";

const homePageServiceCount  = [
    {
        number:"1294",
        serviceContent: "Delivered Packages"
    },
    {
        number:"3594",
        serviceContent: "Satisfied Clients"
    }
]

function ServiceSuccessCounter() {
    return (
        <div className=" lg:h-[143px]  sm:h-[100px] w-[90%] h-[80px] grid grid-cols-2 divide-x-2 divide-[#D6D6D6] mx-auto">
            {
                homePageServiceCount.map((item, index) => {
                    return (
                        <ServiceCount key={index} number = {item.number} serviceContent={item.serviceContent} className="border-t-2 border-b-2 border-[#D6D6D6]"/>
                    )
                })
            }
        </div>
    )
}
export default ServiceSuccessCounter;