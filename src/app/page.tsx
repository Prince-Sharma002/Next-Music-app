import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
    
      <HeroSection />
      <FeaturedCourses/>
      <WhyChooseUs />
      <TestimonialCards />
      <UpcomingWebinar />
      <Instructor />
      <Footer />
    </>
  );
}
