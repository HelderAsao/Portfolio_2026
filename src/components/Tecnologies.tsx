import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa";
import { BsTypescript } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";




const Tecnologies = () => {
    return (
        <div className='p-8  flex flex-col gap-8 items-center mt-20 '>
            <p className='text-2xl '>Tecnologias:</p>
            <div className='flex flex-wrap justify-center gap-8 '>

                <FaReact className='text-[#61DAFB] hover:scale-150 transition-transform duration-300 ease-in-out cursor-pointer' />
                <BsTypescript className='text-[#3178C6] hover:scale-150 transition-transform duration-300 ease-in-out cursor-pointer' />
                <RiTailwindCssFill className='text-[#06B6D4] hover:scale-150 transition-transform duration-300 ease-in-out cursor-pointer' />
                <IoLogoJavascript className='text-[#F7DF1E] hover:scale-150 transition-transform duration-300 ease-in-out cursor-pointer' />
                <FaHtml5 className='text-[#E34F26] hover:scale-150 transition-transform duration-300 ease-in-out cursor-pointer' />
                <FaCss3Alt className='text-[#1572B6] hover:scale-150 transition-transform duration-300 ease-in-out cursor-pointer' />
                <FaGitAlt className='text-[#F05032] hover:scale-150 transition-transform duration-300 ease-in-out cursor-pointer' />
                <FaGithub className='text-[#6e5494] hover:scale-150 transition-transform duration-300 ease-in-out cursor-pointer' />
            </div>

        </div>

    )
}

export default Tecnologies