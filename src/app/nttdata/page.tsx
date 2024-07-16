import { H1 } from "@/app/components/ui/H1";
import { H2 } from "@/app/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import nttdataLogo from "@/assets/nttdataLogo.jpg"; // Asegúrate de tener una imagen de NTT DATA en la carpeta assets

export const metadata: Metadata = {
  title: "NTT DATA",
  description: "Descubre más sobre NTT DATA y su impacto en la transformación digital.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>NTT DATA</H1>
      <section className="space-y-3">
        <Image
          src={nttdataLogo}
          alt="NTT DATA Logo"
          className="rounded-md"
        />
        <H2>¿Qué es NTT DATA?</H2>
        <p>
          <Link href="https://es.nttdata.com/">NTT DATA</Link> es una multinacional especializada en servicios de consultoría tecnológica con sede en Tokio. Con una trayectoria de 150 años, somos una de las 10 primeras compañías de servicios IT más grandes del mundo, presentes en 50 países y con más de 190,000 empleados. Nos dedicamos a transformar organizaciones y a mejorar la vida de las personas a través de tecnologías emergentes y consultoría estratégica.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Habilidades y Capacidades</H2>
        <p>
          En NTT DATA, ayudamos a nuestros clientes a superar los retos actuales y futuros mediante una combinación única de consultoría estratégica, operativa y tecnológica. Nuestras capacidades incluyen:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Inteligencia Artificial Generativa:</strong> Implantamos soluciones de IA generativa para mejorar la productividad, como lo demostramos en el caso de éxito con <Link href="https://es.nttdata.com/insights/case-studies/inteligencia-artificial-generativa-para-impulsar-la-productividad-en-masorange">MASORANGE</Link> y la implementación de <Link href="https://www.microsoft.com/es-es/microsoft-copilot">Copilot de Microsoft</Link>.
          </li>
          <li>
            <strong>Consultoría Estratégica:</strong> Apoyamos a las empresas en su viaje de transformación digital con un enfoque holístico que integra conocimientos de negocio y experiencia tecnológica específica de cada sector.
          </li>
          <li>
            <strong>Ciberseguridad:</strong> Ofrecemos una amplia gama de servicios de seguridad, desde la consultoría estratégica hasta la monitorización y gestión de incidentes.
          </li>
          <li>
            <strong>Transformación Basada en Datos:</strong> Ayudamos a las organizaciones a extraer valor de sus datos mediante estrategias de datos y analítica avanzada.
          </li>
        </ul>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Proyectos Recientes</H2>
        <p>
          Algunos de nuestros proyectos recientes incluyen:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <strong><Link href="https://es.nttdata.com/insights/case-studies/inteligencia-artificial-generativa-para-impulsar-la-productividad-en-masorange">MASORANGE:</Link></strong> Implementación de IA generativa para impulsar la productividad.
          </li>
          <li>
            <strong><Link href="https://es.nttdata.com/newsfolder/la-comunidad-de-madrid-firma-con-ntt-data-un-acuerdo-para-impulsar-la-ia-en-la-atencion-al-ciudadano">Comunidad de Madrid:</Link></strong> Acuerdo para impulsar la inteligencia artificial en la atención al ciudadano.
          </li>
          <li>
            <strong><Link href="https://es.nttdata.com/insights/blog/ntt-data-y-banco-sabadell-como-transformar-la-gestion-de-rr-hh-sin-perder-de-vista-a-las-personas">Banco Sabadell:</Link></strong> Transformación de la gestión de RR.HH. mediante tecnologías en la nube.
          </li>
        </ul>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Compromiso con la Sostenibilidad</H2>
        <p>
          <Link href="https://es.nttdata.com/esg">NTT DATA</Link> está comprometida con la construcción de una sociedad sostenible, apoyando a nuestros clientes en su transformación digital para lograr un crecimiento sostenible y mejorar la calidad de vida de las personas.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Oportunidades de Crecimiento</H2>
        <p>
          En <Link href="https://es.nttdata.com/">NTT DATA</Link>, ofrecemos un entorno flexible, innovador y multicultural. Contamos con planes de carrera adaptados y oportunidades de crecimiento en el sector tecnológico. Únete a nuestra comunidad de THE DIGITAL LOVERS y desarrolla tu carrera en un entorno colaborativo y de vanguardia.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Últimas Noticias</H2>
        <ul className="list-disc pl-5">
          <li>
            <strong><Link href="https://es.nttdata.com/newsfolder/ntt-data-es-nombrado-lider-en-idc-marketscape-en-servicios-profesionales-en-la-nube-a-nivel-mundial">IDC MarketScape:</Link></strong> NTT DATA nombrado líder en servicios profesionales en la nube a nivel mundial.
          </li>
          <li>
            <strong><Link href="https://es.nttdata.com/newsfolder/el-gobierno-de-las-islas-baleares-impulsa-el-canal-digital-en-sus-procedimientos">Gobierno de las Islas Baleares:</Link></strong> Impulso del canal digital en sus procedimientos.
          </li>
          <li>
            <strong><Link href="https://es.nttdata.com/alliances/microsoft">Colaboración con Microsoft:</Link></strong> Aceleración del despliegue y adopción de la IA generativa en entornos industriales.
          </li>
        </ul>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Nuestra Historia</H2>
        <p>
          Desde la creación del primer servicio de telégrafo en Japón, hemos evolucionado para convertirnos en un líder global en servicios IT, acompañando a nuestros clientes en su transformación digital y proporcionando soluciones tecnológicas innovadoras.
        </p>
      </section>
    </section>
  );
}
