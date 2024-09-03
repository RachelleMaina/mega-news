import { Icon } from "@iconify/react";
import CardThree from "../cards/CardThree";
import Title from "../shared/Title";
import PostsSlider from "../shared/PostsSlider";

const NewPosts = () => {
  const posts = [
    {
      title: "Opening Day of Boating Season, Seattle WA",
      description:
        "Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge",
      profileImg: "/images/james.jpg",
      bannerImg: "/images/image1.jpg",
      author: "James",
      date: "August 18 , 2022",
    },

    {
      title: "How to choose the right laptop for programming",
      description:
        "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
      profileImg: "/images/louis.jpg",
      bannerImg: "/images/image2.jpg",
      author: "Louis Hoebregts",
      date: "July 25 , 2022",
    },
    {
      title: "How we built the first real self-driving car",
      description:
        "Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when",
      profileImg: "/images/mary.jpg",
      bannerImg: "/images/image3.jpg",
      author: "Mary",
      date: "July 14 , 2022",
    },
    {
      title: "How to Persuade Your Parents to Buy Fast Food",
      description:
        "Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.",
      profileImg: "/images/jon.jpg",
      bannerImg: "/images/image4.jpg",
      author: "Jon Kantner",
      date: "May 10 , 2022",
    },
    {
      title: "Opening Day of Boating Season, Seattle WA",
      description:
        "Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge",
      profileImg: "/images/louis.jpg",
      bannerImg: "/images/image1.jpg",
      author: "James",
      date: "August 18 , 2022",
    },
    {
      title: "Opening Day of Boating Season, Seattle WA",
      description:
        "Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge",
      profileImg: "/images/louis.jpg",
      bannerImg: "/images/image1.jpg",
      author: "James",
      date: "August 18 , 2022",
    },
  ];

  return (
    <>
    <section className="mx-auto pt-4 pb-8 hidden lg:block md:block sm:block">
      <div className="container mx-auto flex flex-row justify-between items-center py-4 px-2">
        <Title title={'New Posts'} />
        <div className="flex flex-row gap-2">
          <button style={{
            backgroundColor: "rgba(62, 50, 50, 0.05)"
          }} className="rounded-lg py-2 px-3 text-black-75 font-semibold text-sm flex flex-row justify-content items-center gap-1">
            Show All
            <Icon
              icon="octicon:chevron-right-16"
              style={{ fontSize: "16px", color: "#3E3232" }}
            />
          </button>
        </div>
      </div>
      <div className="container mx-auto p-2 ">
        <div className="md:grid md:grid-cols-2 md:gap-5 sm:space-y-5">
          {posts.slice(0, 6).map((post, index) => {
            return (
              <div
                key={index}
                className={` flex-shrink-0 flex items-center justify-center`}
              >
                <CardThree {...post} />
              </div>
            );
          })}
        </div>
      </div>
      </section>
      
       {/* Mobile view */}
      <PostsSlider posts={posts} title={'New Posts'} />
      
      </>
  );
};
export default NewPosts;
