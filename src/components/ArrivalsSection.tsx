import ProductCard from "./ProductCard";
import Link from "next/link";

const NewArrivalsSection = () => {
  return (
    <section className="w-full py-12 ">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* New Arrival Product 1 */}
          <ProductCard
            name="T-SHIRT WITH TAPE DETAILS"
            title="New Product 1"
            description="T-SHIRT WITH TAPE DETAILS"
            price="$45"
            rating={4} // Rating is 4 stars
            score="4.5/5"
            imageUrl="/arrivals/Frame1.png"
            link="/product/new1"
          />

          {/* New Arrival Product 2 */}
          <ProductCard
            name="T-SHIRT WITH TAPE DETAILS"
            title="New Product 2"
            description="Stylish and comfortable for everyday wear."
            price="$60"
            oldPrice="$150"
            discount="-30%"
            rating={5} // Rating is 5 stars
            score="4.5/5"
            imageUrl="/arrivals/Frame33.png"
            link="/product/new2"
          />

          {/* Add more products here */}

          <ProductCard
            name="T-SHIRT WITH TAPE DETAILS"
            title="Top Selling Product 3"
            description="Top rated and highly recommended."
            price="$100"
            rating={5}
            score="4.5/5"
            imageUrl="/arrivals/Frame 34.png"
            link="/product/top-selling3"
          />
          <ProductCard
            name="T-SHIRT WITH TAPE DETAILS"
            title="Top Selling Product 4"
            description="Perfect for all seasons, multi-purpose."
            price="$80"
            oldPrice="$150"
            discount="-30%"
            rating={4}
            score="4.5/5"
            imageUrl="/arrivals/Frame 38.png"
            link="/product/top-selling4"
          />
        </div>

        <button className="w-[218px] h-[52px] px-6 py-3 bg-maintext text-primary font-medium rounded-full border mx-auto block mt-8">
          <Link href="/sale">View All</Link>
        </button>
      </div>
    </section>
  );
};

export default NewArrivalsSection;


// pages/new-arrivals.tsx
// pages/new-arrivals.tsx
// import { GetStaticProps } from "next";
// import ProductCard from "../components/ProductCard";
// import Link from "next/link";
// import { client } from "@/sanity/lib/client";

// // Product ka type define yahin kar lete hain
// type Product = {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   imageUrl: string;
//   category: string;
//   discountPercent?: number; // Optional field
//   new?: boolean; // Optional field
//   colors?: string[]; // Optional array of colors
//   sizes?: string[]; // Optional array of sizes
//   rating?: number; // Add rating (optional)
//   score?: string;  // Add score (optional)
// };

// // getStaticProps function
// export const getStaticProps: GetStaticProps = async () => {
//   const query = `*[_type == "products"]{
//     _id,
//     name,
//     price,
//     description,
//     "imageUrl": image.asset->url,
//     category,
//     discountPercent,
//     new,
//     colors,
//     sizes,
//     rating,  // Rating ko bhi fetch karna hai
//     score     // Score ko bhi fetch karna hai
//   }`;

//   // Sanity se products fetch karte hain
//   const products: Product[] = await client.fetch(query);

//   console.log("Fetched Products:", products)
//   return {
//     props: {
//       products,
//     },
//     revalidate: 60, // Data revalidate hoga har 60 seconds mein
//   };
// };

// // Props ka type define karna
// interface NewArrivalsSectionProps {
//   products: Product[];
// }

// // Component
// const NewArrivalsSection: React.FC<NewArrivalsSectionProps> = ({ products }) => {
//   // Make sure products is always an array (empty or with data)
//   const productList = Array.isArray(products) ? products : [];

//   return (
//     <section className="w-full py-12">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center mb-8">New Arrivals</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {productList.length > 0 ? (
//             productList.map((product) => (
//               <ProductCard
//                 key={product._id}
//                 name={product.name}
//                 title={product.name}
//                 description={product.description}
//                 price={`$${product.price}`}
//                 imageUrl={product.imageUrl}
//                 link={`/product/${product._id}`} // Har product ka unique link
//                 rating={product.rating || 0} // Default value 0 agar rating nahi ho
//                 score={product.score || "N/A"} // Default value "N/A" agar score nahi ho
//               />
//             ))
//           ) : (
//             <p>No products available</p> // Agar products nahi hain, to yeh message dikhai dega
//           )}
//         </div>
//         <button className="w-[218px] h-[52px] px-6 py-3 bg-maintext text-primary font-medium rounded-full border mx-auto block mt-8">
//           <Link href="/sale">View All</Link>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default NewArrivalsSection;



