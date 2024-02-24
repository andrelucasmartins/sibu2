"use client";

import { Badge, Card } from "flowbite-react";
import Image from "next/image";
import { PRODUCTS } from "../data/products";

interface ProductsProps {}

export const Products = (props: ProductsProps) => {
  return (
    <section className="bg-white text-gray-900 py-10 element" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
          <span className="text-red-600 mr-2">ECONOMIZE</span>
          agora mesmo com a nossa oferta especial!
        </h1>
        <p className="text-center">
          Trouxemos esses{" "}
          <span className="font-semibold">descontos imperdíveis</span> para você
          emagrecer de vez!{" "}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {PRODUCTS.map((product) => (
            <Card
              key={product.id}
              className="flex flex-col justify-center items-center"
            >
              <div className="text-center py-2 text-white font-semibold uppercase min-w-full bg-green-500">
                {product.desc}
              </div>
              <Badge className="text-white bg-black max-w-fit mx-auto">
                {product.label}
              </Badge>
              <a
                href={product.url}
                className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center -mb-4"
              >
                <h5>{product.units}</h5>
              </a>
              <div className="flex flex-col items-center">
                <a href={product.url}>
                  <Image
                    src={product.img}
                    alt={`Sibutra2 ${product.units}`}
                    width={350}
                    height={350}
                  />
                </a>
                <span className="ml-3 mr-2 rounded bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-800 dark:bg-red-200 dark:text-red-800">
                  <p>
                    de{" "}
                    <span className="line-through">R$ {product.fromPrice}</span>
                  </p>
                </span>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <span className="text-3xl font-bold text-gray-900 dark:text-white flex flex-row gap-x-1">
                  <div className="text-xs flex flex-col items-end justify-center">
                    <span>12X</span>
                    <span>R$</span>
                  </div>
                  <div>{product.price}</div>
                </span>
                <a
                  className="rounded-full bg-green-500 px-5 py-2.5 text-center text-xs font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  href={product.url}
                >
                  <p>EU QUERO SIBUTRAN 2</p>
                </a>
              </div>
            </Card>
          ))}
        </div>
        <Image
          src="/free2-1.png"
          alt="frete"
          className="mx-auto"
          width={100}
          height={100}
        />
        <p className="text-center">
          Esse produto possui entrega acelerada! Último lote disponível, reserve
          seu kit!{" "}
        </p>
        <h3 className="text-center text-red-600 text-lg font-bold ">
          Frete Grátis Para Todo o Brasil!
        </h3>
        <div className="flex flex-col justify-center items-center space-y-4">
          <h3 className="text-2xl font-bold text-center">
            EVITE PROTUDOS FALSIFICADOS. PIRATARIA É CRIME!!
          </h3>
          <p className="text-sm text-center">
            A venda do <b>SIBUTRAN 2</b> através de qualquer outro site está{" "}
            <b>PROIBIDA</b> e pode colocar a sua <b>SAÚDE EM RISCO</b>.
            <br />
            Não compre falsificações e garanta um produto de qualidade comprando
            <b>APENAS</b> através deste site oficial.
          </p>
          <img
            src="/pirataria-nao.png"
            alt="pirataria não"
            className="mx-auto w-2/4"
          />
        </div>
      </div>
    </section>
  );
};
