"use client"

import React from 'react'
import Image from 'next/image'

function FlagButton(props) {
	return (
		<button
			className='relative h-3 w-4 hover:h-4 hover:w-5 md:h-8 md:w-10 hover:md:h-10 hover:md:w-12'
			id={props.label}
			onClick={props.onClick}>
			<Image
				src={props.flag}
				alt={props.label}
				className='h-auto w-full' />
		</button>
	)
}

export default FlagButton
