import Layout from "./components/Layout";
import MovieCard from "./MovieCard";

export default function Home() {
  const movies = [
    {
      id: '1',
      title: '국외자들',
      rating: 8.0,
      poster: 'https://image.cine21.com/resize/cine21/poster/2024/0913/16_29_35__66e3e9dfbcf5d[X230,329].jpg'
    },
    {
      id: '2',
      title: '새벽의 모든',
      rating: 7.9,
      poster: '/새벽의-모든-포스터.jpg'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 text-center">
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

            />))}
        </div>
      </div>
    </Layout>
  );
}
