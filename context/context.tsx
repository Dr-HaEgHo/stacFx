"use client";

import { courseData, messagesData, onboardingCourses } from "@/types";
import React, {
  createContext,
  SetStateAction,
  Dispatch,
  useState,
  useReducer,
  useEffect,
} from "react";

// type DataType = {
//     isActive: boolean
// }
interface messageType {
    message: string;
    chat_id: string;
}


interface ContextProps {
  isActive: string;
  setIsActive: Dispatch<SetStateAction<string>>;
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  mainSidebarOpen: boolean;
  setMainSidebarOpen: Dispatch<SetStateAction<boolean>>;
  currentCourse: onboardingCourses | null;
  setCurrentCourse: Dispatch<SetStateAction<onboardingCourses | null>>;
  nowPlaying: string | null;
  setNowPlaying: Dispatch<SetStateAction<string | null>>;
  picture: string | null;
  setPicture: Dispatch<SetStateAction<string | null>>;
  openChatNav: boolean;
  setOpenChatNav: Dispatch<SetStateAction<boolean>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  messages: messagesData[] | null;
  setMessages: Dispatch<SetStateAction<messagesData[] | null>>;
  chatId: string;
  setChatId : Dispatch<SetStateAction<string>>;
}

// const initialState = {
//     todos: [],
// };

export const GlobalContext = createContext<ContextProps>({
  isActive: '',
  setIsActive: (): string => '',
  isSidebarOpen: false,
  setIsSidebarOpen: (): boolean => false,
  mainSidebarOpen: false,
  setMainSidebarOpen: (): boolean => false,
  currentCourse: null,
  setCurrentCourse: (): courseData | null => null,
  nowPlaying: null,
  setNowPlaying: (): courseData | null => null,
  picture: null,
  setPicture: (): string | null => null,
  openChatNav: false,
  setOpenChatNav: (): boolean => false,
  message: "",
  setMessage: () : string => '',
  messages: null,
  setMessages: () : messagesData[] | null => null,
  chatId: '',
  setChatId : () :string => ''
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isActive, setIsActive] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [currentCourse, setCurrentCourse] = useState<onboardingCourses | null>(
    null
  );
  const [nowPlaying, setNowPlaying] = useState<string | null>(null);
  const [picture, setPicture] = useState<string | null>(null);
  const [mainSidebarOpen, setMainSidebarOpen] = useState<boolean>(false);
  const [openChatNav, setOpenChatNav] = useState<boolean>(false);
  const [messages, setMessages] = useState<messagesData[] | null>(null);
  const [message, setMessage] = useState<string>("");
  const [ chatId, setChatId ] = useState<string>('')

  return (
    <GlobalContext.Provider
      value={{
        isActive,
        setIsActive,
        isSidebarOpen,
        setIsSidebarOpen,
        currentCourse,
        setCurrentCourse,
        nowPlaying,
        setNowPlaying,
        picture,
        setPicture,
        mainSidebarOpen,
        setMainSidebarOpen,
        openChatNav,
        setOpenChatNav,
        message, 
        setMessage,
        messages,
        setMessages,
        chatId,
        setChatId
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// export const useGlobalContext = useContext(GlobalContext);
