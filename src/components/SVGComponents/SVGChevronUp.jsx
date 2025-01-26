import React from 'react'

/**
 * The svg of the arraw left svg
 * @param {string}  strokeColor OPTIONAL The hexa color stroke.
 * @param {string}  strokeWidth OPTIONAL The stoke width. By default 1.5
 * @param {Boolean} rotate OPTIONAL 90 to rotate to 90°. 180 to rotate to 180. -90 to rotate to -90°. By default no rotation
 */
function SVGChevronUp(props) {

    const rotate = () => {
        return props.rotate !== '180'
            ? props.rotate !== '90'
                ? props.rotate === '-90'
                    ? '-rotate-90' : ''
                : 'rotate-90'
            : 'rotate-180';
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={props.strokeColor ? props.strokeColor : 'hsl(var(--brown-base))'}
            strokeWidth={props.strokeWidth ? props.strokeWidth : '1.5'}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`h-full w-full ${rotate()}`} >
            <path d="m18 15-6-6-6 6" />
        </svg>
    )
}

export default SVGChevronUp;