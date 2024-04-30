import { Link } from "react-router-dom";

const WhoWeAre = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 mt-12">
      <h2 className="text-4xl text-center">Who We Are</h2>
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://sendiassleicester.org.uk/wp-content/uploads/2020/06/who-we-are.png"
            alt=""
            className="object-contain rounded-full h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Creative
            <span className="dark:text-violet-600"> Art Agency</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            At [Creative Art Agency], we believe in the transformative power of
            art. We are a passionate team of creators, designers, and
            visionaries dedicated to bringing imagination to life through
            various mediums. From traditional paintings to digital
            illustrations, sculptures to multimedia installations, we strive to
            push the boundaries of creativity and inspire meaningful connections
            through art.
          </p>
          <Link to="/allartitems">
            <button className="btn btn-block">Check Our Art</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
