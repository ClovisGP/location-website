"use client"

import React, { useEffect } from 'react'

import {
    Carousel,
    CarouselItem,
    CarouselNext,
    CarouselContent,
    CarouselPrevious
} from '../ui/carousel'

/**

 */
function CarouselCustom(props) {

    return (
        <div className='h-full w-full bg-blue-600 flex justify-center items-center'>
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="basis-1/3">
                        <div className='h-10 w-10 bg-blue-800'></div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <div className='h-10 w-10 bg-green-600'></div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <div className='h-10 w-10 bg-red-400'></div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <div className='h-10 w-10 bg-red-800'></div>
                    </CarouselItem>
                </CarouselContent>
                {
                    props.buttonEnabled && (
                        <>
                            <CarouselPrevious />
                            <CarouselNext />
                        </>
                    )
                }
            </Carousel>

        </div>
    )
}

export default CarouselCustom;