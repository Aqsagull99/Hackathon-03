"use client";

import CartContext from "@/app/context/CartCreation";
import CustomerReviewSectiontwo from "@/components/reviewtwo";
import TopSellingSectiontwo from "@/components/Topsellingtwo";

import {
  Products,
  // products 
} from "@/ProductsData";
import { client } from "@/sanity/lib/client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProductDetail = ({ params }: { params: { productId: string } }) => {
  const [data, setData] = useState<Products>();
  const [quantity, setQuantity] = useState(1);
  const {addProduct} = useContext(CartContext)!
  const router = useRouter();

  


  useEffect(() => {
    (async () => {
      let data = await client
        .fetch(
          `*[_type == "products"]{
          _id,
          name,
          price,
          description,
          "imageUrl": image.asset->url,
          category,
          discountPercent,
          isNew,
          colors,
          sizes,
          quantity,
        }`
        );
    setData(data.filter((value: any) => value._id == params.productId)[0]);
    })();
  }, [params.productId]);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

const addToCart = () => {
  addProduct(data)
  router.push("/card")
}


  
  return (
    <section className="w-full py-12 ">
      {!data && <h1 className="my-10 text-3xl text-center">Loading....</h1>}
      {data && (
        <div className="container mx-auto px-6">
          {/* Breadcrumbs */}
          <div className="flex items-center mb-4 text-sm text-gray-600 ">
            <Link href={"/"}>
              <span  className="  hover:underline">Home</span>
            </Link>
            <span className="mx-2">{">"}</span>
            <Link href={"/shop"}>
              <span className=" hover:underline">Shop</span>
            </Link>
            <span className="mx-2">{">"}</span>
            <Link href={"/shop/men"}>
              <span className=" hover:underline ">Men</span>
              <span className="mx-2">{">"}</span>
            </Link>

            <span className="text-black ml-1">Tshirt </span>

            {/* <span>{productId}</span> */}
          </div>

          {/* Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section: Images */}
            <div className="grid grid-cols-3 gap-2">
              {/* Smaller images */}
              <div className="col-span-1 flex flex-col gap-2">
                <Image
                  src={data.imageUrl}
                  alt="/details/d1.png"
                  width={200}
                  height={200}
                  className="w-28 h-auto rounded-lg"
                />
                <Image
                  src={data.imageUrl}
                  alt="/details/d2.png"
                  width={200}
                  height={200}
                  className="w-28 h-auto rounded-lg"
                />
                <Image
                  src={data.imageUrl}
                  alt="Thumbnail 3"
                  width={200}
                  height={200}
                  className="w-28 h-auto rounded-lg"
                />
              </div>
              {/* Larger image */}
              <div className="col-span-2">
                <Image
                  src={data.imageUrl}
                  alt="Main Product"
                  width={200}
                  height={200}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Right Section: Product Details */}
            <div>
              <h1 className="text-4xl font-bold mb-4">{data.name}</h1>
              <div className="text-lg text-gray-700 mb-2 flex items-center gap-2">
                {/* Dynamic Stars */}
                <span className="flex items-center text-yellow-500 font-bold ">
                  {/* {Array.from(
                    { length: Math.floor(data.rating) },
                    (_, index) => (
                      <span key={index}>★</span>
                    )
                  )} */}
                </span>
                <span>
                  {/* <p>{data.score}</p> */}
                </span>
                {/* Show fractional rating if present */}
                {/* {data.rating % 1 !== 0 && (
                  <span className="text-yellow-500">✰</span>
                )} */}
              </div>
              <div className="flex gap-2 items-center ">
                <p className=" text-2xl font-bold text-primary mb-2">
                  {data.price!}
                </p>
                <p className="text-gray-500 line-through mb-2 text-2xl">
                  {Number(data.price) * 2}
                </p>
                <p className="text-[12px] text-red-500  bg-red-100 px-2 py-1 rounded-full ">
                  {" "}
                  {50}%
                </p>
              </div>

              <p className="text-gray-700 mb-6">
                Description: {data.description}
              </p>

              {/* Select Color */}
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2">Select Color: {data.color}</h3>
                <div className="flex gap-2">



                 <button className="w-8 h-8 bg-select1 rounded-full"></button>
                  <button className="w-8 h-8 bg-select2 rounded-full"></button>
                  <button className="w-8 h-8 bg-select3 rounded-full"></button> 
                </div>
              </div>

              {/* Choose Size */}
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2">Choose Size: </h3>
                <div className="flex gap-2 text-[10px] sm:text-[20px] md:text-[20px] lg:text-[20px]  ">

              <button className="px-4 py-2 border rounded-full bg-gray-200 hover:bg-primary hover:text-maintext"></button>

                   <button className="px-4 py-2 border rounded-full bg-gray-200 hover:bg-primary hover:text-maintext">
                    Small
                  </button>
                  <button className="px-4 py-2 border rounded-full bg-gray-200 hover:bg-primary hover:text-maintext">
                    Medium
                  </button>
                  <button className="px-4 py-2 border rounded-full bg-gray-200 hover:bg-primary hover:text-maintext">
                    Large
                  </button>
                  <button className="px-4 py-2 border rounded-full bg-gray-200 hover:bg-primary hover:text-maintext">
                    Xlarge
                  </button> 
                </div>
              </div> 
 


             

              {/* Quantity Section */}
              <div className="mb-6">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleDecrease}
                    className="px-4 py-2 border rounded bg-gray-100"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={handleIncrease}
                    className="px-4 py-2 border rounded bg-gray-100"
                  >
                    +
                  </button>
                 <button onClick={addToCart} className="w-full bg-primary text-white py-3 px-4 sm:py-3 sm:px-16 rounded-full hover:bg-opacity-90">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <CustomerReviewSectiontwo />

          <TopSellingSectiontwo />
        </div>
      )}
    </section>
  );
};

export default ProductDetail;










