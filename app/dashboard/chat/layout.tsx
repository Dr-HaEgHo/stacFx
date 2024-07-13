'use client'
import ChatNavbar from '@/components/ChatNavbar'
import ChatSidebar from '@/components/ChatSidebar'
import { baseUrlApi, socketUrl } from '@/config'
import { GlobalContext } from '@/context/context'
import useWebSocket from '@/hooks/useWebSocket'
import { getChatRooms } from '@/store/chats/ChatActions'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { io } from 'socket.io-client'

const layout = ({ children }: { children: React.ReactNode }) => {

    const dispatch = useAppDispatch()
    
    const token = useAppSelector(state => state.auth.userToken)
    const isLoading = useAppSelector(state => state.chats.loading)
    const rooms = useAppSelector(state => state.chats.chatRooms)

    const { openChatNav, setOpenChatNav} = useContext(GlobalContext)
    const { message, setMessage, messages, setMessages} = useContext(GlobalContext);
    // const { chats, sendChat } = useWebSocket(`${socketUrl}/chat/?token=${token}`)
    const socketRef = useRef<WebSocket | null>(null);
    const socket = new WebSocket(`${socketUrl}/chat/?token=${token}`);
    socketRef.current = socket;
    
    const [ loading, setLoading ] = useState<boolean>(false)
    
    const onSend = () => {
    
       
    };

    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        socket.send(message);
        setMessage("");
        // alert(message)
    }

    useEffect(() => {
        socket.onmessage = (data: any) => {
            setMessages((prevMessages) => { return [...prevMessages, data]; })
        }
    }, [])

    useEffect(() => {
        if(isLoading === true){
            setLoading(true)
        }else {
            setLoading(false)
        }
    }, [isLoading]);
    
    useEffect(() => {
        dispatch(getChatRooms())
        // setMessages(chats)
    }, []);

    return (
        <div className='w-full h-full relative flex flex-col ' >

            {/* CHAT NAVBAR */}
            <div className='bg-white w-full sticky top-0 z-10' >
                <ChatNavbar />
            </div>


            <div className='w-full flex-[1] max-h-full flex items-start relative ' >

                {/* CHATROOM PANELS */}
                <div style={{
                    left: openChatNav === true ? 0 : -260
                }} className='h-full flex-[1] min-w-[200px] bg-orange-400 fixed lg:sticky left-0 top-0 z-[999999999999999] lg:z-0' >
                    <ChatSidebar />
                </div>

                {/* CHAT PAGE */}
                <div className='flex-[5] h-full' >
                    <div className='py-3 w-[94%] mx-auto mt-[20px] 2xl:mt-[30px] rounded-2xl bg-white px-[20px] 2xl:px-[28px] pr-[10px] 2xl:pr-[14px] h-[90%]  relative' >
                        
                        {/* CHAT PAGES */}
                        <div className='w-full h-[90%] scroll-chat mb-6 pr-2'>
                            {children}
                        </div>


                        {/* SEND FORM */}
                        <div className='w-full bg-white p-1 rounded-2xl flex items-center gap-[14px] 2xl:gap-[16px]' >
                            <button className='w-[38px] h-[38px] rounded-full bg-primary2 flex items-center justify-center' >
                                <Image 
                                    src={require('../../../assets/icons/addplus.png')}
                                    alt='stacfx.com'
                                    className='w-full'
                                /> 
                            </button>
                            <form onSubmit={handleSubmit} className='w-full relative ' >
                                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Type Something...' className='w-full rounded-full bg-chatinput border-2 border-chatinput p-[12px] text-[12px] focus:border-2 focus:border-outbox' />
                                <button type='submit' className='w-[30px] h-[30px] p-1 rounded-full 2xl:w-[30px] 2xl:h-[30px] absolute right-[30px] top-1/2 transform -translate-y-1/2 hover:bg-sidebarTxtHover active:bg-blueChatHighlightActive '>
                                    <Image 
                                        src={require('../../../assets/icons/send.png')}
                                        alt='stacfx.com'
                                        className='w-full'
                                    />    
                                </button>  
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default layout