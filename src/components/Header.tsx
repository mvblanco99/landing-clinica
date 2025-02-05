import React from "react";

const Header = () => {
  return (
    <div className="w-full shadow-lg flex justify-between mb-6 bg-gray-50">
      <div className="lg:w-[1280px] max-w-[1280px] mx-auto flex items-center justify-between p-2">
        <div className="flex items-center">
          <a
            href="#"
            className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-20 h-20 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Clínica Frontend
          </a>
        </div>
        <div className="border-2 border-orange-50">
          <ul className="flex gap-x-6 text-2xl font-semibold">
            <li className="cursor-pointer">Inicio</li>
            <li className="cursor-pointer">Quiénes somos</li>
            <li className="cursor-pointer">Contáctenos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
