import React from 'react'

/**
 * This component is a div that contain a picture and a sentence. It is mainly used by CarouselCustom's component.
 * @prop picture - The imported picture to display
 * @prop alt - The alternative text to display if the image has a problem
 * @prop description - OPTIONAL The description displayed at the bottom of the image
 */
function DivPic(props) {
    return (
        <div
            className='relative block h-full w-full shadow-md shadow-customGray hover:shadow-lg hover:shadow-customGray'
        >
            <img
                src={props.picture}
                alt={props.alt}
                className="absolute inset-0 w-full h-full object-cover"
            />
            {
                props.description && (
                    <div className='absolute bottom-0 right-0 left-0 h-fit overflow-hidden bg-customWhite/70 px-1 text-left'>
                        {props.description}
                    </div>
                )
            }
        </div>
    )
}

export default DivPic;

/*
Do you know the story of an optimistic guy?
As he fell from an huge building, he said on each floor "Jusqu'ici, tout va bien" (translation: "so far all is well") while laughing.
Clovis GILLES 01/2025
*/