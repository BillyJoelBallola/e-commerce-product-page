import { BsCart2 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import Button from "./Button";

import { formatPrice, decimalToPercentage } from "../utils/format";
import { computedDiscount } from "../utils/computedDiscount";
import { addToCart } from "../features/cart/cartSlice";
import type { Product } from "../utils/types";

function ProductInfo({ info }: { info: Product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(info));
  };

  return (
    <div className="py-4 md:px-8 md:py-0 lg:p-8 space-y-4">
      <div>
        <span className="uppercase font-semibold text-neutral-600 text-sm">
          {info.brand}
        </span>
        <h1 className="font-bold text-4xl mt-4 mb-6 text-neutral-900">
          {info.name}
        </h1>
        <p className="text-neutral-600 text-sm">{info.description}</p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-semibold">
            {formatPrice(computedDiscount(info.price, info.discount))}
          </span>
          <div className="text-sm font-semibold px-1.5 text-white bg-neutral-900">
            {decimalToPercentage(info.discount)}
          </div>
        </div>
        <span className="font-semibold text-neutral-700 line-through">
          {formatPrice(info.price)}
        </span>
      </div>

      <div className="mt-8">
        <Button onClick={handleAddToCart}>
          <BsCart2 className="size-4" />
          <span className="font-semibold text-sm pt-0.5">Add to cart</span>
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;
