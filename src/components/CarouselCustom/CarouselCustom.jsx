"use client"

import React from 'react'
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
import Autoplay from "embla-carousel-autoplay"

/**
 * This component is a carousel of pictures that you can use to navigate
 * @prop list - The list of object with a path, a category and a label
 * @prop fullname - OPTIONAL Is the name of the picture is the fullname. By default no
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
            <Carousel 
            className={`h-full ${props.buttonEnabled ? 'lg:w-[90%] w-[70%]' : 'w-full'} `}
            plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
            >
                <CarouselContent className='h-36 md:h-60 lg:h-72 space-x-2'>
                    {
                        props.list.map((pic, index) => (
                            <CarouselItem
                                key={`carouselitem-${index}-${pic.label}`}
                                className="h-full basis-1/2 lg:basis-1/5 flex items-center justify-center" >
                                <div className='h-full w-full'>
                                    <LinkPic
                                        url={findUrl(pic.category)}
                                        picture={pic.path}
                                        alt={t(`${pic.category}.label`)}
                                        description={props.fullname ? `${t(`${pic.category}.label`)} - ${t(`pic-label.${pic.label.toLowerCase()}`)}` : t(`pic-label.${pic.label.toLowerCase()}`)}
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