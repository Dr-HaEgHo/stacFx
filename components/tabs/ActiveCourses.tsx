import React, { FC, useState } from 'react'
import EmptyCourse from '../Empty'
import ProgressCard from './ProgressCard'
import Loader from '../CardLoader'
import { courseCatProps } from './AllCourses'
import { courseData, onboardingCourses } from '@/types'
import { useRouter } from 'next/navigation'

const ActiveCourses: FC<courseCatProps> = ({data})=> {

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
                                    <ProgressCard data={item} action={() => routeToLocation(item.id)}/>
                                </div>

                            )) : (

                                <EmptyCourse />

                            )
                        }



                    </div>
                ) 
            }
        </>)
}

export default ActiveCourses