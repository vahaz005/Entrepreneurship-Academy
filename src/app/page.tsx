import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Meet from "@/components/Meet";
import Scrolling from "@/components/Scrolling";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Whychooseus from "@/components/Whychooseus";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <main className="bg-black/[0.96] mim-h-screen antialiased bg-grid-white/[0.02] ">
<HeroSection/>
<FeaturedCourses/>
<Whychooseus/>
<Scrolling/>
<UpcomingWebinar/>
<Meet/>
<Footer/>
  </main>
  
  </>
  );
}
