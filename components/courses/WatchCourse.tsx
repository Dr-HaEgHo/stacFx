import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react";
import OnboardingPanel from "../OnboardingPanel";
import { FC, useEffect } from "react";
import { IndicatorProps } from "@/types";
import { useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { getAllCourses } from "@/store/courses/courseAction";



const Indicator : FC<IndicatorProps> = ({text, status}) => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllCourses())
    }, [])

    return (
        <div className="rounded-full bg-chatinput py-[5px] px-[14px]">
            { status === 'done' && <p className="text-[10px] text-pending">{ text }</p>}
            { status === 'pending' && <p className="text-[10px] text-pending">{ text }</p>}
            { status === 'failed' && <p className="text-[10px] text-pending">{ text }</p>}
        </div>
    )
}

const WatchCourse = () => {

    const search = useSearchParams()
    const queryWatch = new URLSearchParams(search).get("watch")

    const ended = () => {
        alert('ended the video')
    }

    return (
        <div className='w-full h-full bg-white ' >
            <div className='dash-container' >
                <div className="w-full pt-[26px] 2xl:pt-[34px] xl:max-w-[1400px] ">
                    
                    {/* VIDEO AND COMPONENT */}
                    <div className='flex mt-[30px] 2xl:mt-[36px] items-start gap-[18px] 2xl:gap-[14rem]' >
                        <div className='flex flex-[1] max-w-[264px]' >
                            <OnboardingPanel/>
                        </div>

                        <div className='flex-[2.8] '>
                            {/* EVERYTHING IN THE TOP */}
                            <div>
                                <h3 className="w-full text-[15px] py-4 border-b text-primary border-onPanelGray mb-6">Fundamentals of FX Trading {'>'} Phase 1</h3>

                                <div className="w-full flex items-center justify-between mb-10">
                                    <p className="text-greytxt text-sm">LESSON 4 OF 17</p>

                                    <div className=" flex items-center gap-2 ">
                                        <ArrowCircleLeft size="32" variant="Bulk" color="#2A66AE"/>
                                        <ArrowCircleRight size="32" variant="Bulk" color="#2A66AE"/>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center gap-6 mb-2">
                                        <h4 className="text-primary2 font-medium text-[20px]">Fundamentals of FX Trading</h4>
                                        <Indicator text="In Progress" status="pending" />
                                    </div>
                                    <p className="text-sm font-light text-greytxt w-[80%] mb-10">This short description states everything you need to know about <br /> the course and lessons</p>
                                </div>
                            </div>


                            {/* VIDEO DIV */}

                            <div className="flex items-center justify-center rounded-2xl overflow-hidden">
                            <video src={queryWatch as string} controls autoPlay onEnded={ended} className='w-full h-full object-cover' />
                            </div>

                        </div>
                    </div>
                    
                
                
                
                </div>
            </div>
        </div>
    )
}


export default WatchCourse;