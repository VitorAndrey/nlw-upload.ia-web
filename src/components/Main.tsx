import { Aside } from "./Aside";
import { PromptSection } from "./PromptSection";

export function Main() {
  return (
    <main className="flex-1 p-6 flex gap-6">
      <PromptSection />

      <Aside />
    </main>
  );
}
