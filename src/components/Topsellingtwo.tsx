
import ProductCard from "./ProductCard";

const TopSellingSectiontwo = () => {
  return (
    <section className="w-full py-12 ">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">
          You might also like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Top Selling Product 1 */}
          <ProductCard
            name="T-SHIRT WITH TAPE DETAILS"
            title="Top Selling Product 1"
            description="Most popular product with high demand."
            price="$75"
            oldPrice="$150"
            discount="-30%"
            rating={5} // Rating is 5 stars
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
      </div>
    </section>
  );
};

export default TopSellingSectiontwo;
