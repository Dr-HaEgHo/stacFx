import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react";
import OnboardingPanel from "../OnboardingPanel";

const WatchCourse = () => {

    const ended = () => {
        alert('ended the video')
    }

    return (
        <div className='w-full h-full bg-white ' >
            <div className='dash-container' >
                <div className="w-full pt-[26px] 2xl:pt-[34px] xl:max-w-[1400px] ">
                    
                    {/* VIDEO AND COMPONENT */}
                    <div className='flex mt-[30px] 2xl:mt-[36px] items-stretch gap-[18px] 2xl:gap-[7rem]' >
                        <div className='flex flex-[1] max-w-[264px]' >
                            <OnboardingPanel/>
                        </div>

                        <div className='flex-[2.8] '>
                            {/* EVERYTHING IN THE TOP */}
                            <div>
                                <h3 className="w-full text-[15px] py-4 border-b border-onPanelGray mb-6">Fundamentals of FX Trading {'>'} Phase 1</h3>

                                <div className="w-full bg-green-300 flex items-center justify-between mb-10">
                                    <p className="text-greytxt text-sm">LESSON 4 OF 17</p>

                                    <div className=" flex items-center gap-2 ">
                                        <ArrowCircleLeft size="32" variant="Bulk" color="#2A66AE"/>
                                        <ArrowCircleRight size="32" variant="Bulk" color="#2A66AE"/>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <h4 className="text-primary2 font-medium text-[20px]">Fundamentals of FX Trading</h4>
                                    </div>
                                    <p>This short description states everything you need to know about the course and lessons</p>
                                </div>
                            </div>


                            {/* VIDEO DIV */}

                            <div className="flex items-center justify-center rounded-2xl overflow-hidden">
                            <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" controls autoPlay onEnded={ended} className='w-full h-full object-cover' />
                            </div>

                        </div>
                    </div>
                    
                
                
                
                </div>
            </div>
        </div>
    )
}


export default WatchCourse;