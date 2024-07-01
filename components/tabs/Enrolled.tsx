import React, { FC, useState } from 'react'
import EmptyCourse from '../Empty'
import ProgressCard from './ProgressCard'
import CardLoader from '../CardLoader'
import { courseCatProps } from './AllCourses'
import { courseData } from '@/types'

const Enrolled: FC<courseCatProps> = ({data})=> {
    const [loading, setLoading] = useState<boolean>(false)

    return (
        <>
            {
                loading === true ? (<CardLoader />) : (

                    <div className='w-full pt-8 gridd' >


                        {
                            // loading === true ? (<Loader/>) :
                            data && data.length ? data.map((item: courseData) => (

                                <div className='slide-up'>
                                    <ProgressCard data={item} action={() => {}} />
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

export default Enrolled