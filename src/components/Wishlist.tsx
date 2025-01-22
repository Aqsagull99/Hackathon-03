"use client";
import { Product } from "@/app/brands/page";
import Image from "next/image";
import { useState } from "react";

interface WishlistProps {
  products: Product[];
}

const Wishlist = ({ products }: WishlistProps) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [notification, setNotification] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null); // Track selected color
  const [selectedSize, setSelectedSize] = useState<string | null>(null); // Track selected size

  const addToWishlist = (product: Product) => {
    if (!wishlist.find((item) => item.name === product.name)) {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
      setNotification(`${product.name} has been added to your wishlist!`);
      setTimeout(() => setNotification(null), 3000); // Hide notification after 3 seconds
    }
  };

  const removeFromWishlist = (productName: string) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.name !== productName)
    );
    setNotification(`Product removed from wishlist.`);
    setTimeout(() => setNotification(null), 3000); // Hide notification after 3 seconds
  };

  return (
    <div className="min-h-screen bg-gray-50 p-5">
      {/* Wishlist Notification */}
      {notification && (
        <div className="fixed top-0 left-0 right-0 bg-black text-white text-center py-3 shadow-lg z-50">
          <span className="text-lg font-semibold">{notification}</span>
        </div>
      )}

      <div className="pt-16">
        {/* <h1 className="text-3xl font-bold text-center mb-8 text-black">Your Wishlist</h1> */}

        {/* Wishlist Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.length === 0 ? (
            <p className="text-center text-lg text-gray-500">Your wishlist is empty.</p>
          ) : (
            wishlist.map((product) => (
              <div
                key={product.name}
                className="bg-white border border-gray-300 rounded-lg shadow-sm p-5 hover:shadow-md transition"
              >
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  height={150}
                  width={150}
                  className="h-40 w-full object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold mb-2 text-black">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-lg font-bold text-black">
                  ${product.price}{" "}
                  {product.discountPercent > 0 && (
                    <span className="text-red-500 text-sm ml-2">
                      ({product.discountPercent}% off)
                    </span>
                  )}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.colors.map((color, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 text-sm bg-gray-100 rounded-md cursor-pointer ${selectedColor === color ? 'bg-gray-950 text-white' : ''}`}
                      onClick={() => setSelectedColor(color)} // Set selected color
                    >
                      {color}
                    </span>
                  ))}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.sizes.map((size, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 text-sm bg-gray-200 rounded-md cursor-pointer ${selectedSize === size ? 'bg-gray-950 text-white' : ''}`}
                      onClick={() => setSelectedSize(size)} // Set selected size
                    >
                      {size}
                    </span>
                  ))}
                </div>

                {/* Remove from Wishlist Button */}
                <button
                  onClick={() => removeFromWishlist(product.name)}
                  className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700 transition duration-200"
                >
                  Remove from Wishlist
                </button>
              </div>
            ))
          )}
        </div>

        {/* Available Products Section */}
        {/* <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-black">
          Available Products
        </h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white border border-gray-300 rounded-lg shadow-sm p-5 hover:shadow-md transition"
            >
                <Image
                src={product.imageUrl}
                alt={product.name}
                width={150}
                 height={150} 

                className="h-40 w-full object-cover rounded-md mb-4"
              /> 
              <h2 className="text-xl font-semibold mb-2 text-black">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-lg font-bold text-black">
                ${product.price}{" "}
                {product.discountPercent > 0 && (
                  <span className="text-red-500 text-sm ml-2">
                    ({product.discountPercent}% off)
                  </span>
                )}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.colors.map((color, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 text-sm bg-gray-100 rounded-md cursor-pointer ${selectedColor === color ? 'bg-gray-950 text-white' : ''}`}
                    onClick={() => setSelectedColor(color)} // Set selected color
                  >
                    {color}
                  </span>
                ))}
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map((size, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 text-sm bg-gray-200 rounded-md cursor-pointer ${selectedSize === size ? 'bg-gray-950 text-white' : ''}`}
                    onClick={() => setSelectedSize(size)} // Set selected size
                  >
                    {size}
                  </span>
                ))}
              </div>

              {/* Add to Wishlist Button */}
              <button
                onClick={() => addToWishlist(product)}
                disabled={!selectedColor || !selectedSize} // Disable button if color or size isn't selected
                className={`mt-4 py-2 px-4 rounded-full transition duration-200 ${!selectedColor || !selectedSize ? 'bg-gray-500 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-800'}`}
              >
                Add to Wishlist
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;