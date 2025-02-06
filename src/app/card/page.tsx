"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ChevronRight, Router } from "lucide-react";
import { GoArrowRight } from "react-icons/go";
import { Product } from "../brands/page";
import CartContext from "../context/CartCreation";
import { useRouter } from "next/router";


const Card = () => {
  const { products, removeProduct } = useContext(CartContext)!;
  const [refresh, setRefresh] = useState<boolean>(false);
  const [cart, setCart] = useState<Product[]>([]);


  


  useEffect(() => {
    setCart(products);
  }, [refresh])

  const handleIncrease = (id: string) => {
    const index = products.findIndex(product => product._id == id);
    index != -1 && (products[index].quantity = products[index].quantity + 1);
    setRefresh(val => !val);
  };

  const handleDecrease = (id: string) => {
    const index = products.findIndex(product => product._id == id);
    if (index != -1) {
      products[index].quantity > 1 && (products[index].quantity = products[index].quantity - 1);
      setRefresh(val => !val);
    }
  };

  const handleDelete = (id: string) => {
    removeProduct(id);
    setRefresh(val => !val);
  };

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="flex gap-2">
          <Link href="/" className="text-gray-400 hover:underline">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 mt-1 text-gray-400" />
          <Link href="/card" className="text-black hover:underline">
            Card
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-6 mt-3 text-primary">Your Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1 flex flex-col gap-4">
            {cart.length === 0 ? (
              <p className="text-lg text-gray-700">No items in your cart yet.</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item._id}
                  className="relative flex items-center justify-between bg-white shadow-md p-4 rounded-lg"
                >
                  {/* Delete Icon */}
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="absolute top-2 right-2 text-[#FF3333]"
                  >
                    <RiDeleteBin6Line />
                  </button>

                  {/* Product Image */}
                  <Image
                    src={item.imageUrl || "/placeholder.png"}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-20 h-20 rounded-lg"
                  />

                  {/* Product Info */}
                  <div className="flex-1 px-4 text-sm">
                    <h3 className="font-bold">{item.name}</h3>
                    <p>
                      <span className="font-medium">Price:</span> ${item.price}
                    </p>
                    <p>
                      <span className="font-medium">Category:</span>{" "}
                      {item.category}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDecrease(item._id)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleIncrease(item._id)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <SideCard cartItems={products} />
        </div>
      </div>
    </section>
  );
};

export default Card;




const SideCard = ({ cartItems }: { cartItems: Product[]; }) => {
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + parseFloat(item.price as unknown as string) * (item.quantity || 1),
    0
  );
  return (

    <div className="w-full lg:w-1/3 bg-gray-100 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

      {/* Subtotal */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-[15px] sm:text-lg text-gray-400">Subtotal</h3>
        <p className="text-lg font-bold">$565</p>
      </div>
      {/* Discount */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-[15px] sm:text-lg text-gray-400">
          Discount(-20%)
        </h3>
        <div className="flex justify-between w-2/3">
          <p className="text-lg text-center ml-6 sm:ml-12 ">$120</p>
          <p className="text-lg text-[#FF3333] font-bold">-$445</p>
        </div>
      </div>

      {/* Delivery Fee */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[15px] sm:text-lg text-gray-400">
          Delivery Fee
        </h3>
        <p className="text-lg font-bold">$20</p>
      </div>

      <div className="flex justify-between items-center mb-4 ">
        {/* Total Items */}
        <p>
          Total{" "}
          {cartItems.reduce((total, item) => total + item.quantity!, 0)}
        </p>
        <p className="text-lg font-bold">$20</p>
      </div>

      {/* Promo Code Input */}

      <div className="flex items-center mb-4 gap-3">
        <div className="relative flex items-center w-full sm:w-auto">
          <Image
            src={"/inputicon.png"}
            alt="icon"
            width={15}
            height={15}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
          />
          <input
            type="text"
            placeholder="Add promo code"
            className="pl-8 border border-gray-300 rounded-full p-2 w-full sm:w-auto"
          />
        </div>

        <button className="px-3 py-2 sm:px-5 sm:py-2 bg-primary text-white rounded-full hover:bg-opacity-90">
          Apply
        </button>
      </div>

      {/* Total Price */}
      <p className="text-lg mb-4 font-bold flex justify-between items-center">
        Total: <span>${totalPrice}</span>
      </p>

      <div className="relative items-center">
        {/* Checkout Button */}
        <Link href={"checkout"}><button  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 flex items-center justify-center gap-2">
          Go to Checkout
          <GoArrowRight className="text-white mt-1 font-semibold" />
        </button>
        </Link>
        




      </div>
    </div>

  )
}


