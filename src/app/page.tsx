import { CaseSuccess } from "./components/caseSuccess";
import { FormulaPotential } from "./components/formula-potential";
import { Hero } from "./components/hero";
import { Products } from "./components/products";
import { QuestionsFrequently } from "./components/questionsFrequently";
export default function Home() {
  return (
    <main className="min-w-full">
      <Hero />
      <FormulaPotential />
      <Products />
      <QuestionsFrequently />
      <CaseSuccess />
    </main>
  );
}
