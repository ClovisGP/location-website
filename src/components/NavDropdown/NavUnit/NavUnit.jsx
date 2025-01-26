'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import SVGChevronUp from '@/src/components/SVGComponents/SVGChevronUp';
import { useTranslation } from 'react-i18next';
import ToastifyHelper from '@/src/utils/helpers/ToastifyHelper';

/**
 * The component that represent a link on the NavDropdown
 * @param {*} label The name displayed
 * @param {*} icon The icon displayed
 * @param {*} path The path where the link redirects
 * @param {*} childrenRoute OPTIONNAL The children of the page
 * @param {*} restrainMode OPTIONNAL Is the restain mode active. By default no.
 * @param {function} onClickOption The function called when we click on a option
 */
function NavUnit(props) {

	/* Children on Layout */
	const [childrenNumber, setchildrenNumber] = useState(0);

	/* Children Deploy */
	const [isdeployed, setIsdeployed] = useState(false);

	/* Translation */
	const { t } = useTranslation();

	const countChildren = () => {
		let countdisplayOnNav = 0;
		for (const key in props.childrenRoute) {
			if (props.childrenRoute.hasOwnProperty(key) && props.childrenRoute[key].displayOnNav) {
				countdisplayOnNav++;
			}
		}
		return countdisplayOnNav;
	}

	const handleLinkClick = () => {
		try {
			props.onClickOption(); // Close the nav menu
		} catch (error) {
            ToastifyHelper.information(t('error.errorOccurs'));
        };
	}

	useEffect(() => {
		setchildrenNumber(countChildren());
	}, [props.childrenRoute]);

	return (
		<>
			<li
				key={props.label}
				className={`my-1 flex h-10 w-full items-center justify-start px-2 md:h-14 lg:h-12`}>
				<Link
					href={props.path}
					className={`m-0 flex h-full w-full items-center ${props.restrainMode ? 'justify-center' : 'justify-start'} px-1 py-0.5 text-base font-semibold hover:text-lg md:px-2 md:py-1 md:text-xl hover:md:text-2xl lg:text-lg hover:lg:text-xl`}
					onClick={handleLinkClick}>
					<div className='h-[100%] w-auto'>
						{props.icon}
					</div>
					{
						props.restrainMode ||
						<div
							className='ml-2 text-customBrown'>
							{t(props.label)}
						</div>
					}
				</Link>
				{
					props.restrainMode ||
					<>
						{
							childrenNumber > 0 &&
							<div className="relative ml-auto flex">
								<button
									className='flex'
									onClick={() => setIsdeployed(!isdeployed)}>
										<SVGChevronUp rotate={isdeployed ? '' : '180'} />
								</button>
							</div>
						}
					</>
				}
			</li>
			{
				props.restrainMode ||
				<>
					{
						childrenNumber > 0 &&
						<>
							{
								isdeployed &&
								Object.keys(props.childrenRoute).filter(key => props.childrenRoute[key].displayOnNav).map((key) => {
									return (
										<li
											key={props.label + props.childrenRoute[key].title}
											className="justify-star text-md my-1 flex h-10 w-full items-center px-4 hover:text-lg">
											<Link
												key={props.label + props.childrenRoute[key].title}
												href={props.path + props.childrenRoute[key].path}
												className='block w-full px-4 text-left'
												onClick={() => { setIsdeployed(!isdeployed); handleLinkClick() }}>
												{t(props.childrenRoute[key].title)}
											</Link>
										</li>
									)
								})}
						</>
					}
				</>
			}
		</>
	)
}

export default NavUnit;