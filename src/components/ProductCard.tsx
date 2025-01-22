"use client";

import Image from "next/image";

type ProductCardProps = {
   name: string;
  title: string;
  description: string;
  price: string;
  discount?: string;
  oldPrice?: string;
  imageUrl: string;
  rating: number;
  score: string;
  link: string;
  callback?: () => void;
 
};



const ProductCard = ({
  
  title,
  description,
  price,
  discount,
  oldPrice,
  imageUrl,
  rating,
  score,
  callback,
  
}: ProductCardProps) => {
  return (
    <div
      className="w-full max-w-sm  shadow-md rounded-md overflow-hidden transition-transform hover:scale-105"
      onClick={callback}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={200}
        height={200}
        className="w-full h-56 object-cover "
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>

        {/* Rating and Score */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={index < rating ? "text-yellow-500" : "text-gray-300"}
              >
                ★
              </span>
            ))}
            <span className="text-sm text-gray-600">({score})</span>
          </div>
        </div>

        {/* Price and Discount */}
        <div className="mt-2 flex items-center gap-4">
          <span className="text-xl font-bold text-primary">{price}</span>
          {oldPrice && (
            <span className="text-sm text-gray-500 line-through">
              {oldPrice}
            </span>
          )}
          {discount && (
            <span className="text-sm text-red-500 font-semibold bg-red-100 px-2 py-1 rounded-full">
              {discount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
