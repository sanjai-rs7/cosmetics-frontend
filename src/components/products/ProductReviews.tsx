import React, { useState } from "react";
import ReactStars from "react-stars";
import toast from "react-hot-toast";
import { Review } from "../../types";

interface ProductReviewsProps {
  productId: string;
}

interface NewReview {
  rating: number;
  comment: string;
  name: string;
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ productId }) => {
  const [reviews, setReviews] = useState<Review[]>(() => {
    const savedReviews = localStorage.getItem(`reviews-${productId}`);
    return savedReviews ? JSON.parse(savedReviews) : [];
  });

  const [newReview, setNewReview] = useState<NewReview>({
    rating: 0,
    comment: "",
    name: "",
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !newReview.rating ||
      !newReview.comment.trim() ||
      !newReview.name.trim()
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    const review: Review = {
      ...newReview,
      id: Date.now(),
      date: new Date().toLocaleDateString(),
    };

    const updatedReviews = [...reviews, review];
    setReviews(updatedReviews);
    localStorage.setItem(
      `reviews-${productId}`,
      JSON.stringify(updatedReviews)
    );

    setNewReview({ rating: 0, comment: "", name: "" });
    toast.success("Review submitted successfully");
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
        <form onSubmit={handleSubmitReview} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={newReview.name}
              onChange={(e) =>
                setNewReview({ ...newReview, name: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Rating</label>
            <ReactStars
              count={5}
              value={newReview.rating}
              onChange={(rating: number) =>
                setNewReview({ ...newReview, rating })
              }
              size={24}
              color2={"#ffd700"}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Your Review
            </label>
            <textarea
              className="w-full p-2 border rounded-md"
              rows={4}
              value={newReview.comment}
              onChange={(e) =>
                setNewReview({ ...newReview, comment: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700 transition-colors"
          >
            Submit Review
          </button>
        </form>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Customer Reviews</h3>
        {reviews.length === 0 ? (
          <p className="text-gray-500">
            No reviews yet. Be the first to review!
          </p>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{review.name}</span>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <ReactStars
                count={5}
                value={review.rating}
                edit={false}
                size={20}
                color2={"#ffd700"}
              />
              <p className="mt-2 text-gray-700">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductReviews;
