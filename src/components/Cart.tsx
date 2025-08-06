import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { BsCart2, BsCartCheck } from "react-icons/bs";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import Button from "./Button";
import type { Product } from "../utils/types";
import { formatPrice } from "../utils/format";
import { computedDiscount } from "../utils/computedDiscount";

function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const items = useSelector(
    (state: { cart: { items: Product[] } }) => state.cart.items
  );

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  const totalOrigPrice = items.reduce((acc, item) => acc + item.price, 0);
  const overallTotalWithDiscount = items.reduce(
    (acc, item) => acc + computedDiscount(item.price, item.discount),
    0
  );

  return (
    <>
      <button
        className="relative p-1.5 cursor-pointer hover:bg-neutral-200 duration-150 ease-in-out rounded-full"
        onClick={() => setIsCartOpen(true)}
      >
        {items.length !== 0 && (
          <div className="absolute top-0 -right-0.5 bg-neutral-950 text-neutral-50 text-xs rounded-full size-4">
            {items.length}
          </div>
        )}
        <BsCart2 className="size-5" />
      </button>

      {isCartOpen && (
        <div
          className="absolute inset-0 h-dvh bg-neutral-900/50 z-50"
          onClick={() => setIsCartOpen(false)}
        >
          <div
            className="absolute right-0 min-h-dvh w-full md:w-lg bg-white shadow-xl p-4 flex flex-col justify-between gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="cursor-pointer p-1 hover:bg-neutral-200 duration-150 ease-in-out rounded-full"
              >
                <IoClose className="size-6" />
              </button>
            </div>
            <div className="flex flex-col gap-4 grow overflow-auto pb-10">
              {items.length !== 0 ? (
                items.map((item) => <CartItem key={item.id} item={item} />)
              ) : (
                <p>Cart is empty</p>
              )}
            </div>
            <div>
              {items.length !== 0 && (
                <div className="border-t py-4">
                  <div className="flex items-center justify-between">
                    <span>Item/s:</span>
                    <span>{items.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Original Price Total:</span>
                    <span>{formatPrice(totalOrigPrice)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Total Discount:</span>
                    <span>
                      - {formatPrice(totalOrigPrice - overallTotalWithDiscount)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between font-semibold">
                    <span>Overall Total:</span>
                    <span>{formatPrice(overallTotalWithDiscount)}</span>
                  </div>
                </div>
              )}
              <Button>
                <BsCartCheck className="size-4" />
                <span className="font-semibold text-sm pt-0.5">Checkout</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
