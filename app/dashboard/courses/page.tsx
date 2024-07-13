'use client'
import Load from '@/components/Load'
import CourseCategories from '@/components/courses/CourseCategories'
import CourseDetails from '@/components/courses/CourseDetails'
import WatchCourse from '@/components/courses/WatchCourse'
import { getAllCourses, getLatestCourses, getOngoingCourses } from '@/store/courses/courseAction'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {

    const dispatch = useAppDispatch()
    const search = useSearchParams()

    const [id, setId] = useState<string | null>('');
    const [ watch, setWatch] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const queryId = new URLSearchParams(search).get("id")
    const queryWatch = new URLSearchParams(search).get("watch")
    const ongoing = useAppSelector((state) => state.courses.ongoingCourses);
    const isLoading = useAppSelector(state => state.courses.loading)

    
    const getId = () =>{
        setId(queryId)
        console.log('query id: ',queryId)
        console.log('id: ',id)
    }

    const getWatch =() =>{
        setWatch((queryWatch as unknown) as boolean)
        console.log('queryWatch: ', queryWatch);
        console.log('Watch: ', watch);
    }

    useEffect(() => {
        getId();
        getWatch();
    }, [])

    useEffect(() => {
        dispatch(getAllCourses())
        dispatch(getLatestCourses())
        dispatch(getOngoingCourses())
    },[])

    useEffect(() => {
        if(isLoading === true) {
            setLoading(true)
        }else {
            setLoading(false)
        }
    },[isLoading])
    
    return (
        <>

            {
                loading && (<Load/>)
            }
            {
            queryId === null && queryWatch === null ?  <CourseCategories/> : null
            }
            {
                queryId !== null && queryWatch === null ? (<CourseDetails ongoing={ongoing}/>) : null
            } 
            {
                queryId !== null && queryWatch !== null ? (<WatchCourse ongoing={ongoing}/>) : null
            }

        </>
    )
}

export default page;