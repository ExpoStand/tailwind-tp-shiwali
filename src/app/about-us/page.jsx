import dynamic from "next/dynamic"

const page = () => {
    const AboutUs = dynamic(() => import('@/app/about-us/about-us.jsx'));
  return (
    <div>
        <AboutUs />
    </div>
  )
}

export default page