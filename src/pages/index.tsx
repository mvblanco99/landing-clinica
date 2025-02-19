import Header from "../components/Header";
import FotoClinica from "../assets/Foto_Clinica.jpg";
import {
  FcBullish,
  FcCollaboration,
  FcCollect,
  FcEngineering,
  FcProcess,
} from "react-icons/fc";
const Main = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full h-1 shadow-sm bg-blue-500"></div>
      <Header />
      <div className="w-full lg:w-[1024px] max-w-[1280px]">
        <section id="inicio" className="w-full">
          <div className="flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Bienvenido a la Clínica de Integración Medica “INMECA”, C.A
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-300">
              La clínica que se preocupa por tu salud
            </p>
          </div>
        </section>

        <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
          <img
            src={FotoClinica}
            alt="Banner Image"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className="sm:text-4xl text-2xl font-bold mb-6">
              Conoce Nuestra Clínica
            </h2>
            <p className="sm:text-lg text-base text-center text-gray-200">
              Descubre nuestros servicios y cómo podemos ayudarte a mejorar tu
              salud. ¡Agenda tu cita hoy mismo!
            </p>

            <button
              type="button"
              className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
              onClick={() => (window.location.href = "#")}
            >
              Agendar Cita
            </button>
          </div>
        </div>

        <section
          id="quienes-somos"
          className="w-full flex flex-col items-center justify-center p-6 mt-4  rounded-md"
        >
          <div className="w-full lg:w-[1024px] max-w-[1280px] text-center px-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              La Clínica de Integración Medica “INMECA”, C.A
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-300 mt-4 text-justify">
              La Clínica de Integración Medica “INMECA”, C.A; es una
              organización privada, heredada del antiguo Centro Clínico del
              Este, fundado en la década de los noventa. Con esta nueva razón
              social, inicia operaciones en el año 2006, contando con un equipo
              de profesionales calificados encargados de atender y mejorar la
              salud del usuario, a través de una atención eficiente y
              calificada.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-300 mt-4 text-justify">
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
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center flex justify-center gap-x-2">
              <div className="flex justify-center text-4xl">
                <FcCollect />
              </div>
              Objetivo General
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-300 mt-4 px-8">
              Consolidar el liderazgo como el centro de salud líder en la región
              oriental, ofreciendo servicios médicos de alta calidad, de manera
              oportuna y accesible, en procura de la salud, bienestar y
              seguridad de nuestros usuarios, a través de la combinación de
              tecnología y talento humano profesional, ético y responsable.
            </p>
          </div>
        </section>

        <section className="w-full flex flex-col items-center justify-center px-8 py-6 bg-gray-100 dark:bg-gray-800 rounded-md">
          <div className="w-full lg:w-[1024px] max-w-[1280px] text-center p-2">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Objetivos Institucionales
            </h2>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-4 text-lg text-gray-500 dark:text-gray-300 mt-4">
              <div className="flex flex-col items-center justify-center px-4 py-4 bg-white dark:bg-gray-700 shadow-lg rounded-lg">
                <li className="p-4 rounded-lg">
                  <h3 className="text-4xl text-center font-semibold text-gray-900 dark:text-white flex justify-center p-2">
                    <FcBullish />
                  </h3>
                  <p className="text-center text-gray-700 dark:text-gray-300">
                    Garantizar una gestión eficiente y ética de los recursos
                    humanos, materiales y financieros, asegurando el
                    cumplimiento de políticas y normativas que fortalezcan la
                    calidad del servicio y la seguridad del paciente.
                  </p>
                </li>
              </div>
              <div className="flex flex-col items-center justify-center px-4 py-4 bg-white dark:bg-gray-700 shadow-lg rounded-lg">
                <li className="p-4 rounded-lg">
                  <h3 className="text-4xl font-semibold text-gray-900 dark:text-white flex justify-center">
                    <FcCollaboration />
                  </h3>
                  <p className="text-center text-gray-700 dark:text-gray-300">
                    Fomentar una cultura de excelencia y atención humanizada,
                    priorizando la innovación, la eficiencia y la seguridad del
                    paciente para brindar un servicio diferenciado y de alta
                    calidad.
                  </p>
                </li>
              </div>
              <div className="flex flex-col items-center justify-center px-4 py-4 bg-white dark:bg-gray-700 shadow-lg rounded-lg">
                <li className="p-4 rounded-lg">
                  <h3 className="text-4xl font-semibold text-gray-900 dark:text-white flex justify-center">
                    <FcEngineering />
                  </h3>
                  <p className="text-center text-gray-700 dark:text-gray-300">
                    Desarrollar infraestructura, tecnología y procesos
                    administrativos que fortalezcan el liderazgo de la clínica
                    en la región oriental, asegurando la prestación de servicios
                    médicos de vanguardia con un enfoque en calidad y
                    accesibilidad.
                  </p>
                </li>
              </div>
              <div className="flex flex-col items-center justify-center px-4 py-4 bg-white dark:bg-gray-700 shadow-lg rounded-lg">
                <li className="p-4 rounded-lg">
                  <h3 className="text-4xl font-semibold text-gray-900 dark:text-white flex justify-center">
                    <FcProcess />
                  </h3>
                  <p className="text-center text-gray-700 dark:text-gray-300">
                    Optimizar continuamente la estructura organizacional para
                    garantizar el desarrollo profesional de nuestro equipo,
                    promoviendo una gestión eficiente que contribuya a la
                    excelencia médica y la seguridad de nuestros pacientes.
                  </p>
                </li>
              </div>
            </ul>
          </div>
        </section>

        <div className="w-full grid grid-cols-12 gap-4 my-4">
          <div className="col-span-12 md:col-span-3 flex flex-col items-center justify-start px-2 py-2 bg-white dark:bg-gray-700 shadow-lg rounded-lg hover:bg-gray-50 border-2 border-gray-100">
            <li className="p-4 rounded-lg list-none flex flex-col gap-y-2">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Nuestros servicios
              </h2>
              <p className="text-md text-gray-500 dark:text-gray-300">
                Conoce los servicios que ofrecemos en la Clínica de Integración
                Medica “INMECA”, C.A
              </p>
            </li>
          </div>

          <div className="col-span-12 md:col-span-3 flex flex-col items-center justify-start px-2 py-4 bg-white dark:bg-gray-700 shadow-lg rounded-lg hover:bg-gray-50 border-2 border-gray-100">
            <li className="p-4 rounded-lg list-none flex flex-col gap-y-2">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Contáctenos
              </h2>
              <p className="text-md text-gray-500 dark:text-gray-300">
                Para más información, contáctenos a través de nuestro correo
                electrónico: contacto@clinicafrontend.com o llámenos al
                123-456-7890.
              </p>
            </li>
          </div>

          <div className="col-span-12 md:col-span-3 flex flex-col items-center justify-start px-2 py-4 bg-white dark:bg-gray-700 shadow-lg rounded-lg hover:bg-gray-50 border-2 border-gray-100">
            <li className="p-4 rounded-lg list-none flex flex-col gap-y-2">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Ubicación
              </h2>
              <p className="text-md text-gray-500 dark:text-gray-300">
                Av. Andrés Eloy Blanco, quinta 66, Sector Las Avenidas
              </p>
            </li>
          </div>

          <div className="col-span-12 md:col-span-3 flex flex-col items-center justify-start px-2 py-4 bg-white dark:bg-gray-700 shadow-lg rounded-lg hover:bg-gray-50 border-2 border-gray-100">
            <li className="p-4 rounded-lg list-none flex flex-col gap-y-2">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Seguros Afiliados
              </h2>
              <ul className="text-md text-gray-500 dark:text-gray-300 flex flex-col justify-center items-start">
                <li className="font-medium text-md list-disc">
                  Seguro Miranda
                </li>
                <li className="font-medium text-md list-disc">Seguro Mapfre</li>
                <li className="font-medium text-md list-disc">Seniat</li>
                <li className="font-medium text-md list-disc">
                  La Internacional (Navinca)
                </li>
              </ul>
            </li>
          </div>
        </div>
      </div>
      <footer className="w-full flex flex-col items-center justify-center p-6 bg-gray-200 dark:bg-gray-900">
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-300">
            © {new Date().getFullYear()} Clínica de Integración Medica “INMECA”,
            C.A. Todos los derechos reservados.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">//</p>
        </div>
      </footer>
    </div>
  );
};

export default Main;

// <section className="w-full flex flex-col lg:flex-row items-start justify-center p-6">
//   <div className="w-full lg:w-1/2 p-4 bg-gray-100 dark:bg-gray-800">
//     <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
//       Misión
//     </h2>
//     <p className="text-lg text-gray-500 dark:text-gray-300 mt-4">
//       Somos un equipo multidisciplinario de profesionales altamente
//       capacitados, guiados por una profunda vocación de servicio y
//       compromiso con la excelencia. Brindamos atención médica integral,
//       ofreciendo diagnósticos precisos y tratamientos oportunos,
//       respaldados por tecnología de vanguardia y protocolos clínicos
//       actualizados. Prestamos nuestros servicios con eficiencia, calidez
//       y accesibilidad, priorizando el bienestar y la satisfacción de
//       nuestros pacientes, sus familias y la comunidad. A través de
//       nuestra labor, impulsamos el desarrollo del sector salud y
//       avanzamos hacia la consolidación de nuestro liderazgo en la
//       región.
//     </p>
//   </div>
//   <div className="w-full lg:w-1/2 p-4">
//     <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
//       Visión
//     </h2>
//     <p className="text-lg text-gray-500 dark:text-gray-300 mt-4">
//       Consolidarnos como el centro de salud líder en la región oriental
//       del país, reconocido por nuestra excelencia en la atención médica
//       y la calidad en el servicio. Distinguiéndonos por un firme
//       compromiso con la ética profesional, la responsabilidad y un
//       equipo altamente capacitado, dedicado a garantizar el bienestar y
//       la seguridad de nuestros pacientes.
//     </p>
//   </div>
// </section>
