const BASE_URL = 'https://image.tmdb.org/t/p/original/'

function NowPlaying({ nowPlaying }) {
  return (
    <div className="space-y-2">
      <h1 className="px-2 pt-2 text-xl font-bold">Now playing</h1>
      <div className="flex space-x-4 overflow-x-scroll p-2 scrollbar-hide">
        {nowPlaying.map((movie) => (
          <div key={movie.id} className="hoverAnimation relative">
            <img
              src={`${BASE_URL}${movie.backdrop_path}`}
              alt=""
              className="h-48 min-w-[340px] object-cover opacity-70"
              loading="lazy"
            />
            <div className="absolute bottom-0 w-full bg-black/70 py-4 px-2">
              <h2 className="text-[13px] font-semibold">{movie.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NowPlaying
