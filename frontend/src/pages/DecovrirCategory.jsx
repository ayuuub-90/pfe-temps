// Dans DecovrirCategory.js
import React, { useState, useEffect } from 'react';
import { useGetAllCategoriesQuery } from '../redux/api/categoryApiSlice';
import { Link } from "react-router-dom";



function DecovrirCategory() {
    const { data: categoryList, isLoading, isError } = useGetAllCategoriesQuery();
    const [categories, setCategories] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
   

    useEffect(() => {
        if (categoryList) {
            setCategories(categoryList);
        }
    }, [categoryList]);

    function PrevPub() {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? categories.length - 1 : prevIndex - 1));
    }

    function NextPub() {
        setCurrentIndex(prevIndex => (prevIndex === categories.length - 1 ? 0 : prevIndex + 1));
    }

    

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching categories</div>;

    return (
        <>
   

        <>
      
            <section className="py-16 bg-gray-100">
                <div className=" container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Discover Categories</h2>
                    <div className='relative'>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {categories.slice(currentIndex, currentIndex + 4).map(category => (
        <Link key={category.id} to={`/products/category/${category._id}`} >
            <div className="text-center">
                <div className="flex flex-col items-center">
                    <div className="rounded-full overflow-hidden bg-white shadow-md flex justify-center items-center" style={{ width: '200px', height: '200px' }}>
                        <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-lg font-semibold mt-4 mb-2">{category.name}</h3>
                </div>
            </div>
        </Link>
    ))}
</div>


                        <div className="absolute inset-y-0 left-0 flex items-center justify-start 0 p-4 mt-1/2">
                            <button onClick={PrevPub} className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md">&#10094;</button>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center justify-end 0 p-4 mt-mt-1/2">
                            <button onClick={NextPub} className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md">&#10095;</button>
                        </div>

                    </div>
                </div>
            </section>

        
            
        </>
        </>
    );
}

export default DecovrirCategory;
