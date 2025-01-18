import React from 'react';
import Image from 'next/image';

interface ProductProps {
    product: {
        id: string;
        name: string;
        price: string;
        image: string;
    };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
    return (
        <div className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-200">
            <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full object-cover rounded-md"
            />
            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <button className="bg-gray-100 text-black px-4 py-2 rounded-lg mt-4 hover:bg-gray-200">
                View Details
            </button>
        </div>
    );
};

export default ProductCard;
