"use client";

import { Badge, Card } from "flowbite-react";

interface ProductsProps {}
const PRODUCTS = [
  {
    id: 1,
    desc: "DESCONTO DE 60%",
    label: "CUSTO BENEFÍCIO",
    units: "6 Unidades",
    fromPrice: "899,40",
    parc: "37,14",
    price: "369,90",
    img: "/KIT-6-1.png",
    url: "https://app.monetizze.com.br/checkout/DUP224394/?split=12",
  },
  {
    id: 2,
    desc: "DESCONTO DE 58%",
    label: "O MAIS VENDIDO",
    units: "4 Unidades",
    fromPrice: "599,60",
    parc: "325,09",
    price: "249,90",
    img: "/KIT-4-1.png",
    url: "https://app.monetizze.com.br/checkout/DGJ224393/?split=12",
  },
  {
    id: 3,
    desc: "DESCONTO DE 57%",
    label: "RECOMENDADO",
    units: "3 Unidades",
    fromPrice: "449,70",
    parc: "19,09",
    price: "189,90",
    img: "/KIT-3-1.png",
    url: "https://app.monetizze.com.br/checkout/DMF184214/?split=12",
  },
  {
    id: 4,
    desc: "DESCONTO DE 46%",
    label: "EXPERIMENTE",
    units: "2 Unidades",
    fromPrice: "299,80",
    parc: "16,05",
    price: "159,90",
    img: "/KIT-2-1.png",
    url: "https://app.monetizze.com.br/checkout/DAF184212/?split=12",
  },
  {
    id: 5,
    desc: "DESCONTO DE 13%",
    label: "EXPERIMENTO",
    units: "1 Unidade",
    fromPrice: "899,40",
    parc: "37,14",
    price: "369,90",
    img: "/KIT-1-1.png",
    url: "https://app.monetizze.com.br/checkout/DUP224394/?split=12",
  },
];
export const Products = (props: ProductsProps) => {
  return (
    <section className="bg-white text-gray-900 py-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {PRODUCTS.map((product) => (
            <Card
              key={product.id}
              className="flex flex-col justify-center items-center"
            >
              <div className="text-center py-2 text-white uppercase min-w-full bg-green-500">
                {product.desc}
              </div>
              <Badge className="text-white bg-black max-w-fit mx-auto">
                {product.label}
              </Badge>
              <a href={product.url}>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                  <p>{product.units}</p>
                </h5>
              </a>
              <div className="mb-5 mt-2.5 flex flex-col items-center">
                <img src={product.img} alt={`Sibutra2 ${product.units}`} />
                <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                  <p>
                    de{" "}
                    <span className="line-through">R$ {product.fromPrice}</span>
                  </p>
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  $599
                </span>
                <a
                  className="rounded-full bg-green-500 px-5 py-2.5 text-center text-xs font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  href="#"
                >
                  <p>EU QUERO SIBUTRAN 2</p>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
