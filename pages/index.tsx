import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Login from '../components/Login'
import NowPlaying from '../components/NowPlaying'
import TopRated from '../components/TopRated'
import Trending from '../components/Trending'
import useAuth from '../hooks/useAuth'

interface Props {
  trending: Array<any>
}

const Home = ({ trending, nowPlaying, topRated, genres }: Props) => {
  const { user } = useAuth()
  if (!user) return <Login />

  console.log(genres)
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511]">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="space-y-12 pl-7 pb-24 lg:pl-12">
        <section className="flex h-[650px] flex-col justify-between md:flex-row md:items-end md:px-2">
          <Banner />
          <Trending trending={trending} />
        </section>

        <section className="space-y-12">
          <NowPlaying nowPlaying={nowPlaying} />
          <TopRated topRated={topRated} genres={genres} />
          {/* Watchlist */}
        </section>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const [trending, nowPlaying, topRated, genres] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API_KEY}`
    ).then((res) => res.json()),
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US`
    ).then((res) => res.json()),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US`
    ).then((res) => res.json()),
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`
    ).then((res) => res.json()),
  ])

  return {
    props: {
      trending: trending.results,
      nowPlaying: nowPlaying.results,
      topRated: topRated.results,
      genres: genres.genres,
    },
  }
}
