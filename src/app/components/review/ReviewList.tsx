const ReviewList = ({ reviews }) => {
    return (
        <div className="mt-4">
            {reviews && Array.isArray(reviews) && reviews.length > 0 ? (
                reviews.map((review, index) => (
                    <div key={index} className="text-gray-500 ml-5">
                        <p>{review.user}</p>
                        <p>{review.content}</p>
                        <p>{review.rating} 점</p>
                    </div>
                ))
            ) : (
                <p>감상평이 없습니다.</p>
            )};
        </div>

        //     {reviews.map((review, index) => (
        //         <div key={index} className="border p-4 mb-2 rounded-none">
        //             <div className="flex justify-between items-center mb-2">
        //                 <span className="font-semibold">{review.user}</span>
        //                 <span>{review.date.toLocalString()}</span>
        //             </div>
        //             <div className="flex items-center mb-2">
        //                 <span className="text-yellow-500 mr-2">* {review.rating}</span>
        //                 <span>{review.content}</span>
        //             </div>
        //         </div>
        //     ))}
        // </div>
    );
};

export default ReviewList;