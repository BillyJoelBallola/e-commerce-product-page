import ProductImagePreview from "./ProductImagePreview";
import ProductInfo from "./ProductInfo";

function Product() {
  const dummyData = [
    {
      id: "fhHxgkd12",
      brand: "sneaker company",
      name: "Fall Limited Edition Sneakers",
      description:
        "These low-profile sneakers are you perfect casual wear companion. Fearturing a durable rubber outer sole, they'll withstand everything the weather can offer",
      price: 10340,
      discount: 0.5,
      quantity: 0,
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/92c5672d-440c-4b21-8e09-56cd1237add8/A%27ONE+EP.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8a0473c2-fdf1-4fc5-85af-1fe62916c318/A%27ONE+EP.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d2e64b1f-7bdf-479e-b333-c56938a6e90b/A%27ONE+EP.png",
        "http://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/790d9b12-e8c5-4fe7-a001-d2f7d8b880e1/A%27ONE+EP.png",
      ],
    },
  ];

  return (
    <div className="h-[85dvh] grid place-items-center my-4 md:m-0">
      <div className="grid md:grid-cols-2 w-full">
        <ProductImagePreview images={dummyData[0].images} />
        <ProductInfo info={dummyData[0]} />
      </div>
    </div>
  );
}

export default Product;
