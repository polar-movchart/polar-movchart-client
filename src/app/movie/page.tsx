'use client';

import { useSearchParams } from "next/navigation";
import Layout from "../components/Layout";
import MovieCard from "../MovieCard";
import React from "react";
import LineChart from '../components/LineChart';

export default function Movie() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const title = searchParams.get('title');

  const movie =
  {
    id: 1,
    code: 20239670,
    ISAN: "ABC",
    ranking: 1,
    title: '국외자들',
    rating: 7.5,
    poster: 'https://image.cine21.com/resize/cine21/poster/2024/0913/16_29_35__66e3e9dfbcf5d[X230,329].jpg',
    genres: "Action, Drama",
    runtime: 143,
    age_rating: 12,
    country: '한국',
    release_date: '2024-09-13',
    production_year: '2024-09-13',
    main_cast: ['황정민', '신태경'],
    directors: ['류승완', '류승완2']
  }

  const chartData = [
    {
      id: "베테랑2",
      data: [
        { "x": "2024-09-15", "y": 2000 },
        { "x": "2024-09-16", "y": 3000 },
        { "x": "2024-09-17", "y": 4000 },
        { "x": "2024-09-18", "y": 5000 },
        { "x": "2024-09-19", "y": 6000 },
        { "x": "2024-09-25", "y": 1000 }
      ]
    }
  ];

  const cardWidth = '450px';
  const chartHeight = '200px';

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
        {/* 탭 섹션 */}
        <div className="flex justify-center space-x-4 py-4">
          <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md">
            최근 영화 별점
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-md">
            전문가별 별점
          </button>
        </div>
        <div className="bg-lime-50 flex justify-center">
          {/* 영화 카드 섹션 */}
          <div className="flex flex-col items-center">
            <MovieCard
              key={movie.id}
              id={id}
              title={title}
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

            {/* 라인차트 표시 */}
            <div className="w-full mt-4">
              <LineChart data={chartData} width={cardWidth} height={chartHeight}/> {/* 차트를 표시하는 부분 */}
            </div>

          </div>

        </div>



      </div>

    </Layout>
  );
}
