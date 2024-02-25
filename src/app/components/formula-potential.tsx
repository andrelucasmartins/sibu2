"use client";

import { Link } from "react-scroll";

interface FormulaPotentialProps {}

export const FormulaPotential = (props: FormulaPotentialProps) => {
  return (
    <>
      <article className="format lg:format-lg bg-white min-w-full px-6 py-8 capitalize text-center">
        <h2>
          Perder medidas é bom para os olhos e ter saúde faz bem ao coração.
        </h2>
        <p className="text-red-600">
          Mas essa combinação somente o Sibutran 2 pode te proporcionar de
          maneira verdadeiramente saudável, graças a composição de suas
          cápsulas.
        </p>
      </article>
      <article className="format lg:format-lg bg-red-900 text-white min-w-full px-8 py-8">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-white py-12 text-center">
            O segredo do Sibutran 2 está na potência de sua fórmula!{" "}
          </h2>
          <p>
            Sibutran 2 vai além das vitaminas e minerais tradicionais extraídos
            de frutas e legumes, entenda:
          </p>{" "}
          <p>
            {" "}
            Psyllium, Spirulina, Quitosana e Cromo, são os principais
            responsáveis pela eficiência da nossa cápsula.
          </p>{" "}
          <p>
            Psyllium, por exemplo, auxilia no controle da glicemia, impedindo o
            seu sistema de reter o excesso de açúcar dos alimentos ingeridos.
          </p>{" "}
          <p>
            É válido apontar que antes do seu corpo perder gordura, busca se
            livrar de todo o açúcar que percorre o seu organismo.
          </p>
          <p>
            Portanto, ao reduzir a retenção de glicemia, Sibutran 2 acelera o
            seu processo de emagrecimento drasticamente enquanto mantém o seu
            organismo dentro dos limites glicêmicos responsáveis pela energia do
            seu corpo.
            <br />
            Spirulina é um suplemento alimentar natural que contém diversas
            vitaminas e minerais responsáveis por preencher a sua corrente
            sanguínea e regular o seu organismo para um funcionamento completo.
          </p>
          <p>
            Tudo isso poderia ser o suficiente para garantir a você um
            emagrecimento saudável, mesmo assim, Sibutran 2 reuniu mais dois
            ingredientes em seu gel encapsulado – Quitosana e Cromo –, ricos em
            fibras, promovendo saciedade, rompendo com a ansiedade por comida;
            controlam o colesterol e aceleram o metabolismo, além de auxiliarem
            no controle da diabetes tipo 2.
          </p>
          <p>
            Agora você compreende o porquê Sibutran 2 é o melhor emagrecedor do
            mercado? Saúde e beleza nunca tiveram tanto equilíbrio e afinidade!
            <br />
            Busque agora mesmo a sua autoestima e confiança, sem deixar a sua
            saúde para trás! Graças ao nosso emagrecedor, é possível!
          </p>
          <div className="flex flex-col justify-center items-center">
            <Link
              type="button"
              className="text-white bg-gradient-to-bl from-green-400 via-green-500
               to-green-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800  font-medium rounded-lg text-sm/3  px-8 py-3.5 text-center  capitalize no-underline"
              to="products"
              smooth
              spy
              duration={500}
              name="Comprar Sibutran2 Garantia De 30 Dias Ou Seu Dinheiro De Volta"
            >
              <div className="flex flex-col">
                <h2 className="text-white">Comprar Sibutran2</h2>
                <span className="text-xs/2">
                  Garantia de 30 dias ou seu dinheiro de volta
                </span>
              </div>
            </Link>
          </div>
          <img
            src="/checkout_2-1.webp"
            alt="Checkout Seguro"
            className="my-6 w-full max-w-[340px] mx-auto"
          />
        </div>
      </article>
    </>
  );
};
