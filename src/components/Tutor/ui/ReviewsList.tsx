import { ReviewItem } from "./ReviewItem"

interface ReviewsListProps {
    reviews: any[]
    isLoading: boolean
}

export const ReviewsList = ({ reviews, isLoading }: ReviewsListProps) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Reviews ({reviews.length})
                </h2>
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition">
                    Add Review
                </button>
            </div>

            {isLoading ? (
                <p className="text-gray-500">Loading...</p>
            ) : reviews.length === 0 ? (
                <p className="text-gray-500">No reviews yet.</p>
            ) : (
                <div className="space-y-4">
                    {reviews.map((review: any) => (
                        <ReviewItem key={review.id} review={review} />
                    ))}
                </div>
            )}
        </div>
    )
}