import { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function Carousel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.8;
    scrollRef.current.scrollTo({
      left:
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="flex items-center">
          <button
            className="p-2 hover:bg-neutral-200 duration-150 ease-in-out cursor-pointer"
            onClick={() => scroll("left")}
          >
            <IoChevronBack />
          </button>
          <button
            className="p-2 hover:bg-neutral-200 duration-150 ease-in-out cursor-pointer"
            onClick={() => scroll("right")}
          >
            <IoChevronForward />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex items-center gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {children}
      </div>
    </section>
  );
}

export default Carousel;
