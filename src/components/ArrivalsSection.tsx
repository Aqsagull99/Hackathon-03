"use client"
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { Product } from "@/app/brands/page";
import { client } from "@/sanity/lib/client";



const NewArrivalsSection = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "products"]{
          _id,
          name,
          price,
          description,
          "imageUrl": image.asset->url,
          category,
          discountPercent,
          new,
          colors,
          sizes
        }`
      )
      .then((data: Product[]) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  
  return (
    <section className="w-full py-12 ">
      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-8">New Arrivals</h2>

         
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {/* New Arrival Product 1 */}
  {products
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)
    .map((val) => (
      <div
        key={val._id}
        className="flex flex-col items-center w-full max-w-[300px] mx-auto bg-white p-4 rounded-lg shadow-lg"
      >
        <Link href={`/sale/${val._id}`} className="w-full">
          <ProductCard
            name={val.name}
            title={val.name}
            description={val.description.split(".")[0] + "."}
            price={val.price as unknown as string}
            rating={4}
            score="4.5/5"
            category={val.category}
            imageUrl={val.imageUrl}
          />
        </Link>

        
        
      </div>
    ))}
</div>


        <button className="w-[218px] h-[52px] px-6 py-3 bg-maintext text-primary font-medium rounded-full border mx-auto block mt-8">
          <Link href="/arrivals">View All</Link>
        </button>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
















