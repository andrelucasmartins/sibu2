"use client";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
interface UseTermsProps {}

export function UseTermsModal() {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  return (
    <>
      <Button onClick={() => props.setOpenModal("default")}>
        Termos de Uso
      </Button>
      <Modal
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>Termos de Uso</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <h2 className="text-gray-700">
                TERMOS E CONDIÇÕES DE COMPRA E VENDA
              </h2>
              Considerando que a sibutran2 realiza venda de produtos e serviços
              pela internet; Considerando o interesse do Cliente na compra dos
              produtos oferecidos pelo sibutran2 (“Produtos”) em seus canais de
              venda; O presente contrato tem por finalidade estabelecer as
              condições gerais de uso e compra de produtos e serviços do cliente
              do site sibutran2.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => props.setOpenModal(undefined)}
            color="white"
            className="bg-gray-900"
          >
            I accept
          </Button>
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
