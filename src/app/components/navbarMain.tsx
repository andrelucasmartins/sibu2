"use client";

interface NavbarMainProps {}

export const NavbarMain = (props: NavbarMainProps) => {
  return (
    <>
      <section className="bg-red-900  text-white py-4">
        <nav className="flex justify-between items-center gap-10 text-lg font-bold max-w-7xl mx-auto">
          <div>O melhor redutor de medidas!</div>
          <div>Frete Grátis Para Todo o Brasil!</div>
          <div>Satisfação Garantida</div>
        </nav>
      </section>
    </>
  );
};
