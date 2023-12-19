import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 w-full h-16">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-lg font-bold">Mi Sitio</a>
        <div className="space-x-4">
          <a href="#" className="text-white">Inicio</a>
          <a href="#" className="text-white">Acerca de</a>
          <a href="#" className="text-white">Servicios</a>
          <a href="#" className="text-white">Contacto</a>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
