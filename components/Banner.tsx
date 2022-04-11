import { InformationCircleIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'
import { FaPlay } from 'react-icons/fa'
import { modalState, movieState } from '../atoms/modalAtom.'
import { useRecoilState } from 'recoil'

interface Props {
  netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState({} as Movie)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [showModal, setShowModal] = useRecoilState(modalState)

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length - 1)]
    )
  }, [netflixOriginals])

  return (
    <div className="flex flex-col space-y-4 py-16 lg:h-[65vh] lg:justify-end lg:pb-12">
      <img
        src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        className="absolute top-0 left-0 -z-10 h-screen w-screen object-cover"
      />

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-sm text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>
      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-5 w-5 text-black md:h-7 md:w-7" />
          Play
        </button>

        <button
          className="bannerButton bg-[gray]/70"
          onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}
        >
          <InformationCircleIcon className="h-6 w-6 md:h-8 md:w-8" /> More Info
        </button>
      </div>
    </div>
  )
}

export default Banner
