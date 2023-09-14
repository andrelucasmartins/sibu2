"use client";
import { TermsModalContext } from "@/contexts/TermsContext";
import { Button, Modal } from "flowbite-react";
import { ReactNode, useContext, useEffect } from "react";

interface Term {
  id: number | string;
  title?: string;
  description?: string;
}

interface UseTermsProps extends Term {
  list?: {
    id: number | string;
    title: string;
    description: string;
  }[];
  title: string;
  id: number | string;
  children: ReactNode;
}

export function UseTermsModal({ list, title, id, children }: UseTermsProps) {
  const { props, setId } = useContext(TermsModalContext);

  useEffect(() => {
    setId(id ?? id);
  }, [id, setId]);

  return (
    <>
      {children}
      <Modal
        show={props.openModal === id}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            {list?.map((term) => (
              <p
                className="text-base leading-relaxed text-gray-500 dark:text-gray-400 "
                key={term.id}
              >
                <h2 className="text-gray-700">{term.title}</h2>
                <span className="whitespace-pre-line">{term.description}</span>
              </p>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
