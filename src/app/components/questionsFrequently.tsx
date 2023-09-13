"use client";

import { Accordion } from "flowbite-react";
interface QuestionsFrequentlyProps {}

const questions = [
  {
    id: 1,
    question: "QUAIS SÃO OS EFEITOS DO SIBUTRAN 2 NO MEU ORGANISMO?",
    answer:
      "Sibutran 2 é um emagrecedor de alta concentração com uma composição de ingredientes 100% naturais. Sibutran 2 tem como função criar uma “gelatina imã” que através de suas fibras, permite sugar impurezas e camadas de gordura para dentro, expulsando do corpo a gordura através da respiração, fezes e urina.",
  },
  {
    id: 2,
    question: "COMO DEVO USAR O SIBUTRAN 2?",
    answer:
      "Cada frasco/pote contém 60 cápsulas, é recomendado tomar 2 cápsulas ao dia, sendo 1 antes das principais refeições. Especialistas em nutrição e emagrecimento recomendam o uso de Sibutran 2 por no mínimo 3 meses para um resultado definitivo no seu corpo.",
  },
  {
    id: 3,
    question: "QUANTAS CÁPSULAS CONTÉM EM UM FRASCO DE SIBUTRAN 2?",
    answer: "Cada frasco/pote contém 60 cápsulas.",
  },
  {
    id: 4,
    question: "EXISTEM EFEITOS COLATERAIS DO SIBUTRAN 2?",
    answer:
      "Não existe nenhum efeito colateral com o consumo do produto SIBUTRAN2, e qualquer pessoa pode tomar e aproveitar seus benefícios. Porém, o uso do SIBUTRAN2 não é recomendado para pessoas alérgicas a peixes e crustáceos e gestantes que devem consultar um médico antes de iniciar o consumo. ESTE PRODUTO NÃO CONTÉM GLÚTEN.",
  },
  {
    id: 5,
    question: "COMO FUNCIONA O PAGAMENTO?",
    answer:
      "Aceitamos os cartões de crédito mais usados: visa, mastercard, através da plataforma de pagamento Monetizze. Não é possível parcelar no boleto bancário, pois no boleto é pagamento único. É possível parcelar somente no cartão de crédito em até 12x. É possível dividir em dois cartões de crédito diferentes. ",
  },
  {
    id: 6,
    question: "QUAL É A COMPOSIÇÃO 100% NATURAL DO SIBUTRAN 2?",
    answer:
      "Sibutran 2 é uma fórmula desenvolvida nos Estados Unidos, que ganhou repercussão em programas de TV de emagrecimento.Tem como principais compostos o Picolinato de cromo; q.s.p. espirulina (Arthrospira platensis), psyllium (Plantago ovatae) e quitosana, formando juntos um excelente time para o emagrecimento rápido e saudável.",
  },
  {
    id: 7,
    question: "QUAL É O KIT MAIS VENDIDO?",
    answer:
      "O kit mais vendido e o mais recomendado é o KIT com 4 potes com desconto máximo de 58%, isso porque recomendamos o uso por no mínimo 3 meses para um resultado excelente e com 5 meses você terá o resultado máximo que esse tratamento pode te oferecer.",
  },
  {
    id: 8,
    question: "ESSE SITE É SEGURO?",
    answer:
      "Este site é 100% protegido contra recursos de má intenção. Suas informações pessoais são sigilosas segundo a nossa Política de Privacidade e a entrega é garantida! O Sibutramin é vendido diariamente para pessoas de todo o Brasil.",
  },
];

export const QuestionsFrequently = (props: QuestionsFrequentlyProps) => {
  return (
    <section className="bg-red-800 text-white py-10">
      <div className="container mx-auto max-w-[1200px] space-y-6">
        <h1 className="text-center text-4xl font-bold">PERGUNTAS FREQUENTES</h1>
        <p className="text-center text-xl">
          Veja aqui as principais dúvidas sobre o Sibutran 2{" "}
        </p>

        <Accordion className="text-white border-0  ">
          {questions?.map((question) => (
            <Accordion.Panel
              className="hover:bg-transparent "
              key={question.id}
            >
              <Accordion.Title className="transition ease-in-out delay-150  text-white hover:bg-transparent bg-transparent focus:ring-0">
                {question.question}
              </Accordion.Title>

              <Accordion.Content>
                <p className="mb-2 text-white">{question.answer}</p>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
