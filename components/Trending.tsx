const BASE_URL = 'https://image.tmdb.org/t/p/original/'

function Trending({ trending }) {
  return (
    <div className="space-y-4 md:w-3/4">
      <h1 className="text-lg font-bold">Trending now</h1>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
        {/* {trending.map((movie) => (
          <div key={movie.id} className="space-y-2 text-center">
            <img
              //   src={`${BASE_URL}${movie.poster_path}`}
              src="/loveOfMyLife.jpg"
              alt=""
              className="h-60 min-w-[160px] object-cover"
            />
            <h2 className="text-[13px] font-semibold">{movie.title}</h2>
          </div>
        ))} */}
        <div className="space-y-2 text-center">
          <img
            src="/loveOfMyLife.jpg"
            alt=""
            className="h-60 min-w-[160px] object-cover"
          />
          <h2 className="text-[13px] font-semibold">Love Of My Life ❤️❤️❤️</h2>
        </div>
        <div className="space-y-2 text-center">
          <img
            src="/myGoodGirl.jpg"
            alt=""
            className="h-60 min-w-[160px] object-cover"
          />
          <h2 className="text-[13px] font-semibold">My Cutie Pie 🐰🐰🐰</h2>
        </div>
        <div className="space-y-2 text-center">
          <img
            src="/myHottie.jpg"
            alt=""
            className="h-60 min-w-[160px] object-cover"
          />
          <h2 className="text-[13px] font-semibold">My Hottie 🥵🥵🥵</h2>
        </div>
        <div className="space-y-2 text-center">
          <video
            autoPlay
            loop
            muted
            src="/mineForever.mov"
            className="h-60 min-w-[160px] object-cover"
          />
          <h2 className="text-[13px] font-semibold">Mine Forever 😊😊😊</h2>
        </div>
        <div className="space-y-2 text-center">
          <video
            autoPlay
            loop
            muted
            src="/myGoodGirl.mov"
            className="h-60 min-w-[160px] object-cover"
          />
          <h2 className="text-[13px] font-semibold">My Good Girl ✨✨✨</h2>
        </div>
      </div>
    </div>
  )
}

export default Trending
