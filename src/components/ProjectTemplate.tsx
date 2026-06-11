import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
import Nav from "./Nav"
import { Link } from "react-router-dom"
import Footer from "./Footer"
import { FaExternalLinkAlt } from "react-icons/fa";



type ProjectTemplateProps = {
    title: string,
    mobileImage: string,
    desktopImage: string,
    projectLink: string,
    about: string,
    challenges: string,
    learnings: string,
    technologies:React.ReactNode
}


const ProjectTemplate = ({ title, mobileImage, desktopImage, projectLink, about, challenges, learnings,technologies }: ProjectTemplateProps) => {

    const { theme } = useContext(ThemeContext)

    return (
        <div className={`${theme.colors.background} ${theme.colors.text}`}>
            <Nav />
            <div className={` flex p-8`}>
                <button className='cursor-pointer border  p-y px-4 rounded hover:scale-110 transition-transform ease-in-out duration-300'>
                    <Link to="/projects">
                        Back
                    </Link>
                </button>


            </div>
            <div>
                <h1 className='text-center'>{title}</h1>
            </div>

            <div className='w-fit mx-auto  p-8'>

                <div >
                    <img src={mobileImage} alt={title} className=" md:hidden rounded-xl shadow-lg border" />
                    <img src={desktopImage} alt={title} className="hidden md:block rounded-xl shadow-lg border mt-10" />
                </div>

                <div className='flex flex-col items-center  md:flex-row md:justify-between   p-4 md:mt-4 gap-4'>

                    <div className='flex flex-col p-4 md:mt-4 gap-4 items-center'>
                        <p className="font-bold ">Tecnologias utilizadas:</p>
                        <div className='flex gap-4 text-3xl'>
                            {technologies}
                           
                        </div>
                    </div>

                    <div className='p-4 '>
                        <a href={projectLink} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-4 border  p-2 rounded  ${theme.name === 'Light' ? 'hover:bg-gray-900 hover:text-white hover:border-black' : 'hover:bg-gray-100 hover:text-black hover:border-white'}transition-colors hover:scale-105 duration-300 ease-in-out `}><FaExternalLinkAlt /> Ver projeto</a>
                    </div>

                </div>
            </div>



            <div className='flex flex-col p-8 gap-4'>
                <h2 className={`mb-4 font-bold border-b-2 border-${theme.colors.border} p-2`}>Sobre</h2>
                <p >
                    {about}
                </p>

                <h2 className={`mb-4 font-bold border-b-2 border-${theme.colors.border} p-2`}>Desafios</h2>
                <p > {challenges} </p>
                <h2 className={`mb-4 font-bold border-b-2 border-${theme.colors.border} p-2`}>O que aprendi</h2>
                <p >
                    {learnings}
                </p>


            </div>



            <Footer />
        </div>
    )
}

export default ProjectTemplate