import Layout from "./components/Layout";
import MovieCard from "./components/MovieCard";

export default function Home() {
  const movies = [
    {
      id: '1',
      code: 20239670,
      ISAN: "ABC",
      ranking: 1,
      title: '국외자들',
      main_cast: ['황정민', '신태경'],
      directors: ['류승완', '류승완2'],
      rating: 8.0,
      poster: 'https://image.cine21.com/resize/cine21/poster/2024/0913/16_29_35__66e3e9dfbcf5d[X230,329].jpg',
      genres: "Action, Drama",
      runtime: 143,
      age_rating: 12,
      country: '한국',
      release_date: '2024-09-13',
      production_year: '2024-09-13'
    },
    {
      id: '2',
      ranking: 2,
      title: '새벽의 모든',
      main_cast: ['황정민', '신태경'],
      directors: ['류승완', '류승완2'],
      rating: 7.9,
      poster: 'https://image.cine21.com/resize/cine21/poster/2024/0913/16_29_35__66e3e9dfbcf5d[X230,329].jpg',
      genres: "Thriller",
      runtime: 120,
      age_rating: 15,
      country: "한국",
      release_date: "2024-09-20",
      production_year: "2024"
    },
    {
      id: '2',
      ranking: 2,
      title: '새벽의 모든',
      main_cast: ['황정민', '신태경'],
      directors: ['류승완', '류승완2'],
      rating: 7.9,
      poster: 'https://image.cine21.com/resize/cine21/poster/2024/0913/16_29_35__66e3e9dfbcf5d[X230,329].jpg',
      genres: "Thriller",
      runtime: 120,
      age_rating: 15,
      country: "한국",
      release_date: "2024-09-20",
      production_year: "2024"
    },
    {
      id: '2',
      ranking: 2,
      title: '새벽의 모든',
      main_cast: ['황정민', '신태경'],
      directors: ['류승완', '류승완2'],
      rating: 7.9,
      poster: 'https://image.cine21.com/resize/cine21/poster/2024/0913/16_29_35__66e3e9dfbcf5d[X230,329].jpg',
      genres: "Thriller",
      runtime: 120,
      age_rating: 15,
      country: "한국",
      release_date: "2024-09-20",
      production_year: "2024"
    }
  ];

  return (
    <Layout>
      <div className="bg-orange-300 min-h-screen">
        {/* 탭 섹션 */}
        <div className="flex justify-center space-x-4 py-4">
          <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md">
            최근 영화 별점
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-md">
            전문가별 별점
          </button>
        </div>
        {/* 영화 카드 섹션 */}
        <div className="flex flex-col items-center space-y-8 mt-8">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              rating={movie.rating}
              poster={movie.poster}
              ranking={movie.ranking}
              genres={movie.genres || ""}
              runtime={movie.runtime || 0}
              age_rating={movie.age_rating || 0}
              country={movie.country || ""}
              release_date={movie.release_date || ""}
              production_year={movie.production_year || ""}
              main_cast={movie.main_cast}
              directors={movie.directors}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
