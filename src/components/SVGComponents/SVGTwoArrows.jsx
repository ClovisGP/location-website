import React from 'react'

/**
 * Sorting arrows
 * @param {string} strokeColor OPTIONAL The hexa color stroke.
 * @param {string} strokeWidth OPTIONAL The stoke width. By default 1.5
 */
function SVGTwoArrows(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none" stroke={props.strokeColor ? props.strokeColor : 'hsl(var(--brown-base))'}
            strokeWidth={props.strokeWidth ? props.strokeWidth : '1.5'}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-full w-full" >
            <path d="m21 16-4 4-4-4" />
            <path d="M17 20V4" />
            <path d="m3 8 4-4 4 4" />
            <path d="M7 4v16" />
        </svg>
    )
}

export default SVGTwoArrows;
