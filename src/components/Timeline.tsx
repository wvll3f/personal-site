import React, { Fragment } from 'react'
import { EventsText, EventsTextProps } from '@/utils/eventos'
export type timelineProps = {
    heading: string,
    subHeading: string,
}

type TimelineProps = {
    prop: Array<EventsTextProps>
}

const Circle = () => {
    return (
        <div className=' rounded-full w-4 h-4 bg-blueLight mx-auto' >

        </div>
    )
}
const CardEvent = ({ heading, subHeading }: timelineProps) => {
    return (
        <div className=' bg-gradient-to-tr from-whiteBG to-white flex flex-col max-w-[500px] gap-y-2 border-b-2 border-t-slate-50 border-t-2 shadow-md rounded-xl p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl'>
            <h1 className='text-blueDark font-bold text-sm md:text-lg border-b' >{heading || 'nada'}</h1>
            <p className='text-[8px] md:text-sm text-gray-700' >{subHeading || 'nada'}</p>
        </div>
    )
}
const Pilar = () => {
    return (
        <div className='rounded-t-full rounded-b-full w-2 h-28 bg-blueDark mx-auto' >

        </div>
    )
}

function Timeline() {
    return (
        <div className='flex flex-col gap-y-3 w-full my-4'>
            <Circle />

            {EventsText.map((e: EventsTextProps, key: number) => {
                return (
                    <Fragment key={key}>
                        <div className={` grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto `}>
                            {e.direction === 'left' ? (
                                <CardEvent heading={e.heading} subHeading={e.subHeading} />
                            ) : (
                                <div> </div>
                            )
                            }

                            <Pilar />

                            {e.direction === 'right' ? (
                                <CardEvent heading={e.heading} subHeading={e.subHeading} />
                            ) : (
                                <div> </div>
                            )
                            }

                        </div>

                        {key < (EventsText.length - 1) && <Circle/>}
                    </Fragment>)
            })}

            <Circle />
        </div>
    );
};

export default Timeline
