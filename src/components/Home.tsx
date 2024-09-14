'use client'

import React from 'react'
import Image from 'next/image'
import icon from '../assets/icon.jpeg'
import LinkedinIcon from '../assets/svgs/linkedinicon';
import GithubIcon from '../assets/svgs/githubicon';
import InstagramIcon from '../assets/svgs/Instagramicon';
import { usePage } from '../contexts/PageContext';

function HomeComp({ id }: { id: string | null }) {

    const {largura, HomeRef} = usePage(); 
    return (
        <div ref={HomeRef} id={id!} className=' w-full md:w-4/5 flex flex-col items-center justify-center py-10 md:justify-center min-h-[864px] h-full gap-10 md:gap-12 bg-gradient-to-tr from-slate-100 shadow-md border-b-2 rounded-lg border-t-slate-50 border-t-2 mt-12 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl'>

            <header className='flex w-4/5 justify-start '>  
                <a target="_blank" href="https://www.linkedin.com/in/wallef-franco-a2a18a229/"> <LinkedinIcon height={largura < 624 ? '40' : '48'} width={largura < 624 ? '40' : '48'} /> </a>
                <a target="_blank" href="https://github.com/wvll3f/"> <GithubIcon height={largura < 624 ? '40' : '48'} width={largura < 624 ? '40' : '48'} /> </a>
                <a target="_blank" href=""> <InstagramIcon height={largura < 624 ? '40' : '48'} width={largura < 624 ? '40' : '48'} /></a>
            </header>

            <div className="w-4/5 flex flex-col-reverse md:flex-row md:justify-between gap-10" >
                <aside className='flex-1' >
                    <h1 className='font-bold text-base md:text-5xl flex text-blueLight gap-2' >Prazer,  Wallef Amorim.</h1>

                    <h2 className='font-bold text-base lg:text-4xl mt-2' >Desenvolvedor Web</h2>

                    <p className='text-xs lg:text-lg text-justify mt-5' >Olá! Sou profissional de Tecnologia da Informação, atualmente foco meus estudos e direciono minha carreira para a área de programação. Focando nas linguagens Java e JavaScript e nas tecnologias Spring e ReactJS. Graças ao meu atual trabalho possuo vasto conhecimento na área de redes e tenho contato constante com sistemas Linux.</p>

                    <button className=" mt-5 p-3 text-white bg-blueLight hover:bg-blueDark  font-medium rounded-xl text-md dark:bg-blueLight dark:hover:bg-blueDark">
                        <a href="https://api.whatsapp.com/send/?phone=71992469763&text=Ola%20Wallef%2C%20tudo%20bem%3F%20Vim%20pelo%20seu%20site%21&type=phone_number&app_absent=0 h-full w-full" target="_blank" >Contate-me</a>
                    </button>
                </aside>
                <div className='w-52 lg:w-72 lg:h-w-72 lg:max-h-w-72 max-w-72 rounded-full ' >
                    <Image
                        src={icon}
                        alt="Picture of the author"
                        layout="responsive"    
                        className='rounded-full' 
                    />
                </div>

            </div>

        </div>
    )
}

export default HomeComp