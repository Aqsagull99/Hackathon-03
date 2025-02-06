"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { useEffect, useState } from "react";

import { FaRegUserCircle } from "react-icons/fa";
import { Product } from "@/app/brands/page";
import { products } from "@/ProductsData";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  const [cart, setCart] = useState<Product[]>([]);

const addToCart = (product: Product) => {
  setCart((prevCart) => [...prevCart, product]);
};


// Wishlist state
const [wishlist, setWishlist] = useState<Product[]>([]);
const [wishlistCount, setWishlistCount] = useState(0);

// Add to wishlist function
const addToWishlist = (product: Product) => {
  setWishlist((prevWishlist) => {
    const updatedWishlist = prevWishlist.some((item) => item._id === product._id)
      ? prevWishlist
      : [...prevWishlist, product];

    
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  // Update wishlist count
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedWishlist = localStorage.getItem("wishlist");
      setWishlistCount(storedWishlist ? JSON.parse(storedWishlist).length : 0);
    }
  }, [wishlist]);


  // searching item
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="w-full bg-maintext shadow-md">
      <header className="flex justify-between items-center w-full px-6 md:px-12 lg:px-16 h-20 ">
        {/* Logo */}
        <div className="text-4xl font-bold text-primary">
          <Link href="/">SHOP.CO</Link>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link
            href="/"
            className="text-gray-700 font-medium hover:text-black"
          >
            Home
          </Link>
          
          <Link
            href="/arrivals"
            className="text-gray-700 font-medium hover:text-black"
          >
            New Arrivals
          </Link>
          <Link
            href="/brands"
            className="text-gray-700 font-medium hover:text-black"
          >
            Wishlist ({wishlistCount})
          </Link>
          <Link
            href="/about"
            className="text-gray-700 font-medium hover:text-black"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 font-medium hover:text-black"
          >
            Contact
          </Link>
        </nav>


        {/* Search and Icons */}
        <div className="flex items-center gap-4">
        
          <div className="relative hidden md:block">
            
            {/* <input
          type="text"
          placeholder="Search for products..."
          className="border px-4 py-2 rounded-full text-sm lg:w-[577px] pl-10 bg-customGray"
          value={searchQuery}
           onChange={(e) => setSearchQuery(e.target.value)}
                 />
            
            <Search className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500 size-4" />
             */}
          </div>

          {/* Icons (Hidden on Small Screens) */}
          <div className=" md:flex gap-3">
           

            <div className="relative">
          <ShoppingCart className="h-6 w-6 text-black" />
           {cart.length > 0 && (
       <span className="absolute -top-2 -right-2 bg-red-500 text-yellow-500 text-xs px-2 py-1 rounded-full">
      {cart.length}
       </span>
      )}
     </div>

            <FaRegUserCircle className="text-gray-700 size-6 hidden md:flex" />
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-md z-50">
          <ul className="flex flex-col items-center gap-6 px-6 z-50">
            <li>
              <Link
                href="/"
                className="text-gray-700 font-medium hover:text-black"
              >
                Home
              </Link>
            </li>
           
            <li>
              <Link
                href="/arrivals"
                className="text-gray-700 font-medium hover:text-black"
              >
                 Arrivals
              </Link>
            </li>
            <li>
              <Link
                href="/brands"
                className="text-gray-700 font-medium hover:text-black"
              >
                 Wishlist ({wishlistCount})
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-700 font-medium hover:text-black"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-700 font-medium hover:text-black"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;


























