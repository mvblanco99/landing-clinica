import React from "react";
import Header from "../components/Header";
import image from "../assets/image.jpg"; // Update the path to the correct image file

const Main = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full h-2 shadow-sm bg-blue-500"></div>
      <Header />
      <div className="w-full lg:w-[1024px] max-w-[1280px]">
        <section className="w-full border-2 border-gray-50">
          <div className="flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-semibold text-gray-900 dark:text-white">
              Bienvenido a la Clínica Frontend
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

        <section className="w-full flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-800">
          <div className="w-full lg:w-[1024px] max-w-[1280px] text-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Nuestros Objetivos
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-300 mt-4">
              En la Clínica Frontend, nos comprometemos a brindar la mejor
              atención médica con un enfoque en la innovación y la tecnología.
              Nuestro objetivo es mejorar la salud y el bienestar de nuestros
              pacientes a través de servicios de alta calidad y un equipo de
              profesionales dedicados.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-300 mt-4">
              Trabajamos constantemente para mantenernos a la vanguardia en el
              campo de la medicina, utilizando las últimas herramientas y
              técnicas para ofrecer tratamientos efectivos y personalizados.
            </p>
          </div>
        </section>

        <section className="w-full flex flex-col items-center justify-center p-6">
          <div className="w-full lg:w-[1024px] max-w-[1280px] text-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Nuestros servicios
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-300">
              Conoce los servicios que ofrecemos en la Clínica Frontend
            </p>
          </div>
        </section>
      </div>
      <footer className="w-full flex flex-col items-center justify-center p-6 bg-gray-200 dark:bg-gray-900">
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-300">
            © {new Date().getFullYear()} Clínica Frontend. Todos los derechos
            reservados.
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
