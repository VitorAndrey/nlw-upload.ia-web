import { FileVideo, Upload, Wand2 } from "lucide-react";

import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Separator } from "../ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Slider } from "../ui/slider";

export function Aside() {
  return (
    <aside className="w-80 space-y-6">
      <form className="space-y-6">
        <label
          htmlFor="video"
          className="flex border w-full rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
        >
          <FileVideo className="w-4 h-4" />
          Selecione um vídeo
        </label>

        <input type="file" id="video" accept="video/mp4" className="sr-only" />

        <Separator />

        <div className="space-y-2">
          <Label htmlFor="transcription_prompt">Prompt de transcrição</Label>
          <Textarea
            id="transcription_prompt"
            className="h-20 leading-relaxed resize-none"
            placeholder="Inclua palavras-chave mencionadas no vídeo separadas por (,)"
          />
        </div>

        <Button type="submit" className="w-full">
          Carregar vídeo
          <Upload className="w-4 h-4 ml-2" />
        </Button>
      </form>

      <Separator />

      <form className="space-y-6">
        <div className="space-y-2">
          <Label>Prompt</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione um prompt..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="title">Titulo do YouTube</SelectItem>
              <SelectItem value="description">Descrição do YouTube</SelectItem>
            </SelectContent>
          </Select>
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

          <Slider min={0} max={1} step={0.1} />

          <p className="text-xs text-muted-foreground italic leading-relaxed">
            Valores mais altos tendem a deixar o resultado mais criativo, porém
            mais suscetível a erros.
          </p>
        </div>

        <Separator />

        <Button type="submit" className="w-full">
          Executar <Wand2 className="w-4 h-4 ml-2" />
        </Button>
      </form>
    </aside>
  );
}
