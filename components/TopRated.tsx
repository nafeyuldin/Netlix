import Thumbnail from './Thumbnail'

function TopRated({ topRated, genres }) {
  return (
    <div className="space-y-2">
      <h1 className="px-2 pt-2 text-xl font-bold">Top rated</h1>
      <div>
        <div className="flex space-x-4 overflow-x-scroll p-2 scrollbar-hide">
          {topRated.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} genres={genres} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopRated
