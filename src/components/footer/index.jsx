import dynamic from "next/dynamic"
import '@/app/common.css'
import Image from 'next/image'
import Link from 'next/link'
import { IoLocationSharp } from "react-icons/io5";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";

const Index = () => {
    const Countup = dynamic(() => import('@/components/countup'));
    return (
        <>
        <Countup />
            <div className="footer-1">

                <div className="container">

                    <div className='flex flex-wrap justify-between text-white py-9 gap-5'>

                        <div >
                            <h4 className="text-xl font-bold mb-3">  About Trade Pros </h4>
                            <Image src='/images/logo-s.png' alt="Footer_logo" className="mb-2" height={100} width={100} />
                            <p className="">Trade Pros is a one-stop solution<br />for food trading from India across<br />the globe <Link href="/about-us/" style={{ color: "#F67712" }}>…..Know More</Link></p>
                        </div>

                        <div >
                            <h4 className="text-xl font-bold underline underline-offset-4 decoration-[#FFDA00] decoration-2 mb-2">Quick Links</h4>
                            <ul>
                                <li className='mb-2'><Link href="/">Home</Link></li>
                                <li className='mb-2'><Link href="/about-us/">About Us</Link></li>
                                <li className='mb-2'><Link href="/our-products/">Our Products</Link></li>
                                <li className='mb-2'><Link href="/product-enquiry/">Product Enquiry</Link></li>
                                <li className='mb-2'><Link href="/contact-us/">Contact Us</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold underline underline-offset-4 decoration-[#FFDA00] decoration-2 mb-2">Our Products</h4>
                            <ul>
                                <li className='mb-2'><Link href="/our-products/spices/">Spices</Link></li>
                                <li className='mb-2'><Link href="/our-products/rice/basmati/">Basmati</Link></li>
                                <li className='mb-2'><Link href="/our-products/rice/non-basmati/">Non Basmati</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold underline underline-offset-4 decoration-[#FFDA00] decoration-2 mb-2">Get In Touch</h4>
                            <ul>
                                <li className='flex mb-2'><IoLocationSharp className='mr-2 mt-1' />C-49, Ground Floor, Sector 10, <br />Noida, India - 201301</li>
                                <li className='flex mb-2'><FaMobileScreenButton className='mr-3 mt-1' /><Link href="tel: +917701967040"> +91 770 196 7040</Link></li>
                                <li className='flex mb-2'><FaEnvelope className='mr-3 mt-1' /><Link href="mailto:sales@trade-pros.org">sales@trade-pros.org</Link></li>
                            </ul>
                        </div>

                    </div>

                    {/* <div className="bg-[#FFDA00] flex ">
                        <div className="social_links">
                            <Link href="https://www.facebook.com/tradepross/" target='blank'> <FaFacebookF /> <span>Facebook</span> </Link>
                        </div>
                        <div className="social_links">
                            <Link href="https://www.instagram.com/trade_pross/" target='blank' > <FaInstagram /> <span>Instagram</span> </Link>
                        </div>
                        <div className="social_links">
                            <Link href="https://twitter.com/trade_pross/" target='blank'> <FaXTwitter /> <span>Twitter</span></Link>
                        </div>
                        <div className="social_links">
                            <Link href="https://www.linkedin.com/company/trade-pross/" target='blank'> <FaLinkedinIn /> <span>Linkedin</span></Link>
                        </div>
                        <div className="social_links">
                            <Link href="https://in.pinterest.com/Trade_pros/" target='blank'> <FaPinterestP /> <span>Pinterest</span></Link>
                        </div>
                        <div className="social_links">
                            <Link href="https://www.tumblr.com/tradepros/" target='blank'> <FaTumblr /> <span>Tumblr</span> </Link>
                        </div>
                    </div> */}

                </div>

            </div>

            <div className="bg-white text-center py-3">
                © {new Date().getFullYear()} Trade-Pros Private Limited. All Rights Reserved | Developed By<Link href="https://digitalfyx.com/" target="blank" className="text-[#f67712]"> Digitalfyx</Link>
            </div>


        </>
    )
}

export default Index