//  "use client";

// import Link from "next/link";
// import { ShoppingCart,  Menu, X, ChevronDown, Search } from "lucide-react";
// import { useState } from "react";

// import { FaRegUserCircle } from "react-icons/fa";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//   return (
//     <div className="w-full bg-maintext shadow-md">
//       <header className="flex justify-between items-center w-full px-6 md:px-12 lg:px-16 h-20 ">
//         {/* Logo */}
//         <div className="text-4xl font-bold text-primary">
//           <Link href="/">SHOP.CO</Link>
//         </div>

//         {/* Navigation - Desktop */}
//         <nav className="hidden md:flex gap-8 items-center">
//           <div className="relative">
//             <button
//               className="flex items-center gap-1 text-primary font-medium hover:text-black"
//               onClick={toggleDropdown}
//             >
//               Shop <ChevronDown size={16} />
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute top-full left-0 w-48 bg-white border border-gray-300 shadow-md mt-2 rounded-md z-50">
//                 <ul className="flex flex-col gap-2 p-4">
//                   <li>
//                     <Link href="/shop/men">Men</Link>
//                   </li>
//                   <li>
//                     <Link href="/shop/women">Women</Link>
//                   </li>
//                   <li>
//                     <Link href="/shop/kids">Kids</Link>
//                   </li>
//                   <li>
//                     <Link href="/shop/accessories">Accessories</Link>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//           <Link
//             href="/sale"
//             className="text-gray-700 font-medium hover:text-black"
//           >
//             On Sale
//           </Link>
//           <Link
//             href="/arrivals"
//             className="text-gray-700 font-medium hover:text-black"
//           >
//             New Arrivals
//           </Link>
//           <Link
//             href="/brands"
//             className="text-gray-700 font-medium hover:text-black"
//           >
//             Brands
//           </Link>
//         </nav>

//         {/* Search and Icons */}
//         <div className="flex items-center gap-4">
//           {/* Search Bar with Icon */}
//           <div className="relative hidden md:block ">
//             <input
//               type="text"
//               placeholder="Search for products..."
//               className="border px-4 py-2 rounded-full text-sm lg:w-[577px] pl-10 bg-customGray"
//             />
//             {/* Search Icon */}
//             <Search className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500 size-4" />
//           </div>

//           {/* Icons (Hidden on Small Screens) */}
//           <div className="hidden md:flex gap-3">
//             <ShoppingCart className="text-gray-700" />
             
//             <FaRegUserCircle className="text-gray-700 size-6"/>
           
//           </div>
//         </div>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden" onClick={toggleMenu}>
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </div>
//       </header>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white py-4 shadow-md z-50">
//           <ul className="flex flex-col items-center gap-6 px-6 z-50">
//             <li>
//               <Link
//                 href="/sale"
//                 className="text-gray-700 font-medium hover:text-black"
//               >
//                 On Sale
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/arrivals"
//                 className="text-gray-700 font-medium hover:text-black"
//               >
//                 New Arrivals
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/brands"
//                 className="text-gray-700 font-medium hover:text-black"
//               >
//                 Brands
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;









// "use client"

// import Link from "next/link";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { MdOutlineAccountCircle } from "react-icons/md";
// import { IoCartOutline } from "react-icons/io5";
// import { IoIosSearch } from "react-icons/io";
// import { SheetSide } from "./Humburgur";
//  import { useSelector } from "react-redux";

  
// export default function Header() {
//   //  const cart =  useSelector((state:any)=>state.cart)
    
     
//   return (
//      <header className="w-full fixed bg-white z-10 top-0  h-[60px] md:h-[90px] flex justify-between  pr-2 items-center max-w-screen-2xl mx-auto">
//            <div className="flex justify-center items-center ">
          
//             {/* logo */}
//             <h1 className="text-2xl md:text-4xl font-extrabold pl-2">Online store</h1>
           
//            </div>
//             {/* navigation bar */}
//             <ul className="hidden lg:block ">
//                 <li className="flex space-x-4 ml-4 mt-2 items-center ">
//                     <Link href={`/`}>Home</Link>
//                     <Link href={"/products"}>Products</Link>
//                     <Link href={"/brands"}>Brands</Link>
//                 </li>
//             </ul>
//             {/* right */}
//             <div className="ml-14 flex justify-center items-center">
//                 <div className="flex justify-start items-center lg:bg-[#F0F0F0] lg:w-[500px] h-[40px] pl-2 ml-12 md:ml-0 hover:border-none rounded-full "> <IoIosSearch className="text-xl hidden lg:block" /> <input   placeholder={`Search for products...`}  className="bg-[#F0F0F0] outline-none  w-full h-full rounded-full ml-2 hidden lg:block"/></div>
//             </div>
//             <div className="flex space-x-2 sm:space-x-4 ">
//             {/* <IoIosSearch className="text-xl  lg:hidden" /> */}
//             <Link href={"/cart"} className="relative hidden lg:block"><IoCartOutline className="text-4xl  "/>
//              {/* {cart.length > 0 && (
//                 <span className="absolute top-[-5px] bg-red-400  rounded-full text-white w-[20px] h-[20px] flex justify-center items-center p-1 text-sm right-0">{cart.length}</span>
//              )
//              } */}
//             </Link>
            
//                <MdOutlineAccountCircle className="text-4xl hidden lg:block"/>
//             </div>
//             <div className="flex items-center justify-center space-x-5 lg:hidden">
//             <Link href={"/cart"} className="relative"><IoCartOutline className="text-4xl  "/>
//             {/* {cart.length > 0 && (
//                 <span className="absolute top-[-5px] bg-red-400  rounded-full text-white w-[20px] h-[20px] flex justify-center items-center p-1 text-sm right-0">{cart.length}</span>
//              )
//              } */}
//             </Link>   
//             <SheetSide/>
//             </div>
            
//          {/* </div> */}
//      </header>
//   );
// }




"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { useState } from "react";

import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
            href="/sale"
            className="text-gray-700 font-medium hover:text-black"
          >
            On Sale
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
            Brands
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
          {/* Search Bar with Icon */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search for products..."
              className="border px-4 py-2 rounded-full text-sm lg:w-[577px] pl-10 bg-customGray"
            />
            {/* Search Icon */}
            <Search className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500 size-4" />
          </div>

          {/* Icons (Hidden on Small Screens) */}
          <div className="hidden md:flex gap-3">
            <ShoppingCart className="text-gray-700" />
            <FaRegUserCircle className="text-gray-700 size-6" />
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
                href="/sale"
                className="text-gray-700 font-medium hover:text-black"
              >
                On Sale
              </Link>
            </li>
            <li>
              <Link
                href="/arrivals"
                className="text-gray-700 font-medium hover:text-black"
              >
                New Arrivals
              </Link>
            </li>
            <li>
              <Link
                href="/brands"
                className="text-gray-700 font-medium hover:text-black"
              >
                Brands
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

















