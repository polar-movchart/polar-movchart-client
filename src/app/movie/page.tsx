'use client';

import { useSearchParams } from "next/navigation";

export default function Movie() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const title = searchParams.get('title');

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 ">
          <h1 className="text-4xl font-bold mb-8">영화 정보</h1>
          {id && title ? (
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-semibold mb-4">영화 제목: {title}</h2>
              <p className="text-lg text-gray-700">영화 ID: {id}</p>
            </div>
          ) : (
            <p>영화 정보를 불러오는 중입니다...</p>
          )}
        </div>
      );
}
