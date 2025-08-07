import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";
import { dummyData } from "../utils/data";

function HomePage() {
  const categoryImgs = [
    {
      img: "https://www.converse.ph/media/wysiwyg/conph_men_desktop.jpg",
      label: "SHOP FOR MEN",
    },
    {
      img: "https://www.converse.ph/media/wysiwyg/conph_women_desktop.jpg",
      label: "SHOP FOR WOMEN",
    },
    {
      img: "https://www.converse.ph/media/wysiwyg/conph_kids_desktop.jpg",
      label: "SHOP FOR KIDS",
    },
  ];

  return (
    <div className="space-y-8 md:space-y-12 py-14">
      <header className="h-[250px] overflow-hidden md:h-full">
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
      <section className="flex flex-col gap-4 md:gap-8">
        <h2 className="text-center text-xl md:text-4xl font-semibold">
          SHOP BY CATEGORY
        </h2>
        <div className="flex items-center gap-4 overflow-x-auto">
          {categoryImgs.map((cat) => (
            <div
              className="h-[300px] md:h-[450px] relative -z-10"
              key={cat.label}
            >
              <img
                className="size-full object-cover"
                src={cat.img}
                alt="show-for-men"
              />
              <div className="absolute bottom-0 left-0 right-0 py-2 md:py-4 bg-neutral-900 text-white text-center">
                <span className="text-xs md:text-md font-semibold">
                  {cat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
