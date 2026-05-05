import { ReviewStars } from "./ReviewStars"

export const ReviewItem = ({ review }: { review: any }) => {
    const user = review.student?.user
    const fullName = [user?.first_name, user?.last_name].filter(Boolean).join(" ") || "Anonymous"
    const avatar = user?.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=random`
    const date = review.created_at
        ? new Date(review.created_at).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
          })
        : ""

    return (
        <div className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
            <div className="flex items-start gap-4">
                <img
                    src={avatar}
                    alt={fullName}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                    <div className="flex justify-between mb-2">
                        <div>
                            <h4 className="font-semibold text-gray-900">{fullName}</h4>
                            <div className="flex items-center gap-2 mt-1">
                                <ReviewStars rating={review.rating} />
                                <span className="text-sm text-gray-500">{date}</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                </div>
            </div>
        </div>
    )
}