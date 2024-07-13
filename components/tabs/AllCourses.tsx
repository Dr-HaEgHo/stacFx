import React, { FC, useState } from 'react'
import EmptyCourse from '../Empty'
import ProgressCard from './ProgressCard'
import Loader from '../CardLoader'
import { courseData, onboardingCourses } from '@/types'
import { useRouter } from 'next/navigation'
import LatestCard from '../LatestCard'

export interface courseCatProps {
    data: onboardingCourses[];
}

const AllCourses: FC<courseCatProps> = ({data}) => {

    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false)

    const routeToLocation = (id: string) => {
        router.push(`/dashboard/courses?id=${id}`)
    }

    return (
        <>
            {
                loading === true ? (<Loader />) : (

                    <div className={`w-full pt-8 ${data && data.length ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : ''}`} >


                        {
                            // loading === true ? (<Loader/>) :
                            data && data.length ? data.map((item: onboardingCourses, index: number) => (

                                <div key={index} className='slide-up'>
                                    {/* { item.completed > 0 && (<ProgressCard data={item} action={() => routeToLocation(item.id, item.videos)}/>)} */}
                                    {/* { item.completed <= 0 && (<LatestCard data={item} action={() => routeToLocation(item.id, item.videos)}/>)} */}
                                    { (<LatestCard data={item} action={() => routeToLocation(item.id)}/>)}
                                </div>

                            )) : (

                                <EmptyCourse />

                            )
                        }



                    </div>
                ) 
            }
        </>
    )
}

export default AllCourses;