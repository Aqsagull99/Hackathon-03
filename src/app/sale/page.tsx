"use client";
import { products } from "@/ProductsData";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";

import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";



const TopSellingSection = () => {
  // State to toggle the dropdown menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

   
   const products = useSelector((state:RootState)=>state.ecoProducts)
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

        {/* Showing products and sort */}
        <div className="flex flex-wrap items-center justify-between gap-4 sm:flex-row flex-col">
          <p className="text-sm text-gray-700"></p>
          <div className="relative">
            <button
              className="text-sm text-gray-700 flex items-center"
              onClick={toggleDropdown}
            >
             
              <span>
                {/* <ChevronDown className="w-4 h-4" /> */}
              </span>
            </button>
            <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-0 sm:flex-row flex-col">
              <p className="text-sm text-gray-700 sm:mr-auto">
                Showing 1-10 of 100 Products
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
              </div>
            </div>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-1 bg-white shadow-lg rounded-md z-10 w-48">
                <ul>
                  <li className="py-2 px-4 text-sm hover:bg-gray-100 cursor-pointer">
                    Low Price
                  </li>
                  <li className="py-2 px-4 text-sm hover:bg-gray-100 cursor-pointer">
                    High Price
                  </li>
                  <li className="py-2 px-4 text-sm hover:bg-gray-100 cursor-pointer">
                    Most Popular
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-8">Casual</h2>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => {
            return (
              <ProductCard
              key={product.id}
                name={product.name}
                title={product.title}
                description={product.description}
                price={product.price}
                oldPrice={product.oldPrice!}
                discount={product.discount!}
                rating={product.rating}
                score={product.score}
                imageUrl={product.imageUrl}
                link={product.link}
                callback={() => (window.location.href = `/sale/${product.id}`)}
              />
            );
          })}
        </div>

        {/* Horizontal Line */}
        <hr className="my-6 border-gray-300" />

        {/* Pagination Section */}
        <div className="flex items-center justify-between mt-6 sm:space-x-4 space-y-2 sm:space-y-0 sm:flex-row flex-col">
          <button
            className=" px-4 py-2 text-primary rounded hover:bg-black hover:text-maintext border border-gray-400  flex justify-center items-center space-x-2 w-full sm:w-auto"
            disabled
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous</span>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <button className="px-3 py-1 bg-gray-300 text-primary rounded-full">
              1
            </button>
            <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
              2
            </button>
            <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
              3
            </button>
            <span>...</span>
            <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
              8
            </button>
            <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
              9
            </button>
            <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
              10
            </button>
          </div>

          <button className="px-4 py-2  text-primary rounded hover:bg-black hover:text-maintext border border-gray-400 flex justify-center items-center space-x-2 w-full sm:w-auto">
            <span>Next</span>
            <ArrowRight className="h-4 w-4 mt-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopSellingSection;




