import bannerImg from '../assets/banner-stack.png';

function Banner() {

    return(
        <section className="bg-white py-20">
            <div className="container mx-auto flex items-center">
                <div>
                    <h2 className='text-6xl font-Inter font-bold'>
                        Build Your Ideal <br /> 
                        <span className='bg-linear-to-r from-brand-orange to-brand-purple bg-clip-text text-transparent'>Development Stack</span>
                    </h2>

                    <p className='text-[18px] w-[50%] text-brand-text py-3'>
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>

                    <div className='flex gap-4 mt-12'>
                        <button className="btn font-Inter font-semibold bg-linear-to-r from-brand-btn-orange to-brand-btn-pink text-white rounded-[10px] px-6 py-6">Explore Technologies</button>
                        <button className="btn font-Inter font-normal text-[16px] bg-white px-10 py-6 border border-brand-btn-border rounded-[10px] text-brand-btn-text">Learn More</button>
                    </div>
                </div>

                <div>
                    <img src={bannerImg} alt="Banner Image" />
                </div>
            </div>
        </section>
    );
}

export default Banner;