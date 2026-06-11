import { Link } from "react-router-dom"
import Nav from "./Nav"
import { ThemeContext } from "./ThemeContext"
import { useContext } from "react"
import Footer from "./Footer"


const Projects = () => {

    const { theme } = useContext(ThemeContext)
    const apps = [
        {
            'name': 'Country info App',
            'route': '/projects/country-info'
        },
        {
            'name': 'Weather App',
            'route': '/projects/weather'
        },
        {
            'name': 'E-commerce Interface',
            'route': '/projects/ecommerce'
        }
    ]

    return (
        <>
            <div className={`${theme.colors.background} ${theme.colors.text} min-h-screen flex flex-col`}>

                <Nav />


                <section className={`${theme.colors.background} ${theme.colors.text} flex-1`}>
                    <div className='flex p-8 '>
                        <button className={`cursor-pointer border border-${theme.colors.text} p-y px-4 rounded hover:scale-110 transform-transition ease-in-out duration-300`}>
                            <Link to="/">
                                Back
                            </Link>
                        </button>

                    </div>
                    <div className='flex justify-center p-8'>
                        <h1>Projects</h1>
                    </div>

                    <div >
                        <ul className='flex flex-col md:grid md:grid-cols-3 gap-4 p-8'>
                            {apps.map((app, index) => (
                                <li key={index} className='border p-4 rounded hover:scale-105 transform-transition ease-in-out duration-300 cursor-pointer text-center'>
                                    <Link to={app.route}>
                                        {app.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>




                </section>
                <Footer />
            </div>


        </>
    )
}

export default Projects