import { useState } from "react"
import StarInput from "./StarInput";

const StarRating = () => {
    const [rating, setRating] = useState(0);

    const handleClickRating = (value) => {
        setRating(value);
    }

    return (

        <section className="flex items-center gap-2">
            <span className="text-lg">별점</span>
            <fieldset className="relative flex items-center">
                {[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((value) => (
                    <StarInput
                        key={value}
                        onClickRating={handleClickRating}
                        value={value}
                        isHalf={value % 1 !== 0} // 0.5 => isHalf=true
                    />
                ))}
                {/* <StarInput onClickRating={handleClickRating} value={5} isHalf={false} />
                <StarInput onClickRating={handleClickRating} value={4.5} isHalf={true} />
                <StarInput onClickRating={handleClickRating} value={4} isHalf={false} />
                <StarInput onClickRating={handleClickRating} value={3.5} isHalf={true} />
                <StarInput onClickRating={handleClickRating} value={3} isHalf={false} />
                <StarInput onClickRating={handleClickRating} value={2.5} isHalf={true} />
                <StarInput onClickRating={handleClickRating} value={2} isHalf={false} />
                <StarInput onClickRating={handleClickRating} value={1.5} isHalf={true} />
                <StarInput onClickRating={handleClickRating} value={1} isHalf={false} />
                <StarInput onClickRating={handleClickRating} value={0.5} isHalf={true} /> */}
            </fieldset>
            <span className="text-base">{rating}</span>
        </section>


        // <div>
        //     <HandleRatingStars rating={rating} setRating={setRating} />
        //     <p className="text-black-mt-2">현재 별점: {rating} 점</p>
        // </div>
    )
}

export default StarRating;