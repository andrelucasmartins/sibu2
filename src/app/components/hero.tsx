"use client";

import { Link } from "react-scroll";

interface HeroProps {}

export const Hero = (props: HeroProps) => {
  return (
    <section className="px-4 py-6  bg-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 justify-center items-center">
        <div>
          <h1 className="text-red-600 text-2xl font-bold text-center px-12 sm:invisible">
            O melhor redutor de medidas!
          </h1>
          <img
            src="/mockup-sibutran2-oficial-flag-drt-16-05-22-768x624.webp"
            alt="Sibutran2"
            className="w-full my-6 max-w-[640px] mx-auto"
          />
        </div>
        <div className="flex-col justify-center sm:justify-start sm:items-start flex">
          <h1 className="text-red-600 text-4xl/10 font-bold  sm:visible invisible text-start">
            O melhor redutor de medidas!
          </h1>
          <p className=" text-sm sm:text-4xl font-bold my-4 line-clamp-3">
            Mais do que um potente emagrecedor, Sibutran 2 é o auxiliador da sua
            saúde.
          </p>
          <p className="text-lg sm:block hidden my-4 font-semibold">
            Você não quer apenas emagrecer, quer recuperar a saúde, sentir-se
            <br />
            enérgico e se livrar da fadiga!
          </p>

          <Link
            className="my-4 text-white bg-gradient-to-bl from-emerald-500 to-emerald-700 hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full sm:rounded  px-10 py-5 text-center   w-full"
            to="products"
            spy
            smooth
            duration={500}
            name="Sim, eu quero um emagrecimento saudável!"
          >
            Sim, eu quero um emagrecimento saudável!
          </Link>

          <img
            src="/checkout_2-1.webp"
            alt="Checkout Seguro"
            className="my-6 w-full max-w-[340px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};
