import me from "@/assets/me.png";
import { H1 } from "@/app/components/ui/H1";
import { H2 } from "@/app/components/ui/H2";
import { Bot } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Marc Bau - Mi AI Portfolio",
};

export default function Home() {
  return (
    <section className="space-y-16 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-1 py-8">
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <H1 className="text-center sm:text-start">Página de prueba para Mercedes👋</H1>
          <p className="text-center sm:text-start">
            Esta pagina sirve para validar mi experiencia en la IA generativa.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={me}
            alt="A photo of me"
            height={300}
            width={300}
            className="aspect-square rounded-full border-2 object-cover shadow-md dark:border-foreground"
          />
        </div>
      </section>
      <section className="space-y-3 text-center">
        <H2>Pregúntale al chatbot lo que quieras</H2>
        <p>
          Haz click en el icono <Bot className="inline pb-1" /> de la barra de arriba para activar el chat de IA. Puedes preguntarle cualquier cosa sobre mi y algo de NTTDATA (lo que he puesto en esta web).
        </p>
      </section>
      
    </section>
  );
}