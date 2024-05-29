'use client';
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Image from 'next/image';
import "@/app/common.css";

const Index = () => {
    const [countOn, setCountOn] = useState(false);
    return (

        <div className="countUp-backround">
            <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)} >
                <div className="container">
                    <div className="flex justify-around py-9 flex-wrap gap-5">

                        <div className=' relative border-4 border-[#F67712] rounded-2xl py-7 px-12 text-[#FFDA00] text-xl'>
                            <Image src='/images/visitor.png' alt="Visitors image" className="absolute -top-3 left-44 bg-[linear-gradient(60deg,_#F67712_51%,_#FFDA00_100%)] p-[10px] rounded-full max-w-16" width={100} height={100} />

                            {countOn && <CountUp start={0} end={4744} duration={3} delay={0} />}
                            <span> + </span>
                            <br />
                            <span className='counter-span'>No. of Visitors</span>




                        </div>

                        <div className=' relative border-4 border-[#F67712] rounded-2xl py-7 px-12 text-[#FFDA00] text-xl'>
                            <Image src='/images/query.png' alt="Query image" className="absolute -top-3 left-52 bg-[linear-gradient(60deg,_#F67712_51%,_#FFDA00_100%)] p-[10px] rounded-full max-w-16" width={100} height={100} />
                            {countOn && <CountUp start={0} end={
                                682} duration={5} delay={0} />}


                            <span>+</span>
                            <br />
                            <span className='counter-span'>Queries Till Now</span>





                        </div>

                        <div className=' relative border-4 border-[#F67712] rounded-2xl py-7 px-12 text-[#FFDA00] text-xl'>
                            <Image src='/images/coronavirus.png' alt="Countries image" className="absolute -top-4 left-52 bg-[linear-gradient(60deg,_#F67712_51%,_#FFDA00_100%)] p-[10px] rounded-full max-w-16" width={100} height={100} />
                            {countOn && <CountUp start={0} end={
                                8} duration={8} delay={0} />}
                            <span> + </span>
                            <br />
                            <span className='counter-span'>Countries Serving</span>
                        </div>

                    </div>
                </div>
            </ScrollTrigger>
        </div>

    )
}

export default Index