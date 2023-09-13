"use client";

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
            src="/mockup-sibutran2-oficial-flag-drt-16-05-22-768x624.png"
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
          <button
            type="button"
            className="my-4 text-white bg-gradient-to-bl from-emerald-500 to-emerald-700 hover:bg-emerald-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full sm:rounded text-sm px-5 py-2.5 text-center  text-base  max-w-[320px] w-full mx-auto"
          >
            Sim, eu quero um emagrecimento saudável!
          </button>
          <img
            src="/checkout_2-1.png"
            alt="Checkout Seguro"
            className="my-6 w-full max-w-[340px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};