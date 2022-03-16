import { HiChevronDown } from 'react-icons/hi'
import { IoIosSearch, IoMdNotificationsOutline } from 'react-icons/io'

function Header() {
  return (
    <header className="flex items-center justify-between p-4 text-sm lg:px-20 lg:py-6">
      <div className="flex flex-shrink-0 items-center space-x-3 lg:space-x-6">
        <img src="https://rb.gy/ulxxee" className="h-7 object-contain" />
        <span className="h-8 w-px bg-white" />
        <a className="headerLink hidden font-semibold lg:inline-flex">Home</a>
        <a className="headerLink flex items-center gap-x-1.5 text-gray-500 transition hover:text-white lg:hidden">
          Browse
          <HiChevronDown className="h-4 w-4" />
        </a>
      </div>

      <div className="flex flex-shrink-0 items-center lg:divide-x">
        <div className="hidden items-center space-x-7 pr-7 lg:flex">
          <a className="headerLink text-white/90">TV Shows</a>
          <a className="headerLink text-white/90">Movies</a>
          <a className="headerLink text-white/90">New & Popular</a>
          <a className="headerLink text-white/90">My List</a>
        </div>
        <div className="flex items-center space-x-4 pl-7">
          <IoIosSearch className="hidden h-[18px] w-[18px] sm:inline-flex" />
          <IoMdNotificationsOutline className="h-[18px] w-[18px]" />
          <div className="flex items-center space-x-1.5">
            <img
              src="https://lh3.googleusercontent.com/a-/AOh14Gg9XntgQjlstiUXplC4zji9cjq79tEp0ufeAY7FRg=s96-c-rg-br100"
              alt=""
              className="h-8 w-8"
            />
            <HiChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
