"use client";
import { LoadButton, LoadSmallButton } from "@/components/Load";
import { GlobalContext } from "@/context/context";
import { useAppSelector } from "@/store/hooks";
import { messagesData } from "@/types";
import { Messages } from "iconsax-react";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";


const page = () => {
  const { message, setMessage, messages, setMessages } =
    useContext(GlobalContext);

  const chatMessages = useAppSelector(
    (state) => state.chats.chatDetails?.messages
  );
  const isChatLoading = useAppSelector((state) => state.chats.chatLoading);
  const me = useAppSelector((state) => state.auth.userDetails?.id);

  const [chatLoading, setChatLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isChatLoading === true) {
      setChatLoading(true);
    } else {
      setChatLoading(false);
    }
  }, [isChatLoading]);

  useEffect(() => {
    if (chatMessages === null) {
      return;
    }
    setMessages(chatMessages as messagesData[]);
  }, [chatMessages]);

  return (
    <>
      {chatLoading === true ? (
        <div className="h-full flex flex-col w-full items-center justify-center">
          <LoadSmallButton />
          <p className="text-xs 2xl:text-sm text-primary2">Loading Chats...</p>
        </div>
      ) : (
        <>
          {messages ? (
            <div className=" flex flex-col gap-[14px] 2xl:gap-[14px]">
              {messages?.map((item) => (
                <div
                    key={item.id}
                  style={
                    {
                      justifyContent: item?.sender.id === me ? "flex-end" : "flex-start"
                    }
                  }
                  className="w-full flex justify-start"
                >
                  {/* CHAT CARD */}
                  <div
                    style={
                      {
                        flexDirection: item?.sender.id === me ? "row-reverse" : "row",
                      }
                    }
                    className=" w-full flex items-start gap-1"
                  >
                    {/* IMAGE */}
                    <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                      {/* <Image 
                            src={item?.sender.photo}
                            alt={item?.sender.first_name}
                            className='w-full'
                            width={1024}
                            height={1024}
                        /> */}
                    </div>

                    {/* MESSAGE */}
                    <div
                      style={
                        {
                          alignItems: item?.sender.id === me ? "flex-end" : "flex-start",
                        }
                      }
                      className="flex flex-col w-full max-w-[50%]"
                    >
                      <p className="text-[11px] text-nameTag ">
                        {item?.sender.first_name} {item?.sender.last_name}
                      </p>
                      <div
                        className={`${item?.sender.id === me ? "mechat" : "outchat"}`}
                      >
                        <p
                          style={
                            {
                              color: item?.sender.id === me ? "#FFF" : "#000"
                            }
                          }
                          className="text-[12px] 2xl:text-[14px]"
                        >
                          {item?.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full p-20 flex flex-col items-center justify-center">
              <div className="w-20 h-20 flex items-center justify-center">
                <Messages size="120" color="#2A66AE" variant="Bulk"/>
              </div>
              <p className="text-xs 2xl:text-sm text-primary2">Your chats will show here</p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default page;

// :
