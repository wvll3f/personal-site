'use client'

import LineIcon from '../assets/svgs/lineicon'
import { usePage } from '@/contexts/PageContext';
import React from 'react'
import Timeline from './Timeline';


function AbouteMe({ id }: { id: string | null }) {

    const { AboutRef } = usePage();

    return (
        <div ref={AboutRef} id={id!} className='w-4/5 flex flex-col items-center min-h-[864px] h-full gap-10 md:gap-12' >

            <div className='flex flex-col items-center justify-center w-full gap-10  '>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-2xl md:text-4xl' >SOBRE MIM</h1>
                    <LineIcon />
                </div>

                <Timeline />

            </div>
        </div>
    )
}

export default AbouteMe