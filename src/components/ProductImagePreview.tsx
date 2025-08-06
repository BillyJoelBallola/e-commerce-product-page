import { useState } from "react";

function ProductImagePreview({ images }: { images: string[] }) {
  const [activeImg, setActiveImg] = useState(0);

  const changeActiveImg = (idx: number) => {
    setActiveImg(idx);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="h-[250px] md:h-[350px] aspect-auto overflow-hidden bg-neutral-100">
        <img
          className="size-full object-cover"
          src={images[activeImg]}
          alt="active-image"
        />
      </div>
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        {images.map((item, idx) => (
          <button
            key={idx}
            onClick={() => changeActiveImg(idx)}
            className={`min-h-24 md:size-full overflow-hidden cursor-pointer bg-neutral-100 border-2 relative ${
              activeImg === idx
                ? "border-neutral-900 after:content-[''] after:z-10 after:absolute after:inset-0 after:bg-neutral-900/50"
                : "border-transparent"
            }`}
          >
            <img
              className="size-full aspect-square object-cover"
              src={item}
              alt="active-image"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductImagePreview;
