import Image from 'next/image';
import { IoHome } from 'react-icons/io5';
import Link from 'next/link';
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { RiCustomerService2Line } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { TfiWrite } from "react-icons/tfi";
import '@/app/common.css'

const AboutUs = () => {
    return (
        <>
            <div className='about-us-backround p-40'>
            </div>

            <div className="container">
                <div className="relative">
                    <Image src='/images/8.png' width={250} height={200} className='absolute left-32 -top-36 z-[1] w-[20%] h-auto' />
                    <Image src='/images/5.png' width={230} height={190} className='absolute right-28 -top-32 z-[1]  w-[18%] h-auto' />

                    <div className='text-center bg-white shadow-sm absolute -top-24 left-[12%] p-14 w-[79%] rounded-3xl'>
                        <h1 className='text-3xl font-bold'>About Us</h1>
                        <ul className='flex justify-center mt-6'>
                            <li ><Link href="" style={{ color: "#EA4436", fontSize: "20px", display: "flex" }}> <IoHome style={{ color: "#EA4436", marginTop: "4px" }} /> Home </Link></li>
                            <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>

                            <li style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='aboutli'> About us</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="about-3-bacround pt-[13%] bg-fixed">
                <h2 className='text-[#F67712] text-center font-bold p-8 text-3xl'>Our History</h2>
                <div className="container">
                    <p className='p-12 border-[1px] border-[#F67712] rounded-2xl backdrop-blur-sm  first-letter:text-[#F67712] first-letter:text-6xl my-11'>
                        With our extensive experience in trading, especially agricultural commodities and spices,
                        and our reputation as one of India's top commodity trading companies, Trade Pros find the
                        ideal customers for your goods. We are globally connected to the international commodity
                        markets. You can directly procure & export Indian spices, rice (multiple varieties), and
                        other products to any continent through us. Trade-Pros always think the customer is king,
                        and we have an extremely reliable and open working process. We have a team of experts &
                        professionals who analyze the market daily, so we always serve you with updated information.
                        Our team of experts is all ears to listen to your needs and assist with prompt solutions.
                    </p>
                </div>
            </div>

            <div className='bg-[linear-gradient(60deg,_#f6771285_51%,_#FFDA00_100%)]'>
                <div className="container">
                    <h2 className='text-[#F67712] text-center font-bold p-8 text-3xl'>COMMITMENT TO QUALITY</h2>

                    <div className='flex'>

                        <div className='element-box1'>
                            <Image src='/images/vision.png' height={50} width={50} />
                            <h3 className='font-bold p-8 text-2xl text-white text-center'>Our Vision</h3>
                            <p>To optimize the natural resources to provide the best quality and high
                                stability, meeting the exact requirement for usage of large-scale or mid-scale projects
                                for exporting into the world market. We are committed to delivering what we promise with
                                a group of a dynamic and efficient team.</p>
                        </div>

                        <div className='element-box2'>
                            <Image src='/images/me.png' height={50} width={50} />
                            <h3 className='font-bold p-8 text-2xl text-white text-center'>Our Mission</h3>
                            <p>To be a dependable agro-export company in India and turn the food commodity supply chain
                                into an integrated and effective ecosystem that generates value for all parties, from the
                                primary producer to the final consumer.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className='relative my-16'>
                    <Image src='/images/4.jpg' alt="Spiceimages" width={500} height={200} />
                    <div className='bg-[#ffd300] shadow-md absolute top-12 right-20 w-[56%] p-7'>
                        <h3 className='text-white text-3xl font-bold mb-3'>What do we strive for?</h3>
                        <p  >
                            Our goal is to provide an all-inclusive agri-commodity trade facilitation solution that reduces risk, eliminates waste, and creates value at every point of the post-harvest supply chain. We provide multi-stakeholder platforms with technology for inclusive modern marketplaces that encourage secure trade. By utilizing cutting-edge technology and abiding by best practices, we work to assure maximum security and complete transparency.
                        </p>
                    </div>
                </div>

                <h2 className='text-[#f67712] text-3xl font-bold text-center'>Our Desirability</h2>

                <div className='flex flex-wrap gap-1 justify-center mt-12 mb-20'>

                    <div className="serviceBox">
                        <div className="service-icon">
                            <span><LiaBusinessTimeSolid className='mt-[11px] ml-[12px]' /></span>
                        </div>
                        <h3 className="title">Business Ethics & Responsibility</h3>
                        <p className="description">Uphold our code of conduct and moral principles, practice good governance, and encourage accountability and ethical decision-making.</p>
                    </div>

                    <div className="serviceBox">
                        <div className="service-icon">
                            <span><RiCustomerService2Line className='mt-[11px] ml-[12px]' /></span>
                        </div>
                        <h3 className="title">Customers receive value</h3>
                        <p className="description">We work hard to develop a customer experience that consistently fulfills our brand promise.</p>
                    </div>

                    <div className="serviceBox">
                        <div className="service-icon">
                            <span><VscWorkspaceTrusted className='mt-[11px] ml-[12px]' /></span>
                        </div>
                        <h3 className="title">Integrity</h3>
                        <p className="description">Without sacrificing the truth in relationships, act with integrity and honor.</p>
                    </div>

                    <div className="serviceBox">
                        <div className="service-icon">
                            <span><TfiWrite className='mt-[11px] ml-[12px]' /></span>
                        </div>
                        <h3 className="title">Responsibility & Accountability</h3>
                        <p className="description">Accept accountability for your experience, judgment, and policies.</p>
                    </div>

                </div>
            </div>
        </>
    )
}
export default AboutUs;