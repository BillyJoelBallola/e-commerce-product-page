import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";
import { dummyData } from "../utils/data";

function HomePage() {
  return (
    <div className="space-y-8 md:space-y-12 py-18 md:py-16">
      <header className="h-[250px] overflow-hidden md:h-full border-b">
        <img
          className="min-h-[450px] object-cover object-right"
          src="/header-img.png"
          alt="header-image"
        />
      </header>
      <Carousel title="Trending">
        {dummyData.map((data) => (
          <ProductCard key={data.id} info={data} />
        ))}
      </Carousel>
      <section className="hidden md:flex flex-col gap-8">
        <h2 className="text-center text-4xl font-semibold">SHOP BY CATEGORY</h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <img
              className="size-full object-cover"
              src="https://www.converse.ph/media/wysiwyg/conph_men_desktop.jpg"
              alt="show-for-men"
            />
          </div>
          <div>
            <img
              className="size-full object-cover"
              src="https://www.converse.ph/media/wysiwyg/conph_women_desktop.jpg"
              alt="show-for-women"
            />
          </div>
          <div>
            <img
              className="size-full object-cover"
              src="https://www.converse.ph/media/wysiwyg/conph_kids_desktop.jpg"
              alt="show-for-kids"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
