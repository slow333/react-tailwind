import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="bg-gray-800 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between flex-1 ">
          <div className="flex shrink-0 items-center mr-8">
            <Link to={'/'}>
              <h1 className=" bg-emerald-400 w-10 h-10 rounded-full shadow-2xl grid place-content-center">
                <div className="bg-teal-700 w-7 h-7 rounded-full grid place-content-center">
                  <div className="animate-ping bg-green-100 w-4 h-4 rounded-full"></div>
                </div>
              </h1>
            </Link>
          </div>
          <div className="centerItem">
            <Link to={'/basic'} className="navItem">BASIC</Link>
            <Link to={'/layout-elements'} className="navItem">Layout Els</Link>
            <Link to={'/media-handle'} className="navItem">Media</Link>
            <Link to={'/tw-customize'} className="navItem">TW-Custom</Link>
            <Link to={'/etc-more'} className="navItem">MORE</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
