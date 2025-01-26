"use client"

import React, { useEffect } from 'react'


/**
 * The common button of the app
 * @param {string} name The name of the component.
 * @param {string} contentToDisplay The content displayed. Can be a text
 * @param {string} complexContent OPTIONNAL If the content display not a text.
 * @param {string} type OPTIONNAL The type of the button. By default it is button
 * @param {string} size OPTIONNAL The size of the button. ['full', 'full-w', 'full-h']. By default it is full
 * @param {string} colorType OPTIONNAL The type of the button that define the color: ['mauve', 'salmon', 'transparante']. By default, it is set to transparante
 * @param {boolean} isDisabled OPTIONNAL By default, it false
 * @param {function} onClick OPTIONNAL The onClick function
 * @param {boolean} isProcessing OPTIONNAL Is the cursor is in progress mode
 * @param {boolean} isLoading OPTIONNAL Is the button in loading mode (pulse anim)
 */
function CommonButton(props) {

	/**
	 * Choose the background of the button
	 */
	const chooseColor = () => {
		return props.colorType !== 'salmon' ?
			props.colorType === 'mauve' ?
				`bg-customMauve ${!(props.isDisabled || props.isProcessing) && 'hover:bg-customMauve-hover'} border-customMauve-alt border-b-2` : `bg-transparant hover:bg-transparant`
			: `bg-customSalmon ${!(props.isDisabled || props.isProcessing) && 'hover:bg-customSalmon-hover'} border-customSalmon-alt border-b-2`;
	}

	/**
	 * Choose the size the button
	 */
	const chooseSize = () => {
		return props.size !== 'full-w' ?
			props.size === 'full-h' ?
				'w-fit h-full' : 'w-full h-full'
			: 'h-fit w-full';
	}

	return (
		<button
			id={props.name ? props.name : 'button'}
			type={props.type ? props.type : "button"}
			className={`flex ${chooseSize()} ${props.isProcessing && 'cursor-progress'} ${props.isDisabled && ' cursor-not-allowed'} ${props.isLoading && 'animate-pulse'} text-customWhite ${chooseColor()} justify-center items-center focus:outline-none ` +
				`font-semibold rounded text-base ${props.complexContent ? 'px-1 py-1' : 'px-5 py-2.5'}  text-center`}
			disabled={props.isDisabled || props.isProcessing}
			onClick={props.onClick}>
			<div className={`flex h-full w-full items-center justify-center`}>
				{
					props.contentToDisplay
				}
				{
					props.complexContent &&
					<div className='flex h-full w-full items-center justify-center'>
						{props.complexContent}
					</div>
				}
			</div>
		</button>
	)
}

export default CommonButton