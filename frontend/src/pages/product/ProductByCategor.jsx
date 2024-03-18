import { useParams } from "react-router";
import { useGetProductByCategorieQuery } from "../../redux/api/productApiSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Navigation from "../Navigation.jsx";
export default function ProductByCategory() {
    const { id } = useParams();

    const { data: ProductsByCategory } = useGetProductByCategorieQuery(id);

    if (!ProductsByCategory) {
        return <div>No products available for this category</div>;
    }

  
 
    
    return (
        <>
            <Navigation />
            <div className="container mx-auto">
                <div className="text-center my-8">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                        Products By Category
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {ProductsByCategory.map((product) => (
                        <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
                            <div className="flex justify-center items-center p-6 h-64">
                                <img src={product.image} alt={product.name} className="h-auto w-2/3" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                                <p className="mt-2 text-lg font-bold">${product.price} <FontAwesomeIcon icon={faShoppingCart} className="ml-1" /></p>
                                <button className=" bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded  inset-y-0 right-0" onClick={() => addToCart(product)}><FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
    
    
}
