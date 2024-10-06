import { useState } from "react";

const ReviewForm = ({ addReview }) => {
    const [content, setContent] = useState('');
    const [rating, setRating] = useState(0);
    const [userId, setUserId] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.trim()) {
            addReview({ content, userId, date: new Date() });
        }
    }

    return (
        <form onSubmit={handleSubmit} className="my-4 p-4 border rounded">
            <div className="mb-2">
                <label className="block text-sm font-medium">평점</label>
            </div>
            <div className="mb-2">
                <textarea
                    value={content}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="border p-2 w-full"
                    placeholder="감상평을 작성해주세요"
                />
            </div>
            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
                등록
            </button>
        </form>
    );
};

export default ReviewForm;