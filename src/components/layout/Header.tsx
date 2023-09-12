import { Github } from "lucide-react";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function Header() {
  return (
    <header className="px-6 py-3 flex items-center justify-between border-b">
      <h1 className="text-xl font-bold">upload.id</h1>

      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">
          Desenvolvido com 💜 no NWL da Rocketseat
        </span>

        <Separator orientation="vertical" className="h-6" />

        <Button>
          <Github className="w-4 h-4 mr-2" />
          Github
        </Button>
      </div>
    </header>
  );
}
