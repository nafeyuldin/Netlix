import Image from 'next/image'

function BillBoard() {
  return (
    <div className="md:w-1/2">
      <div className="absolute top-0 left-0 -z-10 h-screen w-full">
        {/* <Image src="https://rb.gy/es4llu" layout="fill" objectFit="cover" /> */}
        <img
          src="https://i.pinimg.com/originals/a1/f1/cb/a1f1cbf987bc1e6d6211270ff4071d09.jpg"
          className="absolute h-full w-full object-cover"
        />
      </div>
      <div className="pl-7 lg:pl-14">
        <h1 className="text-3xl font-bold">I LOVE YOU SO MUCH</h1>
        <div className="mt-1 flex space-x-1 text-[11px]">
          <span className="text-gray-500">Genre:</span>
          <p>Epic,</p>
          <p>Fantasy,</p>
          <p>Superpower</p>
        </div>
        <p className="mt-4 max-w-md text-xs text-[13px] line-clamp-5 md:line-clamp-none">
          Nick Fury, the director of the espionage agency known as S.H.I.E.L.D.
          arrives at Project P.E.G.A.S.U.S., a remote research facility, during
          an evacuation. His second-in-command, Maria Hill, explains that the
          Tesseract, an self-sustaining energy source of unknown potential, has
          activated and opened a portal through space, from which the exiled
          Asgardian prince Loki, steps through .... <a>Read more</a>
        </p>
        <button className="mt-8 rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold shadow-lg shadow-rose-700">
          Watch now
        </button>
      </div>
    </div>
  )
}

export default BillBoard
