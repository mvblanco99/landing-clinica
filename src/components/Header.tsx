import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <div className="w-full shadow-lg flex justify-between mb-6 bg-gray-50">
      <div className="lg:w-[1280px] max-w-[1280px] mx-auto flex items-center justify-between p-2">
        <div className="flex items-center">
          <a
            href="#"
            className="flex items-center text-[20px] font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-20 h-20 mr-2" src={Logo} alt="logo" />
            Clínica de Integración Medica “INMECA”, C.A
          </a>
        </div>
        <div className="border-2 border-orange-50">
          <ul className="flex gap-x-6 text-[20px] font-semibold">
            <li className="cursor-pointer">
              <a href="#inicio">Inicio</a>
            </li>
            <li className="cursor-pointer">
              <a href="#quienes-somos">Quiénes somos</a>
            </li>
            <li className="cursor-pointer">
              <a href="#contactenos">Contáctenos</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
