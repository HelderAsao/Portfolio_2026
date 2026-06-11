import {  FaReact } from "react-icons/fa";
import { BsTypescript } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import CountryAppMobile from '../assets/images/countryappmobile.png'
import CountryappDesktop from '../assets/images/countryapp.png'
import ProjectTemplate from "./ProjectTemplate"

const CountryInfoApp = () => {

    return (
        

        <ProjectTemplate title='Country App'
            mobileImage={CountryAppMobile}
            desktopImage={CountryappDesktop}
            projectLink={"https://rest-countries-api-two-smoky.vercel.app/" }
            about='A aplicação conta com alternância entre tema claro e escuro, navegação entre páginas utilizando React Router e layout responsivo, proporcionando uma experiência consistente em dispositivos móveis, tablets e desktops.'

            challenges='Os principais desafios foram consumir dados de uma API externa, implementar rotas dinâmicas para navegação entre países, buscar e exibir automaticamente informações dos países vizinhos, criar um custom hook para centralizar a lógica de busca de dados e implementar o gerenciamento global de tema utilizando Context API. Também foi necessário trabalhar com tipagem utilizando TypeScript e estruturar uma interface responsiva com Tailwind CSS.'
            learnings=' Durante o desenvolvimento, aprofundei meus conhecimentos em consumo de APIs com Fetch API, gerenciamento de estado com React, utilização de Context API para compartilhamento global de dados, criação de Custom Hooks, navegação com React Router, tipagem de dados com TypeScript e construção de interfaces responsivas utilizando Tailwind CSS. Além disso, pratiquei a organização e reutilização de código em aplicações React.'
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
        </>} 
        />
    )
}

export default CountryInfoApp