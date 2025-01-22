"use client";
import { useState } from "react";
import {
 
  MoreVertical,
} from "lucide-react";
import { FaStar, FaCheck } from "react-icons/fa";
import Image from "next/image";

interface ReviewCardProps {
  name: string;
  review: string;
  month: string | number;
}

// Reviews data
const reviews = [
  {
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    month: "Posted on August 14, 2023",
  },
  {
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    month: "Posted on August 14, 2023",
  },
  {
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    month: "Posted on August 14, 2023",
  },
  {
    name: "Mia W.",
    review:
      "I appreciate the attention to detail in the designs. Shop.co has truly become my go-to for stylish and comfortable clothing.",
    month: "Posted on August 14, 2023",
  },
  {
    name: "John D.",
    review:
      "I love the quality of the fabrics and the unique designs. Shop.co never disappoints!",
    month: "Posted on August 14, 2023",
  },
  {
    name: "Emma T.",
    review:
      "The customer service is excellent, and the delivery is always on time. Highly recommend Shop.co!",
    month: "Posted on August 14, 2023",
  },
];

// Review card component
const ReviewCard = ({ name, review, month }: ReviewCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col relative">
    <div className="absolute top-2 right-2">
      <MoreVertical className="text-gray-500 cursor-pointer" />
    </div>
    <div className="flex items-center mb-4">
      {[1, 2, 3, 4, 5].map((_, index) => (
        <FaStar key={index} className="text-star text-xl mr-1" />
      ))}
    </div>
    <div className="flex items-center mb-4">
      <p className="text-1xl font-bold text-primary">{name}</p>
      <FaCheck className="bg-[#01AB31] text-maintext rounded-full ml-2" />
    </div>
    <p className="text-customblack text-left">{review}</p>
    <p className="text-customblack mt-3">{month}</p>
  </div>
);

// Main customer review section component
const CustomerReviewSectionTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
//     );
//   };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-12 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-6xl px-4 ">
        {/* Top Headings */}
        <div className="flex justify-between items-center mb-4 flex-wrap">
          <h1 className="text-[12px] lg:text-sm font-bold text-gray-400">
            Product Details
          </h1>
          <h1 className="text-[12px] lg:text-sm font-bold text-primary">
            Rating & Reviews
          </h1>
          <h1 className="text-[12px] lg:text-sm font-bold text-gray-400">
            FAQs
          </h1>
        </div>
        <hr className="border-gray-300 mb-6" />

        {/* Reviews Section */}
        <div className="flex justify-between items-center mb-4 flex-wrap">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <h3 className="text-[10px] sm:text-2xl font-semibold text-primary">
              All Reviews
            </h3>
            <span className="text-gray-600 text-[10px] sm:text-2xl">(451)</span>
          </div>
          <div className="flex items-center space-x-2 flex-wrap gap-2">
            <Image
              src={"/filter.png"}
              alt=""
              width={10}
              height={10}
              className="w-3 lg:size-4"
            />
            <h4 className="text-[10px] lg:text-lg font-medium bg-gray-200 rounded-full px-3 py-2 text-center">
              Latest <span className="mx-2">{">"}</span>
            </h4>
            <button className=" text-[10px] sm:text-lg text-maintext bg-primary rounded-full px-4 py-2">
              Write Your Review
            </button>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  border">
          {reviews
            .slice(currentIndex, currentIndex + 6)
            .map((review, index) => (
              <ReviewCard
                key={index}
                name={review.name}
                review={review.review}
                month={review.month!}
              />
            ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-6 space-x-4">
          {/* </button> */}
          <button
            onClick={handleNext}
            aria-label="Next"
            className="p-2 rounded-full px-6 hover:bg-gray-300 transition text-primary border"
          >
            Load More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewSectionTwo;




