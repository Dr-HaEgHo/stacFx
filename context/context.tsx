"use client"

import { useAppSelector } from "@/store/hooks";
import { courseData } from "@/types";
import React, { createContext, useContext, SetStateAction, Dispatch, useState, useReducer, useEffect } from "react";

// type DataType = {
//     isActive: boolean
// }

interface ContextProps{
    isActive: number,
    setIsActive: Dispatch<SetStateAction<number>>
    isSidebarOpen: boolean;
    setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
    currentCourse: courseData | null;
    setCurrentCourse: Dispatch<SetStateAction<courseData | null>>;
    nowPlaying: string | null;
    setNowPlaying: Dispatch<SetStateAction<string | null>>;
    picture: string | null;
    setPicture: Dispatch<SetStateAction<string | null>>;
}

// const initialState = {
//     todos: [],
// };

export const GlobalContext = createContext<ContextProps>({
    isActive: 0,
    setIsActive: (): number => 0,
    isSidebarOpen: false,
    setIsSidebarOpen: (): boolean => false,
    currentCourse: null,
    setCurrentCourse: (): courseData | null => null,
    nowPlaying: null,
    setNowPlaying: (): courseData | null => null,
    picture: null,
    setPicture: (): string | null => null
})

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [isActive, setIsActive] = useState<number>(0)
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);
    const [ currentCourse, setCurrentCourse ] = useState<courseData | null>(null);
    const [ nowPlaying, setNowPlaying ] = useState<string | null>(null);
    const [ picture, setPicture] = useState<string | null>(null)
    
    return (
        <GlobalContext.Provider value={{ 
            isActive, setIsActive, isSidebarOpen, setIsSidebarOpen, currentCourse, setCurrentCourse, nowPlaying, setNowPlaying, picture, setPicture
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

// export const useGlobalContext = useContext(GlobalContext);