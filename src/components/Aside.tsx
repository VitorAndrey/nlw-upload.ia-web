import { Wand2 } from "lucide-react";

import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Slider } from "./ui/slider";
import { VideoInputForm } from "./VideoInputForm";
import { PromptSelect } from "./PromptSelect";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

export function Aside() {
  const {
    selectedTemperature,
    handleSelectedTemperature,
    handleSubmit,
    isLoading,
  } = useContext(GlobalContext);

  return (
    <aside className="w-80 space-y-6">
      <VideoInputForm />

      <Separator />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label>Prompt</Label>
          <PromptSelect />
        </div>

        <div className="space-y-2">
          <Label>Modelo</Label>
          <Select disabled defaultValue="gpt3.5">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground italic">
            Você poderá customizar essa opção em breve
          </p>
        </div>

        <Separator />

        <div className="space-y-4">
          <Label>Temperatura</Label>

          <Slider
            min={0}
            max={1}
            step={0.1}
            value={[selectedTemperature]}
            onValueChange={(value) => handleSelectedTemperature(value[0])}
          />

          <p className="text-xs text-muted-foreground italic leading-relaxed">
            Valores mais altos tendem a deixar o resultado mais criativo, porém
            mais suscetível a erros.
          </p>
        </div>

        <Separator />

        <Button disabled={isLoading} type="submit" className="w-full">
          Executar <Wand2 className="w-4 h-4 ml-2" />
        </Button>
      </form>
    </aside>
  );
}
