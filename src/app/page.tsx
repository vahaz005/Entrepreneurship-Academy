import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <main className="bg-black/[0.96] mim-h-screen antialiased bg-grid-white/[0.02] ">
<HeroSection/>
<FeaturedCourses/>
  </main>
  
  </>
  );
}
