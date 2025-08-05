import { IoClose } from "react-icons/io5";
import type { Product } from "../utils/types";
import { decimalToPercentage, formatPrice } from "../utils/format";
import { computedDiscount } from "../utils/computedDiscount";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";
import QuantityInput from "./QuantityInput";
import { useDispatch } from "react-redux";

function CartItem({ item }: { item: Product }) {
  const dispatch = useDispatch();

  const adjustQty = (action: "add" | "subtract") => {
    if (action === "add") {
      dispatch(increaseQuantity(item));
    }

    if (action === "subtract") {
      if (item.quantity <= 0) return;
      dispatch(decreaseQuantity(item));
    }
  };

  return (
    <div className="rounded-lg flex gap-2">
      <div className="grid place-items-center px-2">
        <button
          onClick={() => dispatch(removeFromCart(item))}
          className="cursor-pointer p-1 hover:bg-neutral-200 duration-150 ease-in-out rounded-full"
        >
          <IoClose className="size-5" />
        </button>
      </div>
      <div className="h-40 aspect-square overflow-hidden bg-neutral-200">
        <img
          className="size-full object-cover"
          src={item.images[0]}
          alt="product-img"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold leading-5">{item.name}</h2>
          <div>
            <div className="flex items-center gap-3 -mb-2">
              <span className="text-xl font-semibold">
                {formatPrice(computedDiscount(item.price, item.discount))}
              </span>
              <div className="text-sm font-semibold px-1.5 text-white bg-neutral-900">
                {decimalToPercentage(item.discount)}
              </div>
            </div>
            <span className="text-sm font-semibold text-neutral-700 line-through">
              {formatPrice(item.price)}
            </span>
          </div>
        </div>
        <QuantityInput adjustQty={adjustQty} quantity={item.quantity} />
      </div>
    </div>
  );
}

export default CartItem;
