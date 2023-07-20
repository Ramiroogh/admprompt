import React, { useEffect, useRef } from 'react'
import Card from '../src/Components/Card'
import ItemInfo from '../src/Components/ItemInfo'
import Header from '../src/Components/Header'
import Typed from 'typed.js';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css'

const Home = () => {

  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Sos un <strong>PRIVILEGIADO</strong>, estas frente a esta HERRAMIENTA que te ayudará en la Nueva Era, seras más eficiente y podrás <i>Aterrizar tus ideas, Categorizarlas y Almacenarlas.</i>' ,'Tus Prompts con vos a cualquier parte del Mundo!, tu Productividad sera Incrementada segun tu Area de Trabajo y tus Objetivos<br>Crea tu cuenta GRATIS y sincroniza tus Prompt.', '<strong>No importa si eres un escritor, diseñador, emprendedor o simplemente alguien que busca estimular su creatividad,</strong> Prompts ADM te ofrece una plataforma intuitiva e interfaz para documentar, categorizar y acceder a tus prompts de forma rápida y sencilla.', 'Olvidate de los blocs de notas o documentos desordenados, evita las ideas perdidas en el camino. Con Prompts ADM, cada idea valiosa tiene su lugar y propósito esperado.'],
      typeSpeed: 0,
      backSpeed: 7,
      cursorChar: '_',
      shuffle: true,
      smartBackspace: false,
      loop: true,
      backDelay: 5000,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);



  return (
    <>
    <Header />
      <div style={{ backgroundColor: 'var(--bg-primary-color)'}} className='p-5'>

        <div className=' flex justify-between w-full  items-start gap-20 '>

          <div className='flex flex-col gap-7 w-1/2 h-72	justify-center text-left		'>
            <h1 className='text-2xl'>Administrador de Prompts:
              Organiza tus ideas y potencia tu
              productividad
            </h1>
            <p>"Disfruta de la libertad de tener tus prompts disponibles en cualquier dispositivo, para no perder nunca una idea brillante, y trabajar en cualquier lugar".</p>
            <button style={{ backgroundColor: 'var(--primary-color)'}} className='w-60 h-22 text-white rounded-md shadow-md'>Comenzar</button>
          </div>

          <img
            src=".././public/laptop_hero.png"
            alt="Descripción de la imagen"
            width={300}
            height={300}
          />
        </div>
      </div>

      <div className='flex flex-col justify-center items-center gap-5 p-10 bg-white'>
        <img
          src=".././public/arrow.svg"
          alt="Arrow"
          width={50}
          height={50}
        />

        <div className='flex gap-5 justify-start'>
          <img
            className=''
            src=".././public/chatgpt_logo.svg"
            alt="Descripción de la imagen"
            width={100}
            height={100}
          />
          <div className='flex flex-col gap-2'>
            <h2 className='text-2xl'>¡Bienvenido a la <span className='text-teal-600'>Cuarta revolución industrial</span>, donde la creatividad y la productividad se encuentran en un punto de inflexión!</h2>
              <div className="App p-3">
                <span ref={el} />
              </div>
          </div>
      </div>
      </div>
      
      <div className='flex flex-col justify-center items-center p-10 w-full gap-10' style={{ backgroundColor: 'var(--bg-primary-color)'}}>
        <h2 className='text-4xl'>Beneficios</h2>

        <div className='flex justify-center gap-10'>
          <Card
            number={1} numberColor={{ color: 'violet' }}
            title="Productividad"
            description="Relevamiento y formalización de los
            procesos de dirección Mantén todos tus prompts organizados en un solo lugar, evitando la pérdida de ideas y el tiempo invertido en buscarlas"
            descriptionColor={{color : '#A9A9A9'}}
          />

          <Card
            number={2} numberColor={{ color: 'orange' }}
            title="Organización Eficiente"
            description="Difsión Crea categorías, etiquetas personalizadas, clasifica tus prompts según temas o métodos específicos, facilitando la búsqueda y la gestión de tus ideas."
            descriptionColor={{color : '#A9A9A9'}}
          />

          <Card
            number={3} numberColor={{ color: 'yellow' }}
            title="Flexibilidad"
            description="Accede a tus prompts desde cualquier dispositivo y en cualquier momento, lo que te permite mantener tu creatividad en movimiento sin importar dónde te encuentres."
            descriptionColor={{color : '#A9A9A9'}}
          />

          <Card
            gap={true}
            number={4} numberColor={{ color: 'green' }}
            title="Gratis"
            description="¡El uso de la aplicacion y algunas funcionalidades son completamente gratuitas, registrate GRATIS!"
            descriptionColor={{color : '#A9A9A9'}}
          />
        
        </div>
      </div>

      <div className='flex flex-col justify-center items-center p-10 w-full gap-10' style={{ backgroundColor: 'white'}}>
        <p>¿Que podras Realizar?</p>
        <h2 className='text-4xl'>Herramientas</h2>

        <div className='flex flex-col justify-center items-center w-full gap-5'>

        <div className='flex justify-center items-center gap-x-20	'>
          <ItemInfo
            image="/images/icons-save-svgrepo-com.svg"
            title="Guardar"
            description="Podras guardar tus prompts de la manera que quieras, por etiquetas o categorias, segun su respectivo Rubro."
          />
          <ItemInfo
            image="/images/category-svgrepo-com.svg"
            title="Categorizar"
            description="Podras crear tus propias categorias en base a tus necesidades, totalmente personalizable para mejorar el filtro de busqueda."
          />
        </div>
        <div className='flex justify-center items-center gap-x-20'>
          <ItemInfo
            image="/images/search-svgrepo-com.svg"
            title="Buscar"
            description="Encuentra tus prompts de manera rapida y efectiva, mediante filtro de busqueda."
          />
          <ItemInfo
            image="/images/doc-svgrepo-com.svg"
            title="Documentar"
            description="Documenta tus prompt, detallando su funcionamiento, o su uso especifico en un contexto en especifico."
          />
        </div>

        </div>

      </div>

    </>
  );
};

export default Home
