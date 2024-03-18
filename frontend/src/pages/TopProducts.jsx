import { useGetAllProductsQuery } from "../redux/api/productApiSlice";
import TopProduct from "./product/TopProduct";
export default function TopProducts(){
    const { data: topProducts } = useGetAllProductsQuery();
    return (
        <section id="featured-products" className="text-center">
            <div className="container mx-auto">
                <div className="text-center mb-6">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                        Check Out Our Top Products
                    </h1>
                    <p className="text-lg text-gray-700 mt-2">
                        Discover our top-rated products and elevate your shopping experience.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center">
                    {topProducts?.map(topProduct => (
                        <div key={topProduct._id} className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/4 mb-4 px-2 bg-gray-100 ml-5 mr-5 border-2">
                            <TopProduct product={topProduct} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
