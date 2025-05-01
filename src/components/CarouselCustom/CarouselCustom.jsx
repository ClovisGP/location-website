"use client"

import React from 'react'
import DivPic from '../DivPic/DivPic'
import { useTranslation } from 'react-i18next';
import {
    Carousel,
    CarouselItem,
    CarouselContent,
} from '../ui/carousel'
import Autoplay from "embla-carousel-autoplay"

/**
 * This component is a carousel of pictures that you can use to navigate
 * @prop list - The list of object with a img and label
 * @prop time - OPTIONAL Is the time in milliseconds when the pictures change. By default, it is 5000.
 */
function CarouselCustom(props) {
    const { t } = useTranslation();

    return (
        <div className='h-full w-full flex justify-center items-center'>
            <Carousel
                className={`h-full w-full `}
                plugins={[
                    Autoplay({
                        delay: props.time ? props.time : 5000,
                    }),
                ]}
            >
                <CarouselContent className='h-full w-full '>
                    {
                        props.list.map((pic, index) => (
                            <CarouselItem
                                key={`carouselitem-${index}-${pic.label}`}
                                className="h-full flex items-center justify-center flex-[0_0_100%]" >
                                <div className='h-full w-full'>
                                    <DivPic
                                        picture={pic.img}
                                        alt={t(pic.label)}
                                        description={props.nameDisplayed ? t(pic.label) : null}
                                    />
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
            </Carousel>

        </div>
    )
}

export default CarouselCustom;