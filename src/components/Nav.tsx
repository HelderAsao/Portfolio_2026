
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from './ThemeContext'

const Nav = () => {

    const { theme, toggleTheme } = useContext(ThemeContext)

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinks = [
        {
            name: 'Contato',
            path: '#contact',
            type: 'anchor'
        },
        {
            name: 'Projetos',
            path: '/projects',
            type: 'route'
        },
        {
            name: 'Sobre',
            path: '/#about',
            type: 'anchor'
        }
    ]
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className={`${theme.colors.element} ${theme.colors.text} border-b border-${theme.colors.text}`}>
            <nav className="relative flex items-center justify-between p-4 ">
                <div className=' cursor-pointer hover:scale-110 origin-left transition-transform duration-300 ease-in-out'>
                    <RxHamburgerMenu onClick={toggleMenu} className='relative md:hidden text-2xl' />
                </div>
                {isMenuOpen && (
                    <>
                        <div className="fixed inset-0 bg-black opacity-50" onClick={toggleMenu} ></div>

                        <div className={`${theme.colors.background} ${theme.colors.text} absolute top-0 left-0 p-4 shadow-lg w-1/2 h-screen flex flex-col items-center gap-4 `}>
                            <IoIosClose onClick={toggleMenu} className={`absolute top-3 left-3 z-10 cursor-pointer text-4xl`} />
                            <ul className={`${theme.colors.text} mt-10 flex flex-col gap-6`}>
                                {navLinks.map((link, index) => (
                                    <li key={index} className='cursor-pointer  hover:scale-110 transition-transform duration-300 ease-in-out mt-2'>
                                        {link.type === 'route' ? (
                                            <Link to={link.path} onClick={() => { setIsMenuOpen(false) }} >{link.name}
                                            </Link>) : (

                                            <a onClick={() => { setIsMenuOpen(false) }} href={link.path}>
                                                {link.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}
                <ul className={` ${theme.colors.text} absolute  md:left-1/2 md:-translate-x-1/2  hidden md:flex md:flex-row  md:gap-12 md:p-4`}>
                    {navLinks.map((link, index) => (
                        <li key={index} className='cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out mt-2'>
                            {link.type === 'route' ? (
                                <Link to={link.path} onClick={() => { setIsMenuOpen(false) }} >{link.name}
                                </Link>) : (

                                <a onClick={() => { setIsMenuOpen(false) }} href={link.path}>
                                    {link.name}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
                <div className='flex gap-2 items-center cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out md:p-4 '
                 onClick={toggleTheme}>

                    <span ><theme.icon size={theme.iconSize}/></span>
                    <p>{theme.buttonLabel}</p>
                </div>
            </nav>
        </div>
    )
}

export default Nav