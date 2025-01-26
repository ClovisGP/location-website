import React from 'react'

import '@/src/styles/globals.css';

/**
 * The menu svg React component
 * @param {string}  strokeColor OPTIONAL The hexa color stroke.
 * @param {string}  strokeWidth OPTIONAL The stoke width. By default 1.5
 */
function SVGMenu(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={props.strokeColor ? props.strokeColor : 'hsl(var(--brown-base))'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.5'}
        strokeLinecap="round"
        strokeLinejoin="round" 
        className="h-full w-full">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}

export default SVGMenu