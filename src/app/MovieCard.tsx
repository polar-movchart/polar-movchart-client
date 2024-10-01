import Link from "next/link";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // 별 아이콘 사용
import StarRating from "./components/StarRating";

interface MovieCardProps {
  id: string;
  title: string;
  poster: string;
  main_cast: string[];
  directors: string[];
  rating: number;
  ranking: number;
  genres: string;
  runtime: number;
  age_rating: number;
  country: string;
  release_date: string;
  production_year: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  poster,
  rating,
  ranking,
  genres,
  runtime,
  age_rating,
  country,
  release_date,
  production_year,
  main_cast,
  directors
}) => {

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-md relative">
      {/* 별점과 평점 */}
      <div className="flex mb-2 w-full">
        <span className="mr-2 text-gray-600">평점: {rating}</span>
        <StarRating rating={rating} />  {/* StarRating 컴포넌트 사용 */}
      </div>
      {/*제목, 랭킹*/}
      <div className="flex mb-2 w-full">
        <h3 className="text-gray-500 font-bold text-lg flex flex-grow">
          {ranking}. {title}
        </h3>
      </div>

      {/* <div className="bg-orange-500 flex flex-row"> */}
      <div className="bg-red-500 flex">
        {/* 이미지 */}
        <Link
          href={{
            pathname: '/movie',
            query: { id, title }
          }}
        >
          <img
            src={poster}
            alt={title}
            className="rounded-md"
          />
        </Link>
      </div>

      {/* 텍스트 정보 */}
      {/* 추가 정보 */}
      <div className="bg-lime-300 text-sm text-gray-700 text-left p-2 flex-grow w-full">
        <p><strong>장르:</strong> {genres}</p>
        <p><strong>상영시간:</strong> {runtime}</p>
        <p><strong>등급분류:</strong> {age_rating}</p>
        <p><strong>국가:</strong> {country}</p>
        <p><strong>개봉일:</strong> {release_date}</p>
        <p><strong>제작연도:</strong> {production_year}</p>
        <p><strong>주연: </strong> {main_cast.join(", ")} </p>
        <p><strong>감독: </strong> {directors.join(", ")} </p>
      </div>


      {/* </div> */}

    </div >
  );
};

export default MovieCard;
