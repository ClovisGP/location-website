import React from 'react'

/**
 * Text's SVG
 * @param {string} strokeColor OPTIONAL The hexa color stroke.
 * @param {string} strokeWidth OPTIONAL The stoke width. By default 1.5
 */
function SVGText(props) {
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
            <path d="M5 3a2 2 0 0 0-2 2" />
            <path d="M19 3a2 2 0 0 1 2 2" />
            <path d="M21 19a2 2 0 0 1-2 2" />
            <path d="M5 21a2 2 0 0 1-2-2" />
            <path d="M9 3h1" />
            <path d="M9 21h1" />
            <path d="M14 3h1" />
            <path d="M14 21h1" />
            <path d="M3 9v1" />
            <path d="M21 9v1" />
            <path d="M3 14v1" />
            <path d="M21 14v1" />
            <line x1="7" x2="15" y1="8" y2="8" />
            <line x1="7" x2="17" y1="12" y2="12" />
            <line x1="7" x2="13" y1="16" y2="16" />
        </svg>
    )
}

export default SVGText;
