import PostsSection from "./PostsSection"

const TrendyPosts = () => {
    const posts = [
        {
          title: "Opening Day of Boating Season, Seattle WA",
          description:
            "Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge",
          profileImg: "/images/james.jpg",
          bannerImg: "/images/trendy1.jpg",
          author: "James",
          date: "August 18 , 2022",
        },
    
        {
          title: "How to choose the right laptop for programming",
          description:
            "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
          profileImg: "/images/louis.jpg",
          bannerImg: "/images/trendy2.jpg",
          author: "Louis Hoebregts",
          date: "July 25 , 2022",
        },
        {
          title: "How we built the first real self-driving car",
          description: "Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when",
          profileImg: "/images/mary.jpg",
          bannerImg: "/images/trendy3.jpg",
          author: "Mary",
          date: "July 14 , 2022",
        },
        {
          title: "How to Persuade Your Parents to Buy Fast Food",
          description: "Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.",
          profileImg: "/images/jon.jpg",
          bannerImg: "/images/trendy4.jpg",
          author: "Jon Kantner",
          date: "May 10 , 2022",
        },
        {
          title: "Opening Day of Boating Season, Seattle WA",
          description:
            "Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge",
          profileImg: "/images/louis.jpg",
          bannerImg: "/images/trendy1.jpg",
          author: "James",
          date: "August 18 , 2022",
        },
    ];
    
    return (
        <PostsSection posts={posts} title={ "Trendy Posts"} />
    )
}
export default TrendyPosts