import { Carousel } from "antd";

const imgList = [
    {
      id: 1,
      src: '/images/Contact/1.png',
    },
    {
      id: 2,
      src: '/images/Contact/2.png',
    },
    {
      id: 3,
      src: '/images/Contact/3.png',
    },
    {
      id: 4,
      src: '/images/Contact/4.png',
    },
  ];

const ContactIntroduction = () => {
    return(
        <>
            <div className="py-24 hidden lg:block">
                <Carousel autoplay autoplaySpeed={3000} slidesToShow={4} >
                    {
                        imgList.map((item) => {
                            return  <div key={item.id}>
                                        <img src={item.src} alt={`Image ${item.id}`} />
                                </div>
                        })
                    }
                </Carousel>
            </div>
            <div className="py-24 hidden sm:block lg:hidden">
                <Carousel autoplay autoplaySpeed={3000} slidesToShow={2} >
                    {
                        imgList.map((item) => {
                            return  <div key={item.id}>
                                        <img src={item.src} alt={`Image ${item.id}`} />
                                </div>
                        })
                    }
                </Carousel>
            </div>
            <div className="py-24 block sm:hidden">
                <Carousel autoplay autoplaySpeed={3000} slidesToShow={1} >
                    {
                        imgList.map((item) => {
                            return  <div key={item.id}>
                                        <img src={item.src} alt={`Image ${item.id}`} />
                                </div>
                        })
                    }
                </Carousel>
            </div>
        </>
    )
}

export default ContactIntroduction;