import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon.jsx";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {

  return (
    <>
      <div className="w-[358px] h-[400px] border-l-[1px] border-b-[1px] hover:bg-gray-50 relative ">
        <Link to={`/product/${product._id}`}>
          <div  className="w-[358px] h-[300px] flex items-center justify-center">
            <img src={product.image} className="h-full pt-4" />
          </div>
        </Link>

        <div className="flex justify-between">
          <div className="m-5 flex flex-col">
            <label className="font-medium text-[18px] ">{product.name}</label>
            <span className="mt-2 text-blue-900 font-medium">
              $ {product.price.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center mr-8 ">
            <FaShoppingCart
              className=" w-[20px] h-[20px] cursor-pointer"
              title="Add To Cart"
            />
          </div>
        </div>
        <HeartIcon product={product} />
      </div>
    </>
  );
};

export default ProductCard;
