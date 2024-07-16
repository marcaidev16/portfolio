import me2 from "@/assets/me2.jpg";
import { H1 } from "@/app/components/ui/H1";
import { H2 } from "@/app/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: "Conoce más sobre Marc Bau y su trabajo.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Sobre mí</H1>
      <section className="space-y-3">
        <H2>¿Quién soy?</H2>
        <p>
          Mi nombre es Marc Bau y soy un estudiante de Ingeniería Telemática de Valencia, España. Soy autodidacta y apasionado por la inteligencia artificial (IA) y la tecnología.
        </p>
        <p>
          Esta página web es una prueba para Mercedes de NTTData para demostrar mis habilidades en IA generativa, incrustación de vectores y creación de chatbots personalizados.
        </p>
        <p>
  Puedes saber más sobre mi carrera profesional en mi perfil de <Link href="https://www.linkedin.com/in/marc-bau-benavent/" target="_blank"><u>LinkedIn</u></Link>.
</p>

      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Habilidades</H2>
        <p>
          A lo largo de mi trayectoria, he desarrollado habilidades clave en la creación de chatbots personalizados utilizando técnicas avanzadas de Recuperación de Información Generativa (RAG).
        </p>
        <p>
          Aunque no tengo un título específico en IA, mi capacidad para aprender de forma autónoma me ha permitido dominar herramientas y tecnologías clave en este campo, como Python y la API de openai, asi como otros modelos LLM open source.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Proyectos Recientes</H2>
        <p>
          Recientemente, he trabajado en proyectos que implican la creación de chatbots que pueden integrarse en diversas plataformas, proporcionando respuestas precisas y contextuales basadas en un contexto, como se puede ver en este proyecto.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Aficiones</H2>
        <p>
          En mi tiempo libre, disfruto pasar tiempo con mi familia, especialmente con mi hermana y mi sobrino. También me gusta salir a pasear por Valencia.
        </p>
        <Image
          src={me2}
          alt="Mi foto"
          className="rounded-md"
        />
      </section>
    </section>
  );
}
