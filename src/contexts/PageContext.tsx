'use client'
import useObserver from '@/hooks/useObserver';
import React, { createContext, useState, useContext, ReactNode, useEffect, useRef } from 'react';

interface VisibilityType {
    homeView: boolean;
    projectView: boolean;
    aboutView: boolean;
}

type PageContextType = {
    largura: number;
    altura: number;
    setAltura: React.Dispatch<React.SetStateAction<number>>;
    setLargura: React.Dispatch<React.SetStateAction<number>>;
    HomeRef: React.MutableRefObject<null> | React.MutableRefObject<HTMLDivElement> ;
    ProjectRef: React.MutableRefObject<null> | React.MutableRefObject<HTMLDivElement> ;
    AboutRef: React.MutableRefObject<null> | React.MutableRefObject<HTMLDivElement> ;

};

const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageProvider = ({ children }: { children: ReactNode }) => {

    const [largura, setLargura] = useState<number>(0);
    const [altura, setAltura] = useState<number>(0);
    const HomeRef = useRef(null);
    const ProjectRef = useRef(null);
    const AboutRef = useRef(null);
    
    const isHome = useObserver(HomeRef, '-100px');
    const isAbout = useObserver(AboutRef, '-100px');
    const isProject = useObserver(ProjectRef, '-100px');

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
