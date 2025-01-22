import Link from "next/link";
import ProductCard from "./ProductCard";

const TopSellingSection = () => {
  return (
    <section className="w-full py-12 ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Top Selling</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Top Selling Product 1 */}
          <ProductCard
            name="T-SHIRT WITH TAPE DETAILS"
            title="Top Selling Product 1"
            description="Most popular product with high demand."
            price="$75"
            oldPrice="$150"
            discount="-30%"
            rating={5}
            score="4.5/5"
            imageUrl="/top/Frame 32.png"
            link="/product/top-selling1"
          />

          {/* Top Selling Product 2 */}
          <ProductCard
            name="T-SHIRT WITH TAPE DETAILS"
            title="Top Selling Product 2"
            description="Bestseller with excellent reviews."
            price="$90"
            rating={4}
            score="4.5/5"
            imageUrl="/top/Frame 33.png"
            link="/product/top-selling2"
          />
          {/* Add more products here */}

          <ProductCard
            name="T-SHIRT WITH TAPE DETAILS"
            title="New Product 3"
            description="Exclusive collection, limited edition."
            price="$85"
            rating={3}
            score="4.5/5"
            imageUrl="/top/Frame 34.png"
            link="/product/new3"
          />
          <ProductCard
            name="T-SHIRT WITH TAPE DETAILS"
            title="New Product 4"
            description="Great for summer, breathable fabric."
            price="$55"
            rating={5}
            score="4.5/5"
            imageUrl="/top/Frame 39.png"
            link="/product/new4"
          />
        </div>

        <button className="w-[218px] h-[52px] px-6 py-3 bg-maintext text-primary font-medium border rounded-full mx-auto block mt-8">
          <Link href="/brands">View All</Link>
        </button>
      </div>
    </section>
  );
};

export default TopSellingSection;
