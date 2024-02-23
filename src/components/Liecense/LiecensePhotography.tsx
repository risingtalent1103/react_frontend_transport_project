const LiecensePhotography = () => {
    return(
        <>
            <div className="flex flex-col pb-20 lg:flex-row ml-[5%] xl:ml-[0%]">
                <div className="basis-[33%] pb-10 font-myRubic font-bold text-4xl text-heading">
                    Photography
                </div>
                <div className="basis-[67%] flex flex-col gap-y-7">
                    <p className="font-myKrub font-normal text-base text-paragraph">
                        All images used in this Webflow Template are licensed for free personal and commercial use. If you'd like to use any specific image, you can check the licenses and download the images for free on Unsplash, Pexels, Pixabay, Freepik.
                    </p>
                    <div>
                        <label className="font-myRubic font-bold text-2xl sm:text-3xl text-heading">Phosphor Icon:</label>
                        <span className="font-myRubic font-normal text-xl sm:text-2xl text-heading"> Liecenses</span>
                        <div className="font-myKrub font-normal text-base text-paragraph pt-8">
                            Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17, Image 18, Image 19, Image 20, Image 21, Image 22, Image 23, Image 24, Image 25
                        </div>
                    </div>
                    <div>
                        <label className="font-myRubic font-bold text-2xl sm:text-3xl text-heading"> Unsplash:</label>
                        <span className="font-myRubic font-normal text-xl sm:text-2xl text-heading"> Liecenses</span>
                        <div className="font-myKrub font-normal text-base text-paragraph pt-8">
                            Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LiecensePhotography;