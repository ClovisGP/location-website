import React from 'react'

/**
 * The menu svg React component
 * @param {*} strokeColor OPTIONAL The stroke color. By default #f3c846
 */
function SVGMore(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={props.strokeColor ? props.strokeColor : '#f3c846'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
        </svg>
    )
}

export default SVGMore