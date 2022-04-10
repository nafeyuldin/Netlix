import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom.'
import ReactPlayer from 'react-player/lazy'
import { FaPlay } from 'react-icons/fa'
import {
  PlusIcon,
  ThumbUpIcon,
  VolumeOffIcon,
  VolumeUpIcon,
  XIcon,
} from '@heroicons/react/outline'
import { Element, Genre } from '../typings'
import MuiModal from '@mui/material/Modal'
import Box from '@mui/material/Box'

function Modal() {
  const movie = useRecoilValue(movieState)
  const [trailer, setTrailer] = useState('')
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [muted, setMuted] = useState(false)
  const [genres, setGenres] = useState<Genre[]>([])

  useEffect(() => {
    if (!movie) return

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      ).then((response) => response.json())
      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === 'Trailer'
        )
        setTrailer(data.videos?.results[index]?.key)
      }
      if (data?.genres) {
        setGenres(data.genres)
      }
    }

    fetchMovie()
  }, [movie])

  return (
    <MuiModal
      open={showModal}
      onClose={() => setShowModal(false)}
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-4xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <button
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
          onClick={() => setShowModal(false)}
        >
          <XIcon className="h-6 w-6" />
        </button>

        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: '0', left: '0' }}
            playing
            muted={muted}
          />
          <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
            <div className="flex space-x-2">
              <button className="flex items-center gap-x-2 rounded bg-white px-6 py-2 text-lg font-semibold text-black transition hover:opacity-75">
                <FaPlay className="h-6 w-6 text-black" />
                Play
              </button>
              <button className="modalButton">
                <PlusIcon className="h-6 w-6" />
              </button>
              <button className="modalButton">
                <ThumbUpIcon className="h-6 w-6" />
              </button>
            </div>
            <button className="modalButton" onClick={() => setMuted(!muted)}>
              {muted ? (
                <VolumeOffIcon className="h-6 w-6" />
              ) : (
                <VolumeUpIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-16 bg-[#181818] px-10 py-14">
          <div className="max-w-lg space-y-6 text-lg">
            <div className="flex items-center space-x-2 font-semibold">
              <p className="text-green-400">
                {movie!.vote_average * 10}% Match
              </p>
              <p>{movie?.release_date || movie?.first_air_date}</p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>
            <p className="font-semibold">{movie?.overview}</p>
          </div>

          <div className="space-y-3">
            <div>
              <span className="text-[gray]">Genres:</span>{' '}
              {genres.map((genre) => genre.name).join(', ')}
            </div>

            <div>
              <span className="text-[gray]">Original language:</span>{' '}
              {movie?.original_language}
            </div>

            <div>
              <span className="text-[gray]">Total votes:</span>{' '}
              {movie?.vote_count}
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  )
}

export default Modal
