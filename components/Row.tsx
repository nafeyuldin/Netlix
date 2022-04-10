import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { useRef } from 'react'
import { Movie } from '../typings'
import Thumbnail from './Thumbnail'

interface Props {
  title: string
  movies: Movie[]
  index: number
}

function Row({ title, movies, index }: Props) {
  const rowRef = useRef<HTMLDivElement>(null)

  const handleClick = (direction: string) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <div className="h-40 space-y-2">
      <h2 className="w-56 cursor-pointer text-2xl font-bold">{title}</h2>
      <div className="group relative -ml-2">
        <ChevronLeftIcon
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}
          onClick={() => handleClick('left')}
        />
        <div
          className="flex items-center space-x-2.5 overflow-x-scroll p-2 scrollbar-hide"
          ref={rowRef}
        >
          {movies?.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} index={index} />
          ))}
        </div>
        <ChevronRightIcon
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  )
}

export default Row
