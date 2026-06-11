import WeatherImageMobile from '../assets/images/weathermobile.png'
import WeatherImageDesktop from '../assets/images/weatherapp.png'
import ProjectTemplate from "./ProjectTemplate";
import { FaReact } from 'react-icons/fa';
import { BsTypescript } from 'react-icons/bs';
import { RiTailwindCssFill } from 'react-icons/ri';

const WeatherApp = () => {


    return (

        <ProjectTemplate title='Weather App'
            mobileImage={WeatherImageMobile}
            desktopImage={WeatherImageDesktop}
            projectLink={"https://weather-api-five-lyart.vercel.app/"}
            about='O projeto consome dados da Open-Meteo API e da Geocoding API para localizar cidades e exibir informações climáticas em tempo real. O design é responsivo, garantindo uma experiência consistente em dispositivos móveis e desktops.'
            challenges=' Os principais desafios foram implementar requisições assíncronas encadeadas para obter a localização da cidade e, posteriormente, os dados climáticos, compreender a estrutura dos dados retornados pelas APIs, trabalhar com renderização condicional enquanto as informações eram carregadas e adaptar a interface para diferentes tamanhos de tela.'
            learnings='Durante o desenvolvimento, aprofundei meus conhecimentos em consumo de APIs REST, utilização de async/await para operações assíncronas, gerenciamento de estado com React, componentização e manipulação de dados recebidos de serviços externos.'
            technologies={ <>
            <span className="text-[#61DAFB]">
                <FaReact />
            </span>

            <span className="text-[#3178C6]">
                <BsTypescript />
            </span>

            <span className="text-[#06B6D4]">
                <RiTailwindCssFill />
            </span>
        </>} />

    )
}

export default WeatherApp