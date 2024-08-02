'use client'
import ChatNavbar from '@/components/ChatNavbar'
import ChatSidebar from '@/components/ChatSidebar'
import Load from '@/components/Load'
import { baseUrlApi, socketUrl } from '@/config'
import { GlobalContext } from '@/context/context'
import useWebSocket from '@/hooks/useWebSocket'
import { getChatRooms } from '@/store/chats/ChatActions'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { messagesData, resultsData } from '@/types'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'

const layout = ({ children }: { children: React.ReactNode }) => {

    const dispatch = useAppDispatch()
    
    const token = useAppSelector(state => state.auth.userToken)
    const userDetails = useAppSelector(state => state.auth.userDetails)
    const isLoading = useAppSelector(state => state.chats.loading)
    const rooms = useAppSelector(state => state.chats.chatRooms)

    const search = useSearchParams()
    const queryRoom = new URLSearchParams(search).get('room')

    const { openChatNav, setOpenChatNav} = useContext(GlobalContext)
    const { message, setMessage, messages, setMessages, chatId, setChatId} = useContext(GlobalContext);

    const [ loading, setLoading ] = useState<boolean>(false)
    const [isOpen, setIsOpen ] = useState<boolean>(false)
    const [ appSocket, setAppSocket ] = useState<WebSocket | null>(null);


    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(appSocket === null){
            alert('we are null here oh')
            return
        }


        let chatData = {
            message: message,
            chat_id: chatId
        }
        console.log(" This is what we sent oh...: " ,chatData as unknown as ArrayBuffer);
        appSocket.send(JSON.stringify(chatData));
        appSocket.onopen
        setMessage("");
        // alert(message)
    }

    const handleUpdateChatId = (title : string) => {
        if(!queryRoom){
            return
        }
        rooms?.results.filter((item: resultsData) =>{
            if(item.course === title){
                setChatId(item.id)
            }
        })
    }

    // HANDLE PROCESS TO CHECK IF THE CONNECTION HAS BEEN ESTABLISHED WITH THE WEBSOCKET OR NOT
    useEffect(() => {

        const socket = new WebSocket(`${socketUrl}/chat/?token=${token}`);
        
        if(socket.onopen){
            onOpen();
        }
        
        function onOpen() {
            setIsOpen(true)
            setAppSocket(socket)
        }

        function onClose() {
            setIsOpen(false)
        }

        socket.onopen = () =>{
            onOpen()
        }

        // CHECKS IF THE MESSAGE HAS BEEN SENT THROUGH THE CONNECTION OR NOT
        socket.onmessage = (data: any) => {
            setMessages((prevMessages : messagesData[] | null) => { return [...prevMessages as messagesData[], data?.data]; })
            // alert('a new message has arrived')
            console.log("this is the onmessage data: " ,data)
        }

        socket.onclose = () =>{
            onClose()
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
        handleUpdateChatId(queryRoom as string)
    }, [queryRoom])
    
    useEffect(() => {
        dispatch(getChatRooms())
        // setMessages(chats)
    }, []);

    return (
        <div className='w-full h-full relative flex flex-col ' >
            { loading === true && <Load/>}

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

                    {/* ONLINE INDICATOR */}
                    <div className='w-full flex items-center justify-center pt-2'>
                        {isOpen ? (<p className='text-[10px] text-success bg-successTrans10 py-1 px-4 rounded-md'>Online</p>) : (<p className='text-[10px] text-error2 bg-error2Trans10 py-1 px-4 rounded-md '>Offline</p>)}
                    </div>
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

export default layout;