import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-50 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="/herosection.jpg"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <h2 className="mb-5 font-sans text-4xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            We provide <span className="text-orange-300">quality</span> and
            <span className="text-orange-300"> unique clothes</span> at
            <span className="mx-1 inline-block text-deep-purple-accent-400 ">
              affordable price.
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Discover sophistication redefined with our Modern Men's Wear
            Collection. Elevate your style effortlessly, from tailored suits to
            sleek casual wear. Unleash confidence in every step with
            fashion-forward designs and premium fabrics. Embrace the modern
            gentleman's wardrobe with exclusive offers on the latest trends.
            Redefine your style, because exceptional is the new standard.
          </p>
          <div className="flex items-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-red transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-gray-100 focus:shadow-outline focus:outline-none"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
