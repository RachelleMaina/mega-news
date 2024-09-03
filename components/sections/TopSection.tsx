import CardTwo from "../cards/CardTwo";
import Slider from "../shared/Slider";

const TopSection = () => {
  const post1 = {
    bannerImg: "/images/car.jpg",
    title: "How to Drive a Car Safely",
    description:
      "Ah, the joy of the open road—it's a good feeling. But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen to anybody, there are things you can do to drive safely and do your best to avoid them.",
  };
  const post2 = {
    bannerImg: "/images/music.jpg",
    title: "How to Make Dance Music",
    description:
      "Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users. ",
  };

  const sliderPosts = [
    {
      bannerImg: "/images/tech.jpg",
      title: "Why I Stopped Using Multiple Monitor",
      description:
        "A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like",
    },
    {
      bannerImg: "/images/image1.jpg",
      title: "2. Why I Stopped Using Multiple Monitor",
      description:
        "A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like",
    },
    {
      bannerImg: "/images/image2.jpg",
      title: "3. Why I Stopped Using Multiple Monitor",
      description:
        "A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like",
    },
  ];

  return (
    <section className="hidden sm:block mx-auto pt-5 ">
      <div className="container mx-auto flex flex-row gap-5 p-2">
        <CardTwo {...post1} />
        <CardTwo {...post2} />
        <Slider posts={sliderPosts} />
      </div>
    </section>
  );
};
export default TopSection;
