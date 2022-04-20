import Navbar from './Navbar'

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className=" grid max-w-7xl grid-cols-1 items-center gap-5 bg-yellow-400 py-10 px-10  md:grid-cols-12 xl:mx-auto xl:py-0">
        <div className=" col-span-1 space-y-5 md:col-span-8">
          <h1 className=" font-serif text-6xl">
            <span className=" underline decoration-current decoration-4">
              Medium
            </span>{' '}
            is a place to write, read, and connect
          </h1>
          <p>
            It's easy and free to post your thinking on any topic and connect
            with millions of readers
          </p>
        </div>
        <img
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
          alt="M logo"
          className=" col-span-1 mx-auto hidden w-44 md:col-span-4 md:inline-flex lg:h-full lg:w-60 xl:w-full"
        />
      </div>
    </header>
  )
}

export default Header
