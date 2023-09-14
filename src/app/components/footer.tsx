"use client";

import { v4 as uuidv4 } from "uuid";

interface FooterProps {}

const PRIVACY_POLICY = [
  {
    id: uuidv4(),
    title: "TERMOS DA POLITICA DE PRIVACIDADE",
    description:
      "Todas as suas informações pessoais recolhidas, serão usadas para o ajudar a tornar a sua visita no nosso site o mais produtiva e agradável possível. A garantia da confidencialidade dos dados pessoais dos utilizadores do nosso site é importante para o sibutran2. Todas as informações pessoais relativas a membros, assinantes, clientes ou visitantes que usem o sibutran2 serão tratadas em concordância com a Lei da Proteção de Dados Pessoais de 26 de outubro de 1998 (Lei n.º 67/98). A informação pessoal recolhida pode incluir o seu nome, e-mail, número de telefone e/ou telemóvel, morada, data de nascimento e/ou outros. O uso do sibutran2 pressupõe a aceitação deste Acordo de privacidade. A equipe do sibutran2 reserva-se ao direito de alterar este acordo sem aviso prévio. Deste modo, recomendamos que consulte a nossa política de privacidade com regularidade de forma a estar sempre atualizado.",
  },
  {
    id: uuidv4(),
    title: "OS ANÚNCIOS",
    description:
      "Tal como outros websites, coletamos e utilizamos informação contida nos anúncios. A informação contida nos anúncios, inclui o seu endereço IP (Internet Protocol), o seu ISP (Internet Service Provider, como o Sapo, Clix, ou outro), o browser que utilizou ao visitar o nosso website (como o Internet Explorer ou o Firefox), o tempo da sua visita e que páginas visitou dentro do nosso website.",
  },
  {
    id: uuidv4(),
    title: "OS COOKIES E WEB BEACONS",
    description:
      "Utilizamos cookies para armazenar informação, tais como as suas preferências pessoas quando visita o nosso website. Isto poderá incluir um simples popup, ou uma ligação em vários serviços que providenciamos, tais como fóruns. Em adição também utilizamos publicidade de terceiros no nosso website para suportar os custos de manutenção. Alguns destes publicitários, poderão utilizar tecnologias como os cookies e/ou web beacons quando publicitam no nosso website, o que fará com que esses publicitários (como o Google através do Google AdSense) também recebam a sua informação pessoal, como o endereço IP, o seu ISP, o seu browser, etc. Esta função é geralmente utilizada para geotargeting (mostrar publicidade de Lisboa apenas aos leitores oriundos de Lisboa por ex.) ou apresentar publicidade direcionada a um tipo de utilizador (como mostrar publicidade de restaurante a um utilizador que visita sites de culinária regularmente, por ex.). Você detém o poder de desligar os seus cookies, nas opções do seu browser, ou efetuando alterações nas ferramentas de programas Anti-Vírus, como o Norton Internet Security. No entanto, isso poderá alterar a forma como interage com o nosso website, ou outros websites. Isso poderá afetar ou não permitir que faça logins em programas, sites ou fóruns da nossa e de outras redes.",
  },
  {
    id: uuidv4(),
    title: "LIGAÇÕES A SITES DE TERCEIROS",
    description:
      "O sibutran2 – composto natural para emagrecimento possui ligações para outros sites, os quais, a nosso ver, podem conter informações / ferramentas úteis para os nossos visitantes. A nossa política de privacidade não é aplicada a sites de terceiros, pelo que, caso visite outro site a partir do nosso deverá ler a politica de privacidade do mesmo. Não nos responsabilizamos pela política de privacidade ou conteúdo presente nesses mesmos sites.",
  },
];

const TERMS = [
  {
    id: 1,
    title: "TERMOS E CONDIÇÕES DE COMPRA E VENDA",
    description:
      "Considerando que a sibutran2 realiza venda de produtos e serviços pela internet; Considerando o interesse do Cliente na compra dos produtos oferecidos pelo sibutran2 (“Produtos”) em seus canais de venda; O presente contrato tem por finalidade estabelecer as condições gerais de uso e compra de produtos e serviços do cliente do site sibutran2.",
  },
  {
    id: 2,
    title: "I. Confidencialidade:",
    description:
      "É de responsabilidade sibutran2 a preservação da confidencialidade de todos os dados e informações fornecidos pelo Cliente no processo de compra. A segurança do site é auditada diariamente e garantida contra a ação de hackers, através do selo “Site Blindado”.",
  },
  {
    id: 3,
    title: "II. Serviço de Atendimento ao Cliente (SAC):",
    description:
      "O cliente dispõe desse serviço para sanar suas dúvidas, solucionar eventuais solicitações ou reclamações a respeito do seu pedido ou de qualquer conteúdo disponibilizado no site. O SAC poderá ser acionado por meio de telefone ou de formulário do site.",
  },
  {
    id: 4,
    title: "III. Política de entrega:",
    description: `
    o prazo para entrega dos Produtos é informado durante o procedimento de compra, contabilizado em dias úteis. As entregas dos Produtos são realizadas de segunda a sexta-feira, das 8h às 22h. Excepcionalmente, algumas entregas de Produtos podem ocorrer aos sábados, domingos e feriados.

III.I – A conferência da adequação das dimensões do produto é de responsabilidade do Cliente, que deverá se assegurar de que estas estão de acordo com os limites espaciais dos elevadores, portas e corredores do local da entrega. Não será realizada a montagem ou desmontagem do produto, transporte pela escada e/ou portas e janelas, ou içamento das entregas.

III.II – Serão realizadas até três tentativas de entrega no local informado, em dias alternados, com intervalo de até 48h entre uma entrega e outra. É indispensável que, no endereço solicitado, haja uma pessoa autorizada pelo comprador, maior de 18 anos, e portando documento de identificação para receber a mercadoria e assinar o protocolo de entrega. Se houver três tentativas de entrega sem sucesso, o pedido retornará para o Centro de Distribuição do sibutran2.

III.III – Após a finalização do pedido não é possível alterar a forma de pagamento e/ou endereço de entrega, solicitar adiantamento ou, ainda, prioridade da entrega.

III.IV – O prazo de entrega informado durante o procedimento de compra do Produto leva em consideração o estoque, a região, o processo de emissão da nota fiscal e o tempo de preparo do produto. A cada atualização no status de entrega do pedido, o sistema do sibutran2 envia, automaticamente, e-mails de alerta para o Cliente.

III.V – O valor do frete da entrega é calculado com base no local de entrega, peso e dimensões do Produto.

III.VI – O sibutran2 não autoriza a transportadora a: entrar no domicílio; entregar por meios alternativos (exemplo: içar produto por janela); realizar instalação ou manutenção de produtos; abrir a embalagem do produto; realizar entrega em endereço diferente do que consta no sibutran2; realizar entrega a menor de idade ou sem documento de identificação.

III.VII – O sibutran2 não se responsabiliza pela retenção de mercadorias na SEFAZ quando esta se dever exclusivamente a pendências do cliente, sendo, portanto, necessário seu comparecimento no posto fiscal para que a mercadoria seja liberada, tendo em vista que nestes casos as informações referentes a liberações e pagamentos só são passadas aos interessados.
    `,
  },
  {
    id: 5,
    title: "IV. Direito de arrependimento:",
    description: `Ao Cliente será facultado o exercício do direito de arrependimento da compra, com a finalidade de devolução do Produto, hipótese na qual deverão ser observadas as seguintes condições: o prazo de desistência da compra do produto é de até 7 (sete) dias corridos, a contar da data do recebimento; em caso de devolução, o produto deverá ser devolvido à sibutran2 na embalagem original, acompanhado do DANFE (Documento Auxiliar da Nota Fiscal Eletrônica), do manual e de todos os seus acessórios.

IV.I – O Cliente deverá solicitar a devolução através do Serviço de Atendimento ao Cliente (SAC) ou diretamente no Painel de Controle, no tópico “cancelar pedido”. As despesas decorrentes de coleta ou postagem do Produto serão custeadas pelo sibutran2.

IV.II – Após a chegada do produto ao Centro de Distribuição, o sibutran2 verificará se as condições supra citadas foram atendidas. Em caso afirmativo, providenciará a restituição no valor total da compra.

IV.III – Em compras com cartão de crédito a administradora do cartão será notificada e o estorno ocorrerá na fatura seguinte ou na posterior, de uma só vez, seja qual for o número de parcelas utilizado na compra. O prazo de ressarcimento e, ainda, a cobrança das parcelas remanescentes após o estorno integral do valor do Produto no cartão de crédito do Cliente realizado pelo sibutran2, é de responsabilidade da administradora do cartão. Na hipótese de cobrança de parcelas futuras pela administradora do cartão, o Cliente não será onerado, vez que o sibutran2, conforme mencionado acima, realiza o estorno do valor integral do Produto em uma única vez, sendo o crédito referente ao estorno concedido integralmente pela administradora do cartão na fatura de cobrança subsequente ao mês do cancelamento.

IV.IV – Em compras pagas com boleto bancário ou débito em conta, a restituição será efetuada por meio de depósito bancário, em até 10 (dez) dias úteis, somente na conta corrente do(a) comprador(a), que deve ser individual. É necessário que o CPF do titular da conta corrente.`,
  },
];

import Link from "next/link";
import { FaExpeditedssl, FaWhatsapp } from "react-icons/fa6";
import { Modal } from "./modal";

export function Footer(props: FooterProps) {
  return (
    <footer className=" bg-gray-950 ">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-8 px-4 py-6 lg:py-8">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
              Contato
            </h2>
            <ul className="text-gray-100 font-medium text-xs">
              <li className="mb-4">
                <p className="font-thin flex flex-col">
                  <span className="font-medium">Fale conosco pelo e-mail:</span>
                  sac@sibutran2.com.br <br />
                  ou telefone: (11) 3136-0769
                </p>
              </li>
              <li className="mb-4">
                <p className="font-thin flex flex-col">
                  <span className="font-medium">Horário de atendimento:</span>
                  Segunda a Sexta-feira das 8h às 18hrs
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
              Precisa de ajuda?
            </h2>
            <ul className="text-gray-100 font-medium">
              <li className="mb-4">
                <Link
                  type="button"
                  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center  mb-2 flex flex-row gap-2 w-[210px]"
                  href="https://api.whatsapp.com/send?phone=5519993028888&text=Olá, sou André, gostaria de saber mais sobre o Sibutran2?"
                >
                  <FaWhatsapp size={20} />
                  +55 (19) 99302-8888
                </Link>
              </li>

              <li className="mb-4">
                <a
                  href="#"
                  className="hover:underline px-6 py-2 uppercase hover:cursor-default bg-gray-600 text-gray-100 ring-1 ring-gray-500 rounded-sm text-sm"
                >
                  entre em contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
              Links Úteis
            </h2>
            <ul className="text-gray-100 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Garantia
                </a>
              </li>
              <li className="mb-4">
                <Modal.UseTerms
                  list={PRIVACY_POLICY}
                  title="Política de Privacidade"
                  id="privacy_politic"
                >
                  <Modal.ButtonAction id="privacy_politic">
                    Política de Privacidade
                  </Modal.ButtonAction>
                </Modal.UseTerms>
              </li>
              <li className="mb-4">
                <Modal.UseTerms list={TERMS} title="Termos de Uso" id="terms">
                  <Modal.ButtonAction id="terms">
                    Termos de Uso
                  </Modal.ButtonAction>
                </Modal.UseTerms>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
              Site Seguro
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium text-sm">
              <li className="mb-4">
                <ul>
                  <li className="mb-2">
                    <button
                      type="button"
                      className="bg-gray-600 text-gray-300 px-8 py-1 uppercase text-base flex items-center gap-2 w-[214px]"
                    >
                      <FaExpeditedssl size={20} />
                      <span className="text-xs"> Ambiente Seguro</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="bg-gray-600 text-gray-300 px-8 py-1 uppercase text-base flex items-center gap-2 w-[214px]"
                    >
                      <FaExpeditedssl size={20} />
                      <span className="text-xs"> certificado ssl</span>
                    </button>
                  </li>
                </ul>
              </li>
              <li className="mb-4 flex items-center justify-center">
                <img
                  src="/SELO-DE-GARANTIA-300x300-1.png"
                  alt="SELO DE GARANTIA"
                  className="max-w-[145px]"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="px-4 py-6 bg-gray-950 md:flex md:items-center md:justify-between mx-auto max-w-[1200px] ">
          <span className="text-sm text-gray-200 dark:text-gray-300 sm:text-center">
            © {new Date().getFullYear()}{" "}
            <a href="https://aedigi.com.br">AE Digi Solutions™</a>. All Rights
            Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
