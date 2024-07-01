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
    setCurrentCourse: (): courseData | null => null
})

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {


    const [isActive, setIsActive] = useState<number>(0)
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);
    const [ currentCourse, setCurrentCourse ] = useState<courseData | null>(null);


    
    return (
        <GlobalContext.Provider value={{ 
            isActive, setIsActive, isSidebarOpen, setIsSidebarOpen, currentCourse, setCurrentCourse
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

// export const useGlobalContext = useContext(GlobalContext);