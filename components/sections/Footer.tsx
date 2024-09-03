import Comments from "./Comments";
import Follow from "./Follow";
import MegaNews from "./MegaNews";

const Footer = () => {
  return (
    <section className="mx-auto py-8 hidden lg:block sm:block md:block">
      <div className="flex flex-row items-center gap-5 sm:mr-6 md:mr-6">
        <MegaNews />

        <div className="lg:flex md:flex sm:hidden hidden bg-white flex-row items-center gap-5 w-1/2">
          
          <Comments />
          <Follow />
        </div>
      </div>
    </section>
  );
};
export default Footer;
