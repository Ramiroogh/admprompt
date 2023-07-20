import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link de React Router

const Sidebar = () => {
    return (
        <aside className="sidebar flex flex-col">
        <div className="flex flex-col gap-5 justify-between">
            <div>
            <ul className="flex flex-col gap-5">
                <li className="flex gap-5">
                <Link to="/buscar" className="flex gap-5">
                    <img src="/icons/buscar.svg" alt="Buscar Icon" width="24" height="24" />
                    <p>Buscar</p>
                </Link>
                </li>

                <li className="flex gap-5">
                <Link to="/misprompt" className="flex gap-5">
                    <img src="/icons/almacen.svg" alt="Mis Prompt Icon" width="24" height="24" />
                    <p>Mis Prompt</p>
                </Link>
                </li>

                <li className="flex gap-5">
                <Link to="/guardar" className="flex gap-5">
                    <img src="/icons/guardar.svg" alt="Guardar Icon" width="24" height="24" />
                    <p>Guardar</p>
                </Link>
                </li>

                <li className="flex gap-5">
                <Link to="/configuracion" className="flex gap-5">
                    <img src="/icons/config.svg" alt="Configuracion Icon" width="24" height="24" />
                    <p>Configuracion</p>
                </Link>
                </li>
            </ul>
            </div>

            <div>
            <h2>Premium</h2>
            <p>Terminos y Condiciones</p>

            <div>
                <p>Tema</p>
                <button>change</button>
            </div>
            </div>
        </div>
        </aside>
    );
};

export default Sidebar;
