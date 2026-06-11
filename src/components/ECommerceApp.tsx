import EcommerceImageMobile from '../assets/images/ecommercemobile.png'
import EcommerceImageDesktop from '../assets/images/ecommerceapp.png'
import { FaReact } from "react-icons/fa";
import { BsTypescript } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import ProjectTemplate from "./ProjectTemplate";




const ECommerceApp = () => {


    return (

        <ProjectTemplate title='E-commerce App'
            mobileImage={EcommerceImageMobile}
            desktopImage={EcommerceImageDesktop}
            projectLink="https://ecommerce-page-mauve.vercel.app/"
            about='Aplicação de página de produto desenvolvida em React que permite visualizar imagens do produto, selecionar quantidade, adicionar itens ao carrinho e visualizar o total da compra.'

            challenges='Os principais desafios foram gerenciar o estado do carrinho, implementar a galeria de imagens com navegação entre fotos, trabalhar com renderização condicional e estruturar a aplicação utilizando TypeScript para garantir maior organização e segurança do código.
'
            learnings='Durante o desenvolvimento, aprofundei meus conhecimentos em gerenciamento de estado com React, componentização, tipagem com TypeScript e boas práticas de organização de projetos Front-End.
'
            technologies={<>
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

export default ECommerceApp