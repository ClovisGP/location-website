import React from 'react'

/**
 * The home svg
 * @param {string} strokeColor OPTIONAL The hexa color stroke.
 * @param {string} strokeWidth OPTIONAL The stoke width. By default 1.5
 */
function SVGHome(props) {
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
        className="h-full w-full" >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
    )
}

export default SVGHome;