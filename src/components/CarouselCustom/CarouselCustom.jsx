"use client"

import React, { useEffect } from 'react'
import LinkPic from '../LinkPic/LinkPic'
import RoutesList from '@/src/routes/Routeslist'
import { useTranslation } from 'react-i18next';
import {
    Carousel,
    CarouselItem,
    CarouselNext,
    CarouselContent,
    CarouselPrevious
} from '../ui/carousel'

/**
 * This component is a carousel of pictures that you can use to navigate
 * @prop list - The list of object with a path, a category and a label
 * @prop picture - The imported picture to display
 * @prop alt - The alternative text to display if the image has a problem
 * @prop description - OPTIONAL The description displayed at the bottom of the image
 */
function CarouselCustom(props) {
    const { t } = useTranslation();
    const categories = ["bergerie", "clos", "mauragne"];

    const findUrl = (category) => {
        const index = categories.indexOf(category);

        switch (index) {
            case 0:
                return RoutesList.bergerie.path;
            case 1:
                return RoutesList.clos.path;
            case 2:
                return RoutesList.mauragne.path;
            default:
                return RoutesList.home.path;
        }
    }

    return (
        <div className='h-full w-full flex justify-center items-center'>
            <Carousel className='h-full w-full bg-red-600'>
                <CarouselContent className='h-full w-full bg-purple-600'>
                    {
                        props.list.map((pic, index) => (
                            <CarouselItem
                                key={`carouselitem-${index}-${pic.label}`}
                                className="basis-1/2 h-full" >
                                <div className=' h-80 w-80'>
                                    <LinkPic
                                        url={findUrl(pic.category)}
                                        picture={pic.path}
                                        alt={pic.label}
                                        description={t(`pic-label.${pic.label.toLowerCase()}`)}
                                    />
                                </div>
                            </CarouselItem>
                        ))
                    }
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