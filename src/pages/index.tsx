import React from "react";
import Header from "../components/Header";
import image from "../assets/image.jpg"; // Update the path to the correct image file

const Main = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full h-2 shadow-sm bg-blue-500"></div>
      <Header />
      <div className="w-full lg:w-[1024px] max-w-[1280px]">
        <section id="inicio" className="w-full border-2 border-gray-50">
          <div className="flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Bienvenido a la Clínica de Integración Medica “INMECA”, C.A
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-300">
              La clínica que se preocupa por tu salud
            </p>
          </div>
        </section>
        <section className="w-full flex justify-center">
          <div className="w-full h-full">
            <img
              src={image}
              alt="Banner"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section
          id="quienes-somos"
          className="w-full flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-800"
        >
          <div className="w-full lg:w-[1024px] max-w-[1280px] text-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              La Clínica de Integración Medica “INMECA”, C.A
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-300 mt-4">
              La Clínica de Integración Medica “INMECA”, C.A; es una
              organización privada, heredada del antiguo Centro Clínico del
              Este, fundado en la década de los noventa. Con esta nueva razón
              social, inicia operaciones en el año 2006, contando con un equipo
              de profesionales calificados encargados de atender y mejorar la
              salud del usuario, a través de una atención eficiente y
              calificada.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-300 mt-4">
              Como empresa ofrecemos un servicio integral de salud en un entorno
              en el que priva la atención personalizada, con el soporte de
              tecnologías avanzadas en cada una de las áreas de atención al
              usuario. INMECA se identifica por su imagen de servicio
              sobresaliente y por la atención personalizada ofrecida a cada
              usuario, con una estrategia de atención médica de calidad.
            </p>
          </div>
        </section>

        <section className="w-full flex flex-col items-center justify-center p-6">
          <div className="w-full lg:w-[1024px] max-w-[1280px] text-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Visión
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-300">
              Consolidarnos como el centro de salud líder en la región oriental
              del país, reconocido por nuestra excelencia en la atención médica
              y la calidad en el servicio. Distinguiéndonos por un firme
              compromiso con la ética profesional, la responsabilidad y un
              equipo altamente capacitado, dedicado a garantizar el bienestar y
              la seguridad de nuestros pacientes.
            </p>
          </div>
        </section>

        <section className="w-full flex flex-col items-center justify-center p-6 px-4 bg-gray-100 dark:bg-gray-800">
          <div className="w-full lg:w-[1024px] max-w-[1280px] text-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Misión
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-300 mt-4">
              Somos un equipo multidisciplinario de profesionales altamente
              capacitados, guiados por una profunda vocación de servicio y
              compromiso con la excelencia. Brindamos atención médica integral,
              ofreciendo diagnósticos precisos y tratamientos oportunos,
              respaldados por tecnología de vanguardia y protocolos clínicos
              actualizados. Prestamos nuestros servicios con eficiencia, calidez
              y accesibilidad, priorizando el bienestar y la satisfacción de
              nuestros pacientes, sus familias y la comunidad. A través de
              nuestra labor, impulsamos el desarrollo del sector salud y
              avanzamos hacia la consolidación de nuestro liderazgo en la
              región.
            </p>
          </div>
        </section>

        <section className="w-full flex flex-col items-center justify-center p-6 px-4">
          <div className="w-full lg:w-[1024px] max-w-[1280px] text-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Nuestros servicios
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-300">
              Conoce los servicios que ofrecemos en la Clínica de Integración
              Medica “INMECA”, C.A
            </p>
          </div>
        </section>

        <section className="w-full flex flex-col items-center justify-center p-6 px-4 bg-gray-100 dark:bg-gray-800">
          <div className="w-full lg:w-[1024px] max-w-[1280px] text-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Contáctenos
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-300 mt-4">
              Para más información, contáctenos a través de nuestro correo
              electrónico: contacto@clinicafrontend.com o llámenos al
              123-456-7890.
            </p>
          </div>
        </section>

        <section className="w-full flex flex-col lg:flex-row items-center justify-center p-6">
          <div className="w-full lg:w-1/2 p-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Ubicación
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-300">
              Av. Andrés Eloy Blanco, quinta 66, Sector Las Avenidas
            </p>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Seguros Afiliados
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-300 mt-4">
              Seguro Miranda, Seguro Mapfre, Seniat, La Internacional (Navinca)
            </p>
          </div>
        </section>
      </div>
      <footer className="w-full flex flex-col items-center justify-center p-6 bg-gray-200 dark:bg-gray-900">
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-300">
            © {new Date().getFullYear()} Clínica de Integración Medica “INMECA”,
            C.A. Todos los derechos reservados.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
            Desarrollado por Manuel Blanco
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Main;
