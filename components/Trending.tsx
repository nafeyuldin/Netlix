const BASE_URL = 'https://image.tmdb.org/t/p/original/'

function Trending({ trending }) {
  return (
    <div className="space-y-2 md:w-1/2">
      <h1 className="px-2 pt-2 text-lg font-bold">Trending now</h1>
      <div className="flex space-x-4 overflow-x-scroll p-2 scrollbar-hide">
        {trending.map((movie) => (
          <div key={movie.id} className="hoverAnimation space-y-2 text-center">
            <img
              src={`${BASE_URL}${movie.poster_path}`}
              alt=""
              className="h-60 min-w-[155px] object-cover opacity-70"
              loading="lazy"
            />
            <h2 className="text-[13px] font-semibold">{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trending
