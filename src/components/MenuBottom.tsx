"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function MenuBottom() {

    interface ButtonColors {
        button1: string;
        button2: string;
        button3: string;
        button4: string;
    }

    const [buttonColors, setButtonColors] = useState<ButtonColors>({
        button1: 'bg-blueLight border-2 border-white',
        button2: 'bg-white',
        button3: 'bg-white',
        button4: 'bg-white',
    });

    const changeColor = (buttonId: keyof ButtonColors) => {

        const updatedColors = { ...buttonColors };

        updatedColors[buttonId] = 'bg-blueLight border-2 border-white';

        Object.keys(updatedColors).forEach((chave: string) => {
            const value = chave as keyof ButtonColors;
            if (chave !== buttonId) {
                updatedColors[value] = 'bg-white';
            }
        });

        setButtonColors(updatedColors);
    };

    return (
        <div className='hidden md:block h-full w-screen z-10'>
            <div className='fixed right-0 bottom-1/2 space-y-3 mr-10'>

            
                <Link href={'#Home'} onClick={() => changeColor('button1')} className={`${buttonColors.button1} flex items-center justify-center rounded-full w-7 h-7 cursor-pointer hover:bg-blueLight`}>
                </Link>
           
                <Link href={'#Projects'} onClick={() => changeColor('button2')} className={`${buttonColors.button2} flex items-center justify-center rounded-full w-7 h-7 cursor-pointer hover:bg-blueLight`}>
                </Link>

                <Link href={'#AboutMe'} onClick={() => changeColor('button3')} className={`${buttonColors.button3} flex items-center justify-center rounded-full w-7 h-7 cursor-pointer hover:bg-blueLight`}>
                </Link>

            </div>
        </div>
    )
}

export default MenuBottom