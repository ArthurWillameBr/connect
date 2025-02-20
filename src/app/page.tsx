import { Button } from "./components/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Button>
        Enviar
        <ArrowRight className="w-6 h-6" />
      </Button>
    </main>
  );
}
