"use client";
import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronRight, Search } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { Product } from "../brands/page";

const TopSellingSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

 

  const addToWishlist = (product: Product) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.some((item) => item._id === product._id)
        ? prevWishlist
        : [...prevWishlist, product];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedWishlist = localStorage.getItem("wishlist");
      setWishlistCount(storedWishlist ? JSON.parse(storedWishlist).length : 0);
    }
  }, [wishlist]);

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
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center mb-4 text-sm text-gray-600">
          <Link href="/">
            <span className="text-primary cursor-pointer hover:underline">Home</span>
          </Link>
          <span>
            <ChevronRight className="w-4 h-4" />
          </span>
          <span>Casual</span>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search for products..."
              className="border px-4 py-2 rounded-full text-sm lg:w-[577px] pl-10 bg-customGray"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500 size-4" />
          </div>
        </div>

        {/* Showing products and sort */}
        <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-0 sm:flex-row flex-col">
          <p className="text-sm text-gray-700 sm:mr-auto">
            Showing 1-10 of {filteredProducts.length} Products
          </p>
          <div className="relative">
            <button
              className="text-sm text-gray-700 flex items-center"
              onClick={toggleDropdown}
            >
              Sort by: Most Popular
              <span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </span>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-1 bg-white shadow-lg rounded-md z-10 w-48">
                <ul>
                  <li className="py-2 px-4 text-sm hover:bg-gray-100 cursor-pointer">Low Price</li>
                  <li className="py-2 px-4 text-sm hover:bg-gray-100 cursor-pointer">High Price</li>
                  <li className="py-2 px-4 text-sm hover:bg-gray-100 cursor-pointer">Most Popular</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-8">Casual</h2>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((data) => (
            <div
              key={data._id}
              className="flex flex-col items-center w-full max-w-[300px] mx-auto bg-white p-4 rounded-lg shadow-lg"
            >
              <Link href={`/sale/${data._id}`} className="w-full">
                <ProductCard
                  name={data.name}
                  title={data.name}
                  description={data.description.split(".")[0] + "."}
                  price={data.price as unknown as string}
                  oldPrice={data.discountPercent as unknown as string}
                  category={data.category}
                  rating={4}
                  score="4.5/5"
                  imageUrl={data.imageUrl }
                />
              </Link>

              {/* Add to Wishlist Button */}
              <button
                className="mt-2 w-full py-2 bg-black text-white hover:bg-white hover:text-black border border-black transition-all rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  addToWishlist(data);
                }}
              >
                Add to Wishlist
              </button>
            </div>
          ))}
        </div>

        {/* Horizontal Line */}
        <hr className="my-6 border-gray-300" />

        {/* Pagination Section */}
        <div className="flex items-center justify-between mt-6 sm:space-x-4 space-y-2 sm:space-y-0 sm:flex-row flex-col">
          <button
            className="px-4 py-2 text-primary rounded hover:bg-black hover:text-maintext border border-gray-400 flex justify-center items-center space-x-2 w-full sm:w-auto"
            disabled
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            {Array.from({ length: 7 }, (_, index) => index + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                className={`px-3 py-1 rounded-full ${
                  pageNumber === 1 ? "bg-gray-300 text-primary" : "bg-gray-100 text-gray-700"
                }`}
              >
                {pageNumber}
              </button>
            ))}
            <span>...</span>
          </div>

          <button className="px-4 py-2 text-primary rounded hover:bg-black hover:text-maintext border border-gray-400 flex justify-center items-center space-x-2 w-full sm:w-auto">
            <span>Next</span>
            <ArrowRight className="h-4 w-4 mt-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopSellingSection;











