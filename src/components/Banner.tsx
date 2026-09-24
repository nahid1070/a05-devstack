import bannerImg from '../assets/banner-stack-v2.png';

function Banner() {

    return(
        <section className="md:py-10 lg:py-20 pt-10 bg-white ">
            <div className="container mx-auto lg:flex md:items-center">
                <div>
                    <h2 className='text-[30px] leading-tight text-center lg:text-left 
                        md:text-6xl font-Inter font-extrabold'>
                        Build Your Ideal <br /> 
                        <span className='bg-linear-to-r
                        from-brand-orange via-brand-pink to-brand-purple 
                        bg-clip-text text-transparent'>Development Stack</span>
                    </h2>

                    <p className='text-[15px] text-center px-5 md:text-[18px] 
                        md:w-[60%] md:mx-auto lg:mx-0 lg:text-left lg:w-[62%] md:px-0 text-brand-text
                        py-1 mt-2 md:py-3 md:mt-5'>
                        
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>

                    <div className='lg:justify-start md:mt-12 flex justify-center gap-4 mt-4'>
                        
                        <button 
                            className="sm:font-semibold md:px-6 font-normal btn font-Inter bg-linear-to-r 
                            from-brand-btn-orange to-brand-btn-pink text-white 
                            rounded-[10px] px-5 py-6">
                            Explore Technologies
                        </button>
                        <button 
                            className="btn font-Inter font-normal text-[16px] 
                            bg-white px-10 py-6 border border-brand-btn-border 
                            rounded-[10px] text-brand-btn-text">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className='p-5 text-center'>
                    <img src={bannerImg} alt="Banner Image" className='md:mx-auto lg:mx-0' />
                </div>
            </div>
        </section>
    );
}

export default Banner;