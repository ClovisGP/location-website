import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

/**
 * This component is a link that contain a picture and a sentence. It is mainly used by CarouselCustom's component.
 * @prop url - The URL where it redirect
 * @prop picture - The imported picture to display
 * @prop alt - The alternative text to display if the image has a problem
 * @prop description - OPTIONAL The description displayed at the bottom of the image
 */
function LinkPic(props) {
    return (
        <Link
            className='relative block h-full w-full shadow-md shadow-customGray hover:shadow-lg hover:shadow-customGray'
            href={props.url}
        >
            <Image
                src={props.picture}
                alt={props.alt}
                fill
                className="object-cover"
            />
            {
                props.description && (
                    <div className='absolute bottom-0 right-0 left-0 h-fit overflow-hidden bg-customWhite/70 px-1 text-left'>
                        {props.description}
                    </div>
                )
            }
        </Link>
    )
}

export default LinkPic;

/*
Do you know the story of an optimistic guy?
As he fell from an huge building, he said on each floor "Jusqu'ici, tout va bien" (translation: "so far all is well") while laughing.
Clovis GILLES 01/2025
*/