import { Link } from "react-router";
import { formatPrice } from "../utils/format";
import type { Product } from "../utils/types";
import { BsCart2 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function ProductCard({ info }: { info: Product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(info));
  };

  return (
    <div className="flex flex-col border border-transparent hover:border-neutral-900">
      <Link
        to={`/product/${info.id}`}
        className="w-[250px] h-[300px] md:w-[350px] md:h-[400px] bg-neutral-200"
      >
        <img
          className="size-full object-cover"
          src={info.images[0]}
          alt="product-img"
        />
      </Link>
      <div className="p-2 flex items-center justify-between">
        <div className="">
          <h3 className="font-light text-sm">{info.name}</h3>
          <span>{formatPrice(info.price)}</span>
        </div>
        <button
          onClick={handleAddToCart}
          className="p-2 hover:bg-neutral-200 rounded-full duration-150 ease-in-out cursor-pointer"
        >
          <BsCart2 className="size-5" />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
