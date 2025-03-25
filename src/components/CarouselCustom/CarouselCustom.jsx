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
 * @prop list - The list of object with a path, a category and a label
 * @prop nameDisplayed - OPTIONAL, is the footer with the discription is displayed
 * @prop fullname - OPTIONAL Is the name of the picture is the fullname. By default no
 */
function CarouselCustom(props) {
    const { t } = useTranslation();

    return (
        <div className='h-full w-full flex justify-center items-center'>
            <Carousel
                className={`h-full w-full `}
                plugins={[
                    Autoplay({
                        delay: 5000,
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
                                        picture={pic.path}
                                        alt={t(`${pic.category}.label`)}
                                        description={props.nameDisplayed ? props.fullname ? `${t(`${pic.category}.label`)} - ${t(`pic-label.${pic.label.toLowerCase()}`)}` : t(`pic-label.${pic.label.toLowerCase()}`) : null}
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