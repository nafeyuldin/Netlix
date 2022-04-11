import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom.'
import { Movie } from '../typings'

interface Props {
  movie: Movie
  index: number
}

function Thumbnail({ movie, index }: Props) {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [showModal, setShowModal] = useRecoilState(modalState)

  return (
    <div
      className={`relative h-36 min-w-[260px] cursor-pointer transition duration-200 ease-out md:hover:scale-105`}
      onClick={() => {
        setCurrentMovie(movie)
        setShowModal(true)
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="rounded object-cover"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail
