'use client'

import React, { createContext, useState, useContext, ReactNode, useEffect, useRef } from 'react';

interface VisibilityType {
    homeView: boolean;
    projectView: boolean;
    aboutView: boolean;
}

type PageContextType = {
    largura: number;
    altura: number;
    HomeRef: React.MutableRefObject<null | any>;
    ProjectRef: React.MutableRefObject<null | any>;
    AboutRef: React.MutableRefObject<null | any>;
    setAltura: React.Dispatch<React.SetStateAction<number>>;
    setLargura: React.Dispatch<React.SetStateAction<number>>;

};

const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageProvider = ({ children }: { children: ReactNode }) => {

    const [largura, setLargura] = useState<number>(0);
    const [altura, setAltura] = useState<number>(0);
    const HomeRef = useRef(null);
    const ProjectRef = useRef(null);
    const AboutRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setLargura(window.innerWidth)
            setAltura(window.innerHeight)
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, [])


    return (
        <PageContext.Provider value={{ largura, altura, HomeRef, ProjectRef, AboutRef, setAltura, setLargura }}>
            {children}
        </PageContext.Provider>
    )
}

export const usePage = () => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error('usePahe must be used within a PageProvider');
    }
    return context;
};

export default PageContext
