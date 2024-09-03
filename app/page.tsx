import MobileNav from "@/components/nav/MobileNav";
import Navbar from "@/components/nav/Navbar";
import TabNav from "@/components/nav/TabNav";
import Footer from "@/components/sections/Footer";
import LatestVideos from "@/components/sections/LatestVideos";
import Matches from "@/components/sections/Matches";
import NewPosts from "@/components/sections/NewPosts";
import PopularPosts from "@/components/sections/PopularPosts";
import TopPosts from "@/components/sections/TopPosts";
import TopSection from "@/components/sections/TopSection";
import TopTags from "@/components/sections/TopTags";
import TrendyPosts from "@/components/sections/TrendyPosts";
import Weather from "@/components/sections/Weather";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
       <TabNav />
      <MobileNav />
      <TopTags />
      <TopSection />
      <PopularPosts />
      <Matches />
      <NewPosts />
      <LatestVideos />
      <TrendyPosts />
      <Weather />
      <TopPosts />
      <Footer /> 
    </div>
  );
}
