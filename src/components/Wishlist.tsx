"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/app/brands/page";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setWishlist(storedWishlist);
    }
  }, []);

  // Remove from wishlist
  const removeFromWishlist = (id: string) => {
    const updatedWishlist = wishlist.filter((item) => item._id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">My Wishlist</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {wishlist.length > 0 ? (
            wishlist.map((product) => (
              <div key={product._id} className="bg-white p-4 rounded-lg shadow-lg">
                <Link href={`/sale/${product._id}`}>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    height={100}
                    width={100}
                    className="w-full h-48 md:h-64 object-cover rounded-md"
                  />
                </Link>
                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                <p className="text-gray-700">${product.price}</p>
                <button
                  className="mt-2 w-full py-2 bg-red-500 text-white hover:bg-white hover:text-black border border-black transition-all rounded-md"
                  onClick={() => removeFromWishlist(product._id)}
                >
                  Remove from Wishlist
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Your wishlist is empty.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default WishlistPage;







