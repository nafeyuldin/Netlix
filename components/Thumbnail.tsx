import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'

const BASE_URL = 'https://image.tmdb.org/t/p/original/'

function Thumbnail({ movie, genres }) {
  console.log(movie)
  return (
    <div className="hoverAnimation relative">
      <img
        src={`${BASE_URL}${movie.poster_path}`}
        alt=""
        className="h-72 min-w-[220px] object-cover opacity-70"
      />
      <div className="absolute bottom-0 flex w-full items-center justify-between p-2">
        <div className="text-[11px]">
          <p>
            {genres
              .filter((genre) => movie.genre_ids.includes(genre.id))
              .map((filteredGenre) => (
                <span key={filteredGenre.id}>{filteredGenre.name}</span>
              ))}
          </p>
          <p>{movie.vote_count} votes</p>
        </div>
        <IoMdHeartEmpty className="h-5 w-5" />
        {/* <IoMdHeart className="h-5 w-5" /> */}
      </div>
    </div>
  )
}

export default Thumbnail
