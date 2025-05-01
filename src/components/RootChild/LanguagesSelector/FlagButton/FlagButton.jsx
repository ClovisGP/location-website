"use client"

import React from 'react'
import Image from 'next/image'

function FlagButton(props) {
	return (
		<button
			className='relative h-4 w-5 hover:h-5 hover:w-6 md:h-7 md:w-9 hover:md:h-9 hover:md:w-10'
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
