
import { BsFillCameraReelsFill } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { SiHtmlacademy } from "react-icons/si";
import ProfileImage from '../assets/images/profile.jpeg'
import Nav from './Nav'
import About from './About'
import Footer from './Footer';
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
import Tecnologies from "./Tecnologies";

const Home = () => {

    const { theme } = useContext(ThemeContext)

    const sectionData = [
        {
            title: 'Primeira Faculdade',
            year: '2010',
            description: 'Iniciei minha graduação em Publicidade e Propaganda, área que despertou meu interesse por comunicação visual, criatividade e design, conhecimentos que ainda influenciam minha forma de desenvolver interfaces.',
            icon: BsFillCameraReelsFill
        },
        {
            title: 'Curso Saga',
            year: '2014',
            description: 'Aprofundei meus conhecimentos em design digital na SAGA, desenvolvendo noções de composição visual, identidade visual e experiência do usuário.',
            icon: FaFire
        },
        {
            title: 'Contato com lógica de programação',
            year: '2018',
            description: 'Tive meu primeiro contato com lógica de programação atuando na automação de robôs industriais KUKA, experiência que fortaleceu meu raciocínio lógico e minha capacidade de resolver problemas.',
            icon: FaRobot
        },
        {
            title: 'Segunda faculdade',
            year: '2024',
            description: 'Motivado pelo interesse crescente em tecnologia, iniciei a graduação em Análise e Desenvolvimento de Sistemas para construir uma base sólida em desenvolvimento de software.',
            icon: SiHtmlacademy

        },
        {
            title: 'Início da jornada Front-End',
            year: '2025',
            description: 'Decidi direcionar minha carreira para o desenvolvimento Front-End, unindo meu interesse por tecnologia e design. Nesse período comecei meus estudos em HTML, CSS, JavaScript e React por meio de projetos práticos.',
            icon: MdOutlineLaptopChromebook
        }
    ]

    return (
        <>

            <Nav />
            <div className={`${theme.colors.background} ${theme.colors.text}`}>

                <section className='' id='about'>

                    <div className='flex flex-col items-center p-8 gap-6'>

                        <img src={ProfileImage} alt="Profile Image" className={`border-${theme.colors.text} border-2 rounded-full w-64 h-64 object-cover mt-20`} />
                        <p className='p-8 text-center max-w-2xl leading-7'>Olá, mundo! Meu nome é Helder! Estou estudando para me tornar desenvolvedor Front-end. Adoro aprender coisas novas e estou sempre em busca de novos desafios.</p>
                        <a href='/cv2026.pdf' download className={`p-4 ${theme.colors.button} ${theme.colors.border} rounded hover:scale-110  transition-transform duration-300 ease-in-out `}>Baixar Currículo</a>
                    </div>
                    <About />

                    <h1 className='text-center mb-10 '>Jornada</h1>
                    <div className='relative flex flex-col items-center max-w-4xl mx-auto  '>

                        <div className={`absolute w-[4px] bottom-0 top-0 left-1/2 transform -translate-x-1/2 z-0 rounded ${theme.name === 'Dark' ? 'bg-gray-300' : 'bg-gray-700'}`}></div>

                        {sectionData.map((item, index) => (
                            <div className={` p-4 relative flex flex-col items-center gap-2 md:w-1/2  ${index % 2 === 0
                                ? 'md:self-start md:pr-10'
                                : 'md:self-end md:pl-10'
                                }`} key={index}>

                                <span className={`border-2 md:hidden border-black rounded-full p-1 bg-white z-10 w-6 h-6 `} ></span>
                                <span className={`hidden md:block absolute top-5 w-6 h-6 rounded-full border-2 border-black bg-white z-20 
                                ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`}
                                />

                                <div className='flex flex-col items-center gap-2 relative z-10 ' >
                                    <h2 className={` relative z-10  border-none rounded inline-block p-1 md:text-center md:text-2xl font-bold ${theme.colors.background}`}>{item.title}</h2>
                                    <p className={`border-none rounded z-10 px-2  ${theme.colors.background} ${theme.colors.text}`}>{item.year}</p>
                                    <p className={`text-center border-none rounded  z-10 px-4 py-2 inline-block ${theme.colors.background} ${theme.colors.text}`}>{item.description}</p>
                                </div>
                                <div className={`relative z-10 p-2  flex items-center justify-center ${theme.colors.background}`}>
                                    <item.icon className={`text-4xl ${theme.colors.background} `} />
                                </div>
                            </div>
                        ))}
                    </div>


                </section>
                <Tecnologies />
                <Footer />

            </div>
        </>
    )
}
export default Home