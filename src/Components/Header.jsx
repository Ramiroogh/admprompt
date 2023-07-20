import { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex header justify-between	px-5 content-center	items-center bg-white">
        <Link to='/'>
        <img
          width="48"
          height="48"
          src="/promptAdm_logo.svg"
        />
        </Link>

        <div className='flex gap-5'>
          <Link href="/misprompt">Dashboard</Link>
          <Link href="#">Tutorial</Link>
          <a href="#" onClick={openModal}>Contacto</a>
          <Link href="#">Autor</Link>
        </div>

        <img
          width="48"
          height="48"
          src="/menu_hamburguer.svg"
        />
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6">

            <div className='flex justify-between items-center'>
            <h2 className="text-xl font-bold mb-4">Contacto</h2>
            <button onClick={closeModal}><img src="/icons/close.svg" width="32" height="32"/></button>
            </div>

            {/* Formulario del modal */}
            <form className="space-y-4">
              <div>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" className="w-full border border-gray-300 rounded-md p-2" />
              </div>

              <div>
                <label htmlFor="subject">Asunto:</label>
                <input type="text" id="subject" className="w-full border border-gray-300 rounded-md p-2" />
              </div>

              <div>
                <label htmlFor="message">Mensaje:</label>
                <textarea id="message" className="w-full border border-gray-300 rounded-md p-2" />
              </div>

              <div className="text-right">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;