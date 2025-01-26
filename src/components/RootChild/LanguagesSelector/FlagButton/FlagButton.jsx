"use client"

import React from 'react'
import Image from 'next/image'

function FlagButton(props) {
	return (
		<button
			className='relative h-5 w-7 md:h-8 md:w-10 hover:h-7 hover:w-9 over:md:h-10 hover:md:w-12'
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
