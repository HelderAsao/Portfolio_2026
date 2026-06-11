
const About = () => {

    return (
        <section id="about">

            <div className='p-8  flex flex-col items-center'>

                <h1 className='py-12'>Sobre</h1>

                <div className='flex flex-col md:flex-row mt-4 md:mt-12 mb-10 max-w-6xl gap-6'>
                    <div className='flex flex-col mb-6 flex-1'>

                        <h2 className='text-center md:text-left mb-6  font-bold '>Quem sou eu</h2>
                        <p className="text-center md:text-left">Desenvolvedor Front-End em transição de carreira, apaixonado por tecnologia e pela criação de interfaces modernas, responsivas e intuitivas. Atualmente desenvolvo projetos utilizando React, TypeScript e Tailwind CSS.</p>
                    </div>
                    <div className='flex flex-col  mb-6 flex-1'>
                        <h2 className='text-center md:text-left mb-6 font-bold '>O que estudo</h2>
                        <p className="text-center md:text-left">Atualmente estudo Sistemas de Análise e Desenvolvimento e venho aprimorando minhas habilidades com React, TypeScript, JavaScript e consumo de APIs REST através de projetos práticos.</p>
                    </div>
                    <div className='flex flex-col mb-6 flex-1'>
                        <h2 className='text-center md:text-left mb-6 font-bold'>Experiência prévia</h2>
                        <p className="text-center md:text-left">Antes da área de desenvolvimento, trabalhei com programação e automação industrial de robôs KUKA, experiência que fortaleceu meu raciocínio lógico, resolução de problemas e atenção aos detalhes.</p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default About 