import { FaGithub, FaLinkedin, FaWhatsapp, FaFile } from 'react-icons/fa'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'


const Footer = () => {
    const { theme } = useContext(ThemeContext)
    const icons = [
        { label: "Github", icon: FaGithub, link: "https://github.com/HelderAsao" },
        { label: "Linkedin", icon: FaLinkedin, link: "https://www.linkedin.com/in/helderasao/" },
        { label: "WhatsApp", icon: FaWhatsapp, link: "https://wa.me/551199459269" },
        { label: "Curriculum", icon: FaFile, link: "/cv2026.pdf" }

    ]
    return (
        <div className={`${theme.colors.background} ${theme.colors.text}`}>
            <footer id='contact' className={`p-8 flex flex-col gap-8 border-t border-${theme.colors.text} mt-20`}>
                <div className='flex justify-center'>
                    <p>Contato</p>
                </div>
                <div className='flex justify-center gap-10 text-3xl ' >

                    {icons.map((item, index) => (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className='relative group ' key={index}>
                            <item.icon className='opacity-100 group-hover:opacity-0 inset-0 cursor-pointer transition-opacity duration-300 ease-in-out' />
                            <span className='flex items-center justify-center inset-0 absolute opacity-0 top-0 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity duration-300 text-sm'>
                                {item.label}
                            </span>

                        </a>
                    ))}
                </div>
            </footer>
        </div>
    )
}
export default Footer