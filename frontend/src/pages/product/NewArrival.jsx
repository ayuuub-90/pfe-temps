import { Link } from "react-router-dom";
export function NewArrival({ product }) {
  return (
      <Link to={`/product/${product._id}`}>
          <div className="bg-gray-100 relative p-4 mt-5 border-2">
              <div className="flex justify-center items-center p-6 h-64">
                  <img src={product.images.image1} alt="" className="h-auto w-28" />
              </div>
              <div className="flex justify-between items-center flex-grow h-24">
    <div>
        <h6 className="text-lg lg:text-xl font-semibold">{product.name}</h6>
    </div>
    <div className="text-lg lg:text-xl text-white bg-gray-700 p-2 rounded-md border border-gray-600 shadow-md transition duration-300 ease-in-out transform hover:scale-105">
    {product.price}$
</div>

</div>

              <div className="absolute top-2 left-2 bg-white flex justify-center items-center w-12 h-11 border-2 border-black rounded-full">
                  <span className="text-sm lg:text-xl">New</span>
              </div>
          </div>
      </Link>
  );
}