"use client"

import { useAppSelector } from "@/store/hooks";
import React, { createContext, useContext, SetStateAction, Dispatch, useState, useReducer, useEffect } from "react";

// type DataType = {
//     isActive: boolean
// }

interface ContextProps{
    isActive: number,
    setIsActive: Dispatch<SetStateAction<number>>
    isSidebarOpen: boolean;
    setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

// const initialState = {
//     todos: [],
// };

export const GlobalContext = createContext<ContextProps>({
    isActive: 0,
    setIsActive: (): number => 0,
    isSidebarOpen: false,
    setIsSidebarOpen: (): boolean => false
})

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {


    const [isActive, setIsActive] = useState<number>(0)
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);


    
    return (
        <GlobalContext.Provider value={{ 
            isActive, setIsActive, isSidebarOpen, setIsSidebarOpen
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

// export const useGlobalContext = useContext(GlobalContext);