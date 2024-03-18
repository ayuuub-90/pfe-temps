import { Link } from "react-router-dom"

export default function TopProduct({ product }) {
    return (
        <Link to={`/product/${product._id}`}>
        <div class="relative h-30  mt-10 mb-10 mb-2">
          <div className="flex justify-center items-center p-6 h-64">
                  <img src={product.images.image1} alt="" className="h-auto w-40" />
              </div>
            <h3 class="text-lg font-semibold mt-1">{product.name}</h3>
            <p class="text-base mt-1">${product.price}</p>
            <a href="#" class="block py-2 px-4 bg-black mb-6 text-white text-center rounded-md transition duration-300 ease-in-out hover:bg-white hover:text-black">Add to Cart</a>
        </div>
        </Link>
        
    );
}
