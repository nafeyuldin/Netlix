import { InformationCircleIcon } from '@heroicons/react/outline'
import Image from 'next/image'
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
    <div className="flex h-[80vh] flex-col justify-end space-y-4">
      <img
        src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        className="absolute top-0 left-0 -z-10 h-screen w-screen object-cover"
      />
      <h1 className="text-5xl font-bold">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-2xl text-xl">{movie?.overview}</p>
      <div className="flex space-x-3">
        <button className="flex items-center gap-x-2 rounded bg-white px-8 py-2.5 text-lg font-semibold text-black transition hover:opacity-75">
          <FaPlay className="h-6 w-6 text-black" />
          Play
        </button>
        <button
          className="flex items-center gap-x-2 rounded bg-[gray]/70 px-8 py-2.5 text-lg font-semibold transition hover:opacity-75"
          onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}
        >
          <InformationCircleIcon className="h-7 w-7" /> More Info
        </button>
      </div>

      {/* <div className="h-28 bg-gradient-to-b from-transparent to-[#252525]" /> */}
    </div>
  )
}

export default Banner
