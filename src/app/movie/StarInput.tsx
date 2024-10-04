import { FaStar, FaStarHalf } from "react-icons/fa";

const StarInput = ({ onClickRating, value, isHalf }) => {
    const handleClickRatingInput = () => {
        onClickRating(value);
    };

    // 위치를 자동으로 조정하는 스타일
    const getStarPosition = (value) => {
        const starWidth = 24;
        return {
            transform: isHalf ? `translateX(-${starWidth / 2}px)` : undefined
        };
    };

    return (
        <>
            <input type="radio" name="rating" id={`star${value}`} value={value} className="hidden" />
            <label onClick={handleClickRatingInput} htmlFor={`star${value}`}
                className={`cursor-pointer flex items text-2xl center text-gray-400
                            ${isHalf ? 'overflow-hidden text-red-400' : ''}`}
            >
                
                {isHalf
                    ? <FaStarHalf className="absolute transform -translate-y-3 overflow-hidden"/>
                    : <FaStar/>}
                {/*
                {isHalf ? (
                    <>
                        // 빈 별이 별과 겹치도록 설정
                        <FaStarHalf className="absolute text-red-400 z-10 transform translate-y-3" />
                    </>
                ) : (
                    <FaStar className="z-0" />
                )}
                */}

            </label>
        </>
    );
}

export default StarInput;