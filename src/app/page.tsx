import Appbar from "@/components/Appbar/Appbar";
import { Footer } from "@/components/Appbar/Footer";
import { Card } from "@/components/Home/Card";
import { Hero } from "@/components/Home/Hero";

export default function Home() {
  return (
    <>
      <Appbar />
        <div className="flex flex-col items-center bg-gradient-to-b from-[#FFFFFF] to-[#AFA3FF] mt-10 md:mt-0"> 
          <Hero/>
          <Card/>
        </div>
      <Footer/>
    </>
  );
}
