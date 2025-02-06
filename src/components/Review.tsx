"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FaStar, FaCheck } from "react-icons/fa";

interface ReviewCardProps {
  name: string;
  review: string;
}

const ReviewCard = ({ name, review }: ReviewCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col border">
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

const CustomerReviewSection = () => {
  const [reviews, setReviews] = useState<ReviewCardProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newReview, setNewReview] = useState({ name: "", review: "" });

  // Load reviews from localStorage on component mount
  useEffect(() => {
    const savedReviews = localStorage.getItem("customerReviews");
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  // Save reviews to localStorage whenever they are updated
  useEffect(() => {
    localStorage.setItem("customerReviews", JSON.stringify(reviews));
  }, [reviews]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(reviews.length - 3, 0) : prevIndex - 3
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= reviews.length ? 0 : prevIndex + 3
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name.trim() && newReview.review.trim()) {
      setReviews((prev) => [...prev, newReview]);
      setNewReview({ name: "", review: "" });
    }
  };

  return (
    <section className="py-12 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-6xl px-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-left text-3xl font-bold text-primary">
            OUR HAPPY CUSTOMERS
          </h3>
          <div className="flex items-center space-x-4">
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
            >
              <ArrowLeft className="text-gray-600 text-lg" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next"
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
            >
              <ArrowRight className="text-gray-600 text-lg" />
            </button>
          </div>
        </div>

        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.slice(currentIndex, currentIndex + 3).map((review, index) => (
              <ReviewCard
                key={index}
                name={review.name}
                review={review.review}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-6">No reviews yet. Be the first to leave a review!</p>
        )}

        <form onSubmit={handleSubmit} className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-2xl font-bold mb-4 text-primary">Add Your Review</h4>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={newReview.name}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 border rounded-md"
            required
          />
          <textarea
            name="review"
            placeholder="Your Review"
            value={newReview.review}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 border rounded-md"
            required
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



