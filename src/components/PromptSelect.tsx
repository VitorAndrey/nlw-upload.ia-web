import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { api } from "@/lib/axios";

type Prompt = {
  id: string;
  title: string;
  template: string;
};

export function PromptSelect() {
  const [prompts, setPrompts] = useState<Prompt[] | null>(null);
  const { handleSelectedPrompt } = useContext(GlobalContext);

  function handleConvertIdToPrompt(promptId: string) {
    const selectedPrompt = prompts?.find((prompt) => prompt.id === promptId);

    if (!selectedPrompt) {
      return;
    }

    handleSelectedPrompt(selectedPrompt.template);
  }

  useEffect(() => {
    api.get("/prompts").then((response) => {
      setPrompts(response.data);
    });
  }, []);

  return (
    <Select onValueChange={handleConvertIdToPrompt}>
      <SelectTrigger>
        <SelectValue placeholder="Selecione um prompt..." />
      </SelectTrigger>
      <SelectContent>
        {prompts?.map((prompt) => {
          return (
            <SelectItem key={prompt.id} value={prompt.id}>
              {prompt.title}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
