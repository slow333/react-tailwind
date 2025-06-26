import {Link} from 'react-router-dom';

function BrandNav() {
  return (
    <>
      <header className="bg-teal-700 text-white sticky top-0 z-200 text-sm h-16">
        <div className="w-full mx-auto p-4 rowCenterItems">
          <a href="#basic" className='rowCenterItems text-white text-lg'>Basic</a>
          <nav className="hidden md:block space-x-8 m-0 p-0 text-lg">
            <Link to='/brand' className='navItem'>Brand</Link>
            <Link to='/article' className='navItem'>Article</Link>
            <Link to='/CTA' className='navItem'>CTA</Link>
            <Link to='/feature' className='navItem'>Feature</Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default BrandNav