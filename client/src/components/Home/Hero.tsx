import { ArrowRightIcon, PawPrintIcon } from "lucide-react";
import { heroSectionData } from "../../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative mb-10 flex min-h-[540px] items-center overflow-hidden rounded-3xl">
      <img
        src={heroSectionData.hero_image}
        alt="A dog and cat relaxing among pet-care essentials"
        className="absolute inset-0 h-full w-full object-cover object-center max-sm:object-[90%]"
      />

      <div className="absolute inset-0 bg-linear-to-r from-app-green via-app-green/65 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-xl xl:pl-10">
          <span className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-orange-300/10 px-4 py-1.5 text-xs font-semibold text-orange-300">
            <PawPrintIcon className="size-3 shrink-0" />
            Made for Pet Parents
          </span>

          <h1 className="mb-5 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Care that keeps{" "}
            <span className="text-orange-300">tails wagging.</span>
          </h1>

          <p className="mb-8 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
            {heroSectionData.description}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/products"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-orange-400 px-7 py-3 text-center font-semibold text-white transition-all hover:bg-orange-500 active:scale-[0.98] sm:w-auto"
            >
              Shop Pet Essentials
              <ArrowRightIcon className="size-4 shrink-0" />
            </Link>

            <Link
              to="/products"
              className="flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3 text-center font-semibold text-white transition-all hover:bg-white/20 sm:w-auto"
            >
              Explore Categories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
