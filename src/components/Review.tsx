// "use client";
// import { useState } from "react";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import { FaStar, FaCheck } from "react-icons/fa";

// interface ReviewCardProps {
//   name: string;
//   review: string;
// }
// // Reviews data
// const reviews = [
//   {
//     name: "Sarah M.",
//     review:
//       "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
//   },
//   {
//     name: "Alex K.",
//     review:
//       "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
//   },
//   {
//     name: "James L.",
//     review:
//       "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
//   },
//   {
//     name: "Mia W.",
//     review:
//       "I appreciate the attention to detail in the designs. Shop.co has truly become my go-to for stylish and comfortable clothing.",
//   },
//   {
//     name: "John D.",
//     review:
//       "I love the quality of the fabrics and the unique designs. Shop.co never disappoints!",
//   },
//   {
//     name: "John D.",
//     review:
//       "I love the quality of the fabrics and the unique designs. Shop.co never disappoints!",
//   },
//   {
//     name: "John D.",
//     review:
//       "I love the quality of the fabrics and the unique designs. Shop.co never disappoints!",
//   },
// ];

// // Review card component
// const ReviewCard = ({ name, review }: ReviewCardProps) => (
//   <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col border ">
//     <div className="flex items-center mb-4">
//       {[1, 2, 3, 4, 5].map((_, index) => (
//         <FaStar key={index} className="text-star text-xl mr-1" />
//       ))}
//     </div>
//     <div className="flex items-center mb-4">
//       <p className="text-1xl font-bold text-primary">{name}</p>
//       <FaCheck className="bg-[#01AB31] text-maintext rounded-full ml-2" />
//     </div>
//     <p className="text-customblack text-left">{review}</p>
//   </div>
// );

// // Main customer review section component
// const CustomerReviewSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <section className="py-12  flex justify-center items-center min-h-screen">
//       <div className="w-full max-w-6xl px-4">
//         <div className="flex justify-between items-center mb-6 flex-row md:flex-row">
//           <h3 className="text-left text-3xl font-bold text-primary">
//             OUR HAPPY CUSTOMERS
//           </h3>
//           <div className="flex items-center space-x-4">
//             {/* Previous Button */}
//             <button
//               onClick={handlePrev}
//               aria-label="Previous"
//               className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
//             >
//               <ArrowLeft className="text-gray-600 text-lg" />
//             </button>
//             {/* Next Button */}
//             <button
//               onClick={handleNext}
//               aria-label="Next"
//               className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
//             >
//               <ArrowRight className="text-gray-600 text-lg" />
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {reviews
//             .slice(currentIndex, currentIndex + 3)
//             .map((review, index) => (
//               <ReviewCard
//                 key={index}
//                 name={review.name}
//                 review={review.review}
//               />
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CustomerReviewSection;


"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FaStar, FaCheck } from "react-icons/fa";

interface ReviewCardProps {
  name: string;
  review: string;
}

const initialReviews = [
  {
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Mia W.",
    review:
      "I appreciate the attention to detail in the designs. Shop.co has truly become my go-to for stylish and comfortable clothing.",
  },
  {
    name: "John D.",
    review:
      "I love the quality of the fabrics and the unique designs. Shop.co never disappoints!",
  },
];

// Review card component
const ReviewCard = ({ name, review }: ReviewCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col border ">
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
  </div>
);

// Main customer review section component
const CustomerReviewSection = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newReview, setNewReview] = useState({ name: "", review: "" });

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name && newReview.review) {
      setReviews((prev) => [...prev, newReview]);
      setNewReview({ name: "", review: "" });
    }
  };

  return (
    <section className="py-12 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-6xl px-4">
        <div className="flex justify-between items-center mb-6 flex-row md:flex-row">
          <h3 className="text-left text-3xl font-bold text-primary">
            OUR HAPPY CUSTOMERS
          </h3>
          <div className="flex items-center space-x-4">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
            >
              <ArrowLeft className="text-gray-600 text-lg" />
            </button>
            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next"
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
            >
              <ArrowRight className="text-gray-600 text-lg" />
            </button>
          </div>
        </div>

        {/* Reviews Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews
            .slice(currentIndex, currentIndex + 3)
            .map((review, index) => (
              <ReviewCard
                key={index}
                name={review.name}
                review={review.review}
              />
            ))}
        </div>

        {/* Add Review Form */}
        <form onSubmit={handleSubmit} className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-2xl font-bold mb-4 text-primary">Add Your Review</h4>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={newReview.name}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 border rounded-md"
          />
          <textarea
            name="review"
            placeholder="Your Review"
            value={newReview.review}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 border rounded-md"
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
};

export default CustomerReviewSection;
