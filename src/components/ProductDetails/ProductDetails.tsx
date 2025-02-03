import { useParams } from "next/navigation";
import productDetails from "@/data/product-details.json";

const ProductDetail = () => {
  const { productId, subproduct } = useParams(); // Get params from URL

  console.log("Params:", { productId, subproduct });

  if (!productId) {
    return <h1>Error: No product selected.</h1>;
  }

  const product = productDetails[productId];

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  if (!subproduct) {
    return <h1>Error: No subproduct selected.</h1>;
  }

  // Ensure subproducts exist and use optional chaining (?.) to prevent undefined errors
  const subproductData = product.subproducts?.find(
    (item) => item?.name?.toLowerCase().replace(/\s+/g, "-") === subproduct
  );

  console.log("Matching Subproduct:", subproductData);

  if (!subproductData) {
    return <h1>Subproduct Not Found</h1>;
  }

  return (
    <div>
      <h1>{subproductData.name}</h1>
      <p>{subproductData.short_description}</p>
      <img src={subproductData.image} alt={subproductData.name} />
    </div>
  );
};

export default ProductDetail;
