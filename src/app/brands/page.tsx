
"use client"

import WishlistPage from "@/components/Wishlist";




export interface Product {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  discountPercent: number;
  new: boolean;
  colors: string[];
  sizes: string[];
  _id: string;
  quantity?: number;
}

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <WishlistPage/>
    </div>
  );
}






