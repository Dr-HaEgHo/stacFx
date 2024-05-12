 import React, { useState } from 'react'
import EmptyCourse from '../Empty'
import ProgressCard from './ProgressCard'
import Loader from '../CardLoader'

const AllCourses = ({data}:{data:any}) => {
    const [loading, setLoading] = useState<boolean>(false)

    return (
        <>
            {
                loading === true ? (<Loader />) : (

                    <div className='w-full pt-8 gridd' >


                        {
                            // loading === true ? (<Loader/>) :
                            data && data.length ? data.map((item: {}, index: number) => (

                                <div key={index} className='slide-up'>
                                    <ProgressCard data={item} />
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