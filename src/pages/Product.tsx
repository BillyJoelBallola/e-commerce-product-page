import { useParams } from "react-router";
import ProductImagePreview from "../components/ProductImagePreview";
import ProductInfo from "../components/ProductInfo";
import { dummyData } from "../utils/data";

function ProductPage() {
  // const { id } = useParams();

  const productData = dummyData.find((i) => i.id === "fhHxgkd12");

  if (!productData) return;

  return (
    <div className="h-[85dvh] grid place-items-center pt-14">
      <div className="grid md:grid-cols-2 w-full">
        <ProductImagePreview images={productData.images} />
        <ProductInfo info={productData} />
      </div>
    </div>
  );
}

export default ProductPage;
