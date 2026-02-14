"use client"

import { ReactNode, useState } from "react"

// Define the ScheduleItem type
export type ScheduleItem = {
    id: number
    hour: string
    title: string
    content: ReactNode
    imageSrc: string
}

// Component to display the schedule
export const Schedule = ({ title, titleIcon, schedule }: { title: string, titleIcon: ReactNode, schedule: ScheduleItem[] }) => {
    const [currentItemIdx, setCurrentItemIdx] = useState<number>(0)

    // Function to go to the next item in the schedule
    const nextItem = () => {
        setCurrentItemIdx((prevIdx) => (prevIdx + 1) % schedule.length)
    }

    // Function to go to the previous item in the schedule
    const prevItem = () => {
        setCurrentItemIdx((prevIdx) => (prevIdx - 1 + schedule.length) % schedule.length)
    }

    const currentItem = schedule[currentItemIdx]

    if(schedule.length === 0)
    {
        return null
    }

    return (
        <div className="relative w-full h-[600px] flex items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${currentItem.imageSrc})` }}
            />

            {/*General title */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 
                     px-6 py-2 text-white">
                <h2 className="text-2xl sm:text-3xl gap-2 flex items-center justify-center font-playfair font-medium text-center leading-none">
                    {titleIcon}
                    {title}
                </h2>
            </div>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

            {/* Schedule Information */}
            <div
                className="
                    absolute top-40 left-1/2 -translate-x-1/2
                    z-20
                    flex flex-col items-center
                    text-white
                    p-6 space-y-3
                "
            >
                <span className="text-3xl font-bold">
                    {currentItem.title}
                </span>

                <span className="text-lg  text-center max-w-[600px]">
                    {currentItem.content}
                </span>
            </div>

            
            { currentItemIdx !== 0 && 
                <button
                onClick={prevItem}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 bg-gray-700 rounded-full opacity-75 hover:opacity-100 transition-all"
            >
                    &#8592;
                </button>

            }
            {
                currentItemIdx !== schedule.length - 1 && 
                 <button
                onClick={nextItem}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 bg-gray-700 rounded-full opacity-75 hover:opacity-100 transition-all"
                 >
                &#8594;
                </button>
            }
           
             {/* HORIZONTAL TIMELINE */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 
                            flex items-center gap-4 px-6 py-3">

                {/* Timeline line */}
                <div className="absolute left-4 right-4 top-1/2 h-px bg-white/30 -z-10" />

                {schedule.map((item, index) => {
                    const isActive = index === currentItemIdx

                    return (
                        <button
                            key={item.id}
                            onClick={() => setCurrentItemIdx(index)}
                            className={`
                                px-4 py-2 rounded-full text-sm font-medium
                                transition-all duration-200
                                ${
                                    isActive
                                        ? "bg-white text-black scale-110 shadow-lg"
                                        : "bg-black/60 text-white hover:bg-black/80"
                                }
                            `}
                        >
                            {item.hour}
                        </button>
                    )
                })}
            </div>

        </div>
    )
}