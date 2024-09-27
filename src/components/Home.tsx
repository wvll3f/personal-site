'use client'

import React from 'react'
import Image from 'next/image'
import icon from '../assets/icon.jpeg'
import { usePage } from '../contexts/PageContext';
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

function HomeComp({ id }: { id: string | null }) {

    const { largura, HomeRef } = usePage();
    return (
        <div ref={HomeRef} id={id!} className='bg-gradient-to-tr from-whiteBG to-white w-full md:w-4/5 flex flex-col items-center justify-center py-10 md:justify-center min-h-[864px] h-full gap-10 md:gap-12 shadow-md border-b-2 rounded-lg border-t-slate-50 border-t-2 mt-12 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl'>

            <header className='flex w-4/5 justify-start '>
                <a target="_blank" href="https://www.linkedin.com/in/wallef-franco-a2a18a229/">
                    <LinkedInLogoIcon color='#09244B' height={largura < 624 ? '40' : '48'} width={largura < 624 ? '40' : '48'} />
                </a>

                <a target="_blank" href="https://github.com/wvll3f/">
                    <GitHubLogoIcon color='#09244B' height={largura < 624 ? '40' : '48'} width={largura < 624 ? '40' : '48'} />
                </a>

                <a target="_blank" href="">
                    <InstagramLogoIcon color='#09244B' height={largura < 624 ? '40' : '48'} width={largura < 624 ? '40' : '48'} />
                </a>
            </header>

            <div className="w-4/5 flex flex-col-reverse md:flex-row md:justify-center md:items-center gap-10" >
                <aside className='flex-1' >
                    <h1 className='font-bold text-base md:text-5xl flex text-blueLight gap-2' >Prazer,  Wallef Amorim!</h1>

                    <h2 className='font-bold text-base lg:text-4xl mt-2' >Desenvolvedor Web</h2>

                    <p className='text-xs lg:text-lg text-justify mt-5' >Oi, tudo bem? Sou um profissional de TI, focado em desenvolvimento web com as linguagens Java, JavaScript. Meu objetivo é sempre construir soluções inteligentes e funcionais que resolvam problemas reais. <br />
                    <strong>Se você busca um desenvolvedor que esteja pronto para colaborar e trazer  soluções inovadoras para projetos, vamos trabalhar juntos!</strong> 
                    </p>

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