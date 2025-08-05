export const formatPrice = (price: number) => {
  const formatted = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  }).format(price);

  return `${formatted}`;
};

export const decimalToPercentage = (value: number) => {
  const convertedVal = value * 100;

  return `${convertedVal}%`;
};
