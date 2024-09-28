import Link from "next/link";

export default function Home() {
  return (
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
      <div className="flex justify-center space-x-8 mt-8">
        {/* 첫 번째 영화 카드 */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-48">
          <Link 
            href={{
              pathname: '/about',
              query: { id: '1', title: '국외자들'}
            }}
          >
            <img
              src="https://image.cine21.com/resize/cine21/poster/2024/0913/16_29_35__66e3e9dfbcf5d[X230,329].jpg" /* 실제 이미지 경로로 변경 */
              alt="국외자들"
              className="rounded-md mb-4"
            />
          </Link>
          <div className="text-red-600 font-bold text-lg flex justify-center items-center space-x-1">
            <span>★</span>
            <span>8.0</span>
          </div>
          <p className="text-gray-700 mt-2">국외자들</p>
        </div>

        {/* 두 번째 영화 카드 */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-48">
          <img
            src="/새벽의-모든-포스터.jpg" /* 실제 이미지 경로로 변경 */
            alt="새벽의 모든"
            className="rounded-md mb-4"
          />
          <div className="text-red-600 font-bold text-lg flex justify-center items-center space-x-1">
            <span>★</span>
            <span>7.9</span>
          </div>
          <p className="text-gray-700 mt-2">새벽의 모든</p>
        </div>
      </div>
    </div>
  );
}
