import JokenpoMobile from '../assets/images/jokenpoMobile.png'
import JokenpoDesktop from '../assets/images/jokenpoDesktop.png'
import ProjectTemplate from "./ProjectTemplate";
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { IoLogoJavascript } from "react-icons/io5";

const Jokenpo = () => {


    return (

        <ProjectTemplate title='Jokenpo'
            mobileImage={JokenpoMobile}
            desktopImage={JokenpoDesktop}
            projectLink={"https://jokenpo-game-ruby.vercel.app/"}
           about='Jogo de Pedra, Papel e Tesoura desenvolvido em React e TypeScript como solução para um desafio do Frontend Mentor. A aplicação permite que o usuário jogue contra o computador, mantendo a pontuação da partida e oferecendo uma interface responsiva com animações e transições para proporcionar uma experiência agradável em dispositivos móveis e desktops.'
           challenges='Os principais desafios foram implementar a lógica do jogo para determinar o vencedor de cada rodada, organizar a aplicação em componentes reutilizáveis, criar um layout responsivo que se adaptasse a diferentes tamanhos de tela, posicionar corretamente os elementos utilizando Tailwind CSS e aplicar animações para destacar o vencedor da partida.'
           learnings='Durante o desenvolvimento, aprofundei meus conhecimentos em React, TypeScript e Tailwind CSS, praticando componentização, gerenciamento de estado com useState, renderização condicional, tipagem de propriedades, reutilização de componentes e organização do código para torná-lo mais legível e de fácil manutenção.'
            technologies={ <>
            <span className="text-[#61DAFB]">
                <FaReact />
            </span>

            <span className="text-[#F7DF1E]">
                <IoLogoJavascript />
            </span>

            <span className="text-[#06B6D4]">
                <RiTailwindCssFill />
            </span>
        </>} />

    )
}

export default Jokenpo


