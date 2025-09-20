import { useParams } from "react-router-dom";

export default function IndividualProduct() {
  const { id } = useParams(); // get the product id from the URL

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      
    </div>
  );
}
