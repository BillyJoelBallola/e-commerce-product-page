export const computedDiscount = (price: number, discount: number) => {
  const computedDiscount = price * discount;
  const computedPrice = price - computedDiscount;

  return computedPrice;
};
