import logo from '../../assets/logo-text.png';
import FooterBottom from './FooterBottom';

function Footer() {

    return (
        <footer className='border border-t-brand-border'>
            <div className='container mx-auto flex py-16'>

                <div className='w-[40%]'>
                    <div>
                        <img src={logo} alt="Footer Logo" />
                    </div>
                    <p className='text-brand-text w-[80%] pt-4 pb-8'>Curated tools, technologies, and resources for developers building
                    modern software.</p>

                    <ul className='flex gap-2 font-semibold text-brand-black-2 text-sm'>
                        <li>
                            <a href="#">GitHub</a>
                        </li>

                        <li>
                            <a href="#">Twitter</a>
                        </li>

                        <li>
                            <a href="#">LinkedIn</a>
                        </li>
                    </ul>
                </div>

                <div className='w-[60%] flex gap-4 justify-between'>

                    <div>
                        <h2 className='font-semibold text-[15px] text-brand-heading pb-2'>PRODUCT</h2>
                        <ul className='text-brand-text leading-loose'>
                            <li>
                                <a href="#">Home</a>
                            </li>

                            <li>
                                <a href="#">Technologies</a>
                            </li>

                            <li>
                                <a href="#">Projects</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='font-semibold text-[15px] text-brand-heading pb-2'>COMPANY</h2>
                        <ul className='text-brand-text leading-loose'>
                            <li>
                                <a href="#">About</a>
                            </li>

                            <li>
                                <a href="#">Contact</a>
                            </li>

                            <li>
                                <a href="#">Careers</a>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h2 className='font-semibold text-[15px] text-brand-heading pb-2'>LEGAL</h2>
                        <ul className='text-brand-text leading-loose'>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>

                            <li>
                                <a href="#">Terms of Service</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Footer Bottom */}
            <FooterBottom />
        </footer>
    );
}


export default Footer;