import dynamic from "next/dynamic";

export default function Home() {
  const HomePageForm = dynamic(() => import('@/components/homePageForm'));
  return (
   <>
   <HomePageForm />
   </>
  );
}
