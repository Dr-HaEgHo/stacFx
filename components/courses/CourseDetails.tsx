import Link from "next/link";
import LatestCard from "../LatestCard";
import Image from "next/image";
import OngoingCard from "../OngoingCard";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FC, useContext, useEffect, useState } from "react";
import {
  getCourseDetails,
  getLatestCourses,
  getOngoingCourses,
} from "@/store/courses/courseAction";
import CardLoader from "../CardLoader";
import SomethingWentWrong from "../SomethingWentWrong";
import { CourseProps, courseData, innerCourses, onboardingCourses } from "@/types";
import { GlobalContext } from "@/context/context";
import Load from "../Load";

const CourseDetails: FC<CourseProps> = ({ ongoing }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const search = useSearchParams();
  const queryId = new URLSearchParams(search).get("id");
  const latest = useAppSelector((state) => state.courses.latestCourses);
  const isLatestLoading = useAppSelector(
    (state) => state.courses.latestLoading
  );
  const isOngoingLoading = useAppSelector(
    (state) => state.courses.ongoingLoading
  );
  const detailsLoading = useAppSelector(
    (state) => state.courses.courseDetailLoading
  );
  const courseDetails = useAppSelector(state => state.courses.courseDetails)

  const [loading, setLoading] = useState<boolean>(false)
  const [latestLoading, setLatestLoading] = useState<boolean>(false);
  const [ongoingLoading, setOngoingLoading] = useState<boolean>(false);
  const { currentCourse, setCurrentCourse } = useContext(GlobalContext);

  // const filterCourse = (arr: onboardingCourses[]) => {
  //   let newArr: onboardingCourses | null = null;
  //   arr?.filter((item) => {
  //     if (item.id.toString() === queryId) {
  //       newArr = item;
  //     }
  //   });

  //   return newArr;
  // };

  console.log("this is the ;atest course data", latest)
  const nextCourse = (arr: courseData[]) => {
    let newArr: courseData | null = null;
    for (let i: number = 0; i < arr.length; i++) {
      if (arr[i].id.toString() === queryId) {
        newArr = arr[i + 1];
      }
    }

    return newArr;
  };

  useEffect(() => {
    dispatch(getCourseDetails(queryId as string));
  }, [queryId]);

  useEffect(() => {
    setCurrentCourse(courseDetails as onboardingCourses);
  }, []);

  useEffect(() => {
    if (detailsLoading) {
      setLoading(true);
    } else setLoading(false);


    if (isLatestLoading) {
      setLatestLoading(true);
    } else setLatestLoading(false);

    if (isOngoingLoading) {
      setOngoingLoading(true);
    } else {
      setOngoingLoading(false);
    }
  }, [detailsLoading, isLatestLoading, isOngoingLoading]);

  return (
    <div className="w-full bg-white ">
      { loading === true && <Load/> }
      <div className="dash-container">
        <div className="w-full pt-[26px] 2xl:pt-[34px] ">
          {/* TOP BAR WELCOME */}
          <div className="w-full h-fit min-h-[300px] max-h-[420px] relative rounded-xl overflow-hidden flex flex-col items-start justify-center">
            {/* ABSOLUTE BG IMAGE */}
            <div className="w-full z-0 top-0 left-0">
              <Image
                src={currentCourse?.cover_image as unknown as string}
                width={1024}
                height={1024}
                alt="stacfx.com"
                className="w-full "
              />
            </div>

            <div className="z-10 mt-20 absolute top-1/2 transform -translate-y-1/2 p-10">
              <span className="text-white tracking-widest text-[11px] 2xl:text-[13px] font-[100] ">
                STACFX ACADEMY 
              </span>
              <h3 className="text-white text-[28px] 2xl:text-[32px] ">
                {currentCourse?.title}
              </h3>
            </div>
          </div>

          {/* PROGRESS BAR AND BUTTON TO CONTINUE COURSE */}
          <div className="w-full bg-brownGray py-[13px] px-[26px] rounded-2xl mt-6 flex items-center gap-[28px]">
            {/* IN PROGRESS */}
            <div className="z-10">
              <h3 className="text-primary2 font-semibold text-[13px] 2xl:text-[15px]">
                In Progress
              </h3>
              <span className="text-greytxt text-[11px] 2xl:text-[13px] font-[100]">
                Last active 23 hours ago
              </span>
            </div>

            {/* PROGRESS BAR AND PERCENTAGE */}
            <div className="flex-[1] flex flex-col items-start">
              <div className="w-full bg-brownerGray h-[14px] rounded-full mb-2 overflow-hidden">
                <div
                  style={{
                    width: `${
                      currentCourse !== null
                        ? Math.floor( currentCourse?.lessons_completion_percentage )
                        : 0
                    }%`,
                  }}
                  className="bg-primary w-1/2 h-full rounded-full"
                />
              </div>
              <span className="text-primary text-[11px] 2xl:text-[13px] font-[100] ">
                {currentCourse !== null
                  ? Math.floor(currentCourse?.lessons_completion_percentage )
                  : 0}
                % Completed
              </span>
            </div>

            {/* BUTTON FOR CTA */}
            <div>
              <div className="hidden lg:block">
                { currentCourse !== null && currentCourse.completed_lessons_count <= 0 ? (
                  <button
                    onClick={() =>{
                      router.push(`/dashboard/courses?id=${currentCourse?.id}&watch=""`)
                    }}
                    className="buttons-2 flex items-center gap-1 !px-16"
                  >
                    <p className="text-xs 2xl:text-sm text-white">
                      Enroll Course
                    </p>
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      router.push(
                        `/dashboard/courses?id=${currentCourse?.id}&watch=""`
                      )
                    }
                    className="buttons-2 flex items-center gap-1 !px-16"
                  >
                    <p className="text-xs 2xl:text-sm text-white">
                      Continue Course
                    </p>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* DIVIDER DIV  */}
          <div className="w-full py-[16px] 2xl:py-[30px] flex items-center gap-[12px]">
            <h3 className=" text-[17px] 2xl:text-[20px]">Latest Lessons</h3>
            <div className="flex-[1] h-[1px] bg-dividerGray" />
            <Link href="/">
              <p className="text-[13px] 2xl:text-[15px] underline">Show All</p>
            </Link>
          </div>

          {/* LATEST COURSES MAPPED OUT */}
          <div className="flex gap-[18px] 2xl:gap-[24px] justify-between">
          {latestLoading === true ? (
              <CardLoader />
            ) : (
              <>
                {latest ? (
                  latest.slice(0,3).map((item, idx) => (
                    <div className={`w-full md:w-[33%] ${idx === 2 && 'hidden md:flex' } ${idx === 1 && 'hidden sm:flex' }`}>
                      <LatestCard data={item} action={()=> {router.push(`/dashboard/courses?id=${item.id}`)}}/>
                    </div>
                  ))
                ) : (
                  <SomethingWentWrong />
                )}
              </>
            )}
          </div>

          {/* DIVIDER DIV  */}
          <div className="w-full py-[16px] 2xl:py-[30px] flex items-center gap-[12px]">
            <h3 className=" text-[17px] 2xl:text-[20px]">Ongoing Courses</h3>
            <div className="flex-[1] h-[1px] bg-dividerGray" />
            <Link href="/">
              <p className="text-[13px] 2xl:text-[15px] underline">Show All</p>
            </Link>
          </div>

          {/* ONGOING COURSES MAPPED OUT */}
          <div className="w-full flex items-start gap-[18px] 2xl:gap-[24px] flex-nowrap">
          {
                ongoingLoading === true ? (<CardLoader/>): (<>
                    {ongoing !== null && ongoing ? (
                    ongoing.slice(0,3).map((item, idx) => (
                        <div className={`w-full md:w-[33%] ${idx === 2 && 'hidden md:flex' } ${idx === 1 && 'hidden sm:flex' }`}>
                        <OngoingCard data={item} action={()=> {router.push(`/dashboard/courses?id=${item.course?.id}`)}} />
                        </div>
                    ))
                    ) : (
                    <SomethingWentWrong />
                    )}
                </>)
            }
          </div>

          <div className="h-[5rem]" />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
