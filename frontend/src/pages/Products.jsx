import Navigation from "./Navigation.jsx";
import SecondNavigation from "./SecondNavigation.jsx";
import { useGetAllProductsQuery } from "../redux/api/productApiSlice.js";
import ProductCard from "./product/ProductCard.jsx";

const Products = () => {
  const { data: products } = useGetAllProductsQuery();

  return (
    <div className="h-[100vh] ">
      <Navigation />
      <SecondNavigation />
      {/* <div className="flex w-[100wh] sticky top-[53px] "> */}
      <div className="flex w-[100wh] h-full ">
        <div className="bg-gray-50 w-[15%] border">
          <h1 className="mx-10 my-6 font-medium">Filter</h1>
          <hr />
        </div>
        <div className="bg-white w-[85%] ">
          <h1 className="mx-10 my-6 font-medium">Products</h1>
          <hr />
          <div className=" w-full h-full flex flex-wrap">
            {products?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
