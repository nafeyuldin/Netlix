import Head from 'next/head'
import BillBoard from '../components/BillBoard'
import Header from '../components/Header'
import Trending from '../components/Trending'

interface Props {
  trending: Array<any>
}

const Home = ({ trending }: Props) => {
  console.log(trending)
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900/10 to-[#010511]">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section className="flex h-[650px] flex-col justify-between md:flex-row md:items-end">
          <BillBoard />
          <Trending trending={trending} />
        </section>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const trending = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API_KEY}&language=en-US`
  ).then((res) => res.json())

  return {
    props: {
      trending: trending.results,
    },
  }
}
