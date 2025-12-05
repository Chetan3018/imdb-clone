export default function MovieCard({ poster, title, year, rating }) {
  return (
    <div className="max-w-xs bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img src={poster} alt={title} className="w-full h-64 object-cover" />

      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600 text-sm">Released: {year}</p>

        <div className="mt-2 inline-block bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
          ⭐ {rating}
        </div>
      </div>
    </div>
  );
}
