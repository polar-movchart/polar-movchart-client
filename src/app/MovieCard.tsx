import Link from "next/link";

interface MovieCardProps {
  id: string;
  title: string;
  poster: string;
  rating: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ id, title, poster, rating }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-48 relative">
      {/*제목*/}
      <h3 className="text-gray-500 flex justify-center items-center mb-2 font-bold">
        {title}
      </h3>
      <Link
        href={{
          pathname: '/movie',
          query: { id, title }
        }}
      >
        <img
          src={poster}
          alt={title}
          className="rounded-md mb-4"
        />
      </Link>
      <div className="text-red-600 font-bold text-lg flex justify-center items-center space-x-1">
        <span>★</span>
        <span>{rating}</span>
      </div>
    </div>
  );
};

export default MovieCard;
