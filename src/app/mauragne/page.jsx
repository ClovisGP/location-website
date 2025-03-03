'use client'

import { useTranslation } from 'react-i18next';
import Loading from '../loading';
import React, { useEffect, useState } from 'react'
import CarouselCustom from '@/src/components/CarouselCustom/CarouselCustom';
import ServicesHelper from '@/src/utils/helpers/ServicesHelper';

function MauragnePage() {
	const { t } = useTranslation();
	const [picturesList, setPicturesList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	async function fetchPictures() {
		try {
			setIsLoading(true);
			const res = await fetch('/api/pictures?directory=mauragne');
			if (!ServicesHelper.isError(res.status)) {
				const response = await res.json();
				setPicturesList(response.body)
			}
		} catch (error) {
			console.error("An error was caught in fetchPictures", error);
		} finally {
			setIsLoading(false);
		}
	}


	useEffect(() => {
		fetchPictures();
	}, []);

	return (
		<>
			<div className="flex h-full w-full flex-col items-center px-2 py-2 space-y-6 md:space-y-16">
				{
					isLoading ? (
						<div className=' h-80 md:h-96 w-full'>
							<Loading />
						</div>
					) : (
						<>
							<div className='h-fit w-full'>
								<CarouselCustom
									list={picturesList}
									buttonEnabled={true} />
							</div>
							<div className='w-full h-fit flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5'>
								{/* Left */}
								<div className='w-full lg:w-[50%] h-fit space-y-5 py-1 px-1 md:py-2 md:px-5'>
									{/* Description */}
									<div className='w-full h-fit'>
										<div className='w-full h-fit font-bold md:text-lg'>
											{
												t("mauragne.welcome")
											}
										</div>
										<div className='w-full h-fit text-sm'>
											{
												t("mauragne.description").split("\n").map((line, index) => (
													<p key={index}>{line}</p>
												))
											}
										</div>
									</div>
									<div className='w-full h-fit space-y-5 md:space-y-0 md:flex md:flex-row md:justify-between md:items-center'>
										{/* Indoor */}
										<div className='w-full h-fit overflow-auto'>
											<div className='w-full h-fit font-semibold'>
												{
													t("common.indoor")
												}
											</div>
											<div className='w-full h-fit text-sm'>
												{
													t("mauragne.descriptionIndoor").split("\n").map((line, index) => (
														<p key={index}>{line}</p>
													))
												}
											</div>
										</div>
										{/* Outdoor */}
										<div className='w-full h-fit overflow-auto'>
											<div className='w-full h-fit font-semibold'>
												{
													t("common.outdoor")
												}
											</div>
											<div className='w-full h-fit text-sm'>
												{
													t("mauragne.descriptionOutdoor").split("\n").map((line, index) => (
														<p key={index}>{line}</p>
													))
												}
											</div>
										</div>
									</div>
								</div>
								{/* Right */}
								<div className='w-full lg:w-[50%] h-fit space-y-2 py-1 px-1 md:py-2 md:px-5 md:space-y-4 lg:space-y-6'>
									<div className='w-full h-fit font-semibold'>
										{
											t("common.position")
										}
									</div>
									<div className='w-full h-fit flex items-center justify-center p-3'>
										<iframe
											className="w-[100%] h-64 md:h-80 rounded-lg shadow-lg"
											src="https://www.google.com/maps/place/969+Rte+de+Bonnieux,+84400+Apt/@43.869913,5.3693652,17z/data=!3m1!4b1!4m6!3m5!1s0x12ca16474b0a1eff:0x2d84dec43eb46b1e!8m2!3d43.8699092!4d5.3719401!16s%2Fg%2F11c1hz3_ks?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
											allowFullScreen
											loading="lazy"
										></iframe>
									</div>
								</div>
							</div>
						</>
					)
				}
			</div>
		</>
	)
}

export default MauragnePage;