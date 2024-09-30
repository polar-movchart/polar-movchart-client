import Link from "next/link";

interface MovieCardProps {
  id: string;
  title: string;
  poster: string;
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
  production_year
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-md relative">
      {/*제목, 평점*/}
      <div className="flex items-center mb-2 w-full">
        <div className="text-red-600 font-bold text-lg flex space-x-1 mr-2">
          <span>&#9733;</span> {/* 별 모양 아이콘 */}
          <span>{rating}</span>
          <h3 className="text-gray-500 font-bold flex-grow">
            {ranking}. {title}
          </h3>
        </div>
      </div>

      <div className="flex flex-row">
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
            className="rounded-md mb-4 w-2/3"
          />
        </Link>

        {/* 텍스트 정보 */}
        {/* 추가 정보 */}
        <div className="text-sm text-gray-700 text-left">
          <p><strong>장르:</strong> {genres}</p>
          <p><strong>상영시간:</strong> {runtime}</p>
          <p><strong>등급분류:</strong> {age_rating}</p>
          <p><strong>국가:</strong> {country}</p>
          <p><strong>개봉일:</strong> {release_date}</p>
          <p><strong>제작연도:</strong> {production_year}</p>
        </div>
      </div>

    </div>
  );
};

export default MovieCard;
