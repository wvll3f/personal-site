'use client'

import React from 'react'
import Image from 'next/image';
import WatherApp from '../assets/watherApp.jpeg'
import FinanceApp from '../assets/FinanceApp.png'
import { usePage } from '../contexts/PageContext';
import { ExternalLinkIcon, LineHeightIcon } from '@radix-ui/react-icons';

function Projects({ id }: { id: string | null }) {

    const { ProjectRef } = usePage();

    return (
        <div ref={ProjectRef} id={id!} className='w-4/5 flex flex-col items-center justify-center min-h-[864px] h-full gap-6' >

            <div className='flex flex-col items-center w-full gap-3'>
                <h1 className='font-bold text-4xl' >PROJETOS</h1>
                <div className='relative flex justify-center w-full h-full mt-2'>
                    <hr className='bg-blueDark w-52 h-0.5' />
                    <div className='absolute -top-1.5 rotate-45 w-4 h-4 bg-blueDark ring-4 ring-whiteBG'></div>
                </div>
            </div>

            <a target="_blank" href='https://github.com/wvll3f/WeatherApp' className='md:transition md:duration-300 md:ease-in-out md:hover:scale-105 flex mt-20 gap-5 lg:mb-10 relative group flex-wrap mdlg:flex-nowrap bg-gradient-to-tr from-slate-50 shadow-md border-b-2 rounded-lg border-t-slate-50 border-t-2 p-4'>
                <ExternalLinkIcon color='#E3E3E3' width={32} height={32} className='absolute right-2 top-2 hidden md:group-hover:block' />
                <div className='rounded-md min-w-[325px] w-full lg:max-w-[540px]'>
                    <Image
                        src={WatherApp}
                        alt='aplicativo de meteorologia'
                        layout="responsive"
                        className='object-fill'
                    />
                </div>
                <section className='text-sm xl:text-lg text-justify' >
                    <h1 className='font-bold text-xl xl:text-3xl'>WatherApp</h1>
                    <p className=' mt-5' > <strong>Front-end:</strong>  React</p>
                    <p >
                        Em resumo, essa aplicação permite que os usuários busquem pelo clima do mundo inteiro, com uma interface amigável no front-end, utilizando React e uma api pública sobre meteorologia, para captdar as informações.</p>
                </section>

            </a>

            <a target="_blank" href='https://github.com/wvll3f/transations-control-front' className='md:transition md:duration-300 md:ease-in-out md:hover:scale-105 group flex mt-18 gap-5 lg:mb-10 flex-wrap mdlg:flex-nowrap bg-gradient-to-tr from-slate-50 shadow-md border-b-2 rounded-lg border-t-slate-50 border-t-2 p-4 ' >
                <ExternalLinkIcon color='#E3E3E3' width={32} height={32} className='absolute right-2 top-2 hidden md:group-hover:block' />
                <div className='rounded-md h-auto min-w-[325px] w-full lg:max-w-[540px] '>
                    <Image
                        src={FinanceApp}
                        alt='Finance App'
                        layout="responsive"
                        className='object-fill'
                    />
                </div>
                <section className='text-sm xl:text-lg text-justify'>
                    <h1 className='font-bold text-xl xl:text-3xl'>Finance App</h1>

                    <p className=' mt-5' >
                        <strong>Tecnologias: </strong>
                        React - Spring Boot - MySQL - Hospedagem com Ubuntu 22.04.4 LTS com Apache2 e Docker.
                    </p>
                    <p className='' >

                        Em resumo, essa aplicação permite que os usuários criem, editem e excluam transações financeiras mensais, com uma interface amigável no front-end e uma robusta camada de back-end para processamento e armazenamento de dados.
                    </p>

                </section>

            </a>

        </div>
    )
}

export default Projects