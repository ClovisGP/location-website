'use client'

import { useTranslation } from 'react-i18next';
import Loading from '../loading';
import React, { useEffect, useState } from 'react'
import CarouselCustom from '@/src/components/CarouselCustom/CarouselCustom';
import ServicesHelper from '@/src/utils/helpers/ServicesHelper';

function ClosPage() {
	const { t } = useTranslation();
	const [picturesList, setPicturesList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	async function fetchPictures() {
		try {
			setIsLoading(true);
			const res = await fetch('/api/pictures?directory=clos');
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
												t("clos.welcome")
											}
										</div>
										<div className='w-full h-fit text-sm'>
											{
												t("clos.description").split("\n").map((line, index) => (
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
													t("clos.descriptionIndoor").split("\n").map((line, index) => (
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
													t("clos.descriptionOutdoor").split("\n").map((line, index) => (
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
											src="https://www.google.com/maps/place/969+Rte+de+Bonnieux,+84400+Apt/@43.8696996,5.3720785,18z/data=!4m6!3m5!1s0x12ca1647457c2513:0x8be7fa8bbb4e015b!8m2!3d43.8694446!4d5.3722407!16s%2Fg%2F11c4m7mhhs?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
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

export default ClosPage;