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
			<div className="flex h-full w-full flex-col items-center space-y-6 px-2 py-2 md:space-y-16">
				{
					isLoading ? (
						<div className='h-80 w-full md:h-96'>
							<Loading />
						</div>
					) : (
						<>
							<div className='flex h-fit w-full flex-col items-center justify-center space-y-5 border-customBrown md:flex-row md:items-start md:justify-between md:space-x-5 md:space-y-0 lg:border-l-2 lg:p-2'>
								{/* Introduction */}
								<div className='flex h-fit w-full flex-col space-y-2 md:w-[40%]'>
									<div className='h-fit w-full text-lg font-bold'>
										{
											t("clos.welcome")
										}
									</div>
									<div className='h-fit w-full px-2 text-sm'>
										{
											t("clos.description").split("\n").map((line, index) => (
												<p key={index}>{line}</p>
											))
										}
									</div>
									<div className='hidden h-fit w-full flex-row items-start justify-center space-x-5 space-y-0 px-2 lg:flex'>
										{/* Indoor */}
										<div className='flex h-fit w-full flex-col space-y-2'>
											<div className='h-fit w-full font-semibold'>
												{
													t("common.indoor")
												}
											</div>
											<div className='h-fit w-full text-sm'>
												{
													t("clos.descriptionIndoor").split("\n").map((line, index) => (
														<p
															key={index}
															className='w-fit border-l-2 border-customBrown px-2'
														>
															{line}
														</p>
													))
												}
											</div>
										</div>
										{/* Outdoor */}
										<div className='flex h-fit w-full flex-col space-y-2'>
											<div className='h-fit w-full font-semibold'>
												{
													t("common.outdoor")
												}
											</div>
											<div className='h-fit w-full text-sm'>
												{
													t("clos.descriptionOutdoor").split("\n").map((line, index) => (
														<p
															key={index}
															className='w-fit border-l-2 border-customBrown px-2'
														>
															{line}
														</p>
													))
												}
											</div>
										</div>
									</div>
								</div>
								{/* Picture */}
								<div className='h-56 w-full md:h-72 md:w-[50%] lg:h-[100%] lg:min-h-96 lg:w-[45%]'>
									<CarouselCustom
										list={picturesList}
										nameDisplayed={true}
										time={2000} />
								</div>
							</div>
							<div className='flex h-fit w-full flex-col items-center justify-center space-y-5 md:flex-row md:items-start md:space-x-5 md:space-y-0 lg:hidden'>
								{/* Indoor */}
								<div className='flex h-fit w-full flex-col space-y-2'>
									<div className='h-fit w-full font-semibold'>
										{
											t("common.indoor")
										}
									</div>
									<div className='h-fit w-full text-sm'>
										{
											t("clos.descriptionIndoor").split("\n").map((line, index) => (
												<p
													key={index}
													className='w-fit border-l-2 border-customBrown px-2'
												>
													{line}
												</p>
											))
										}
									</div>
								</div>
								{/* Outdoor */}
								<div className='flex h-fit w-full flex-col space-y-2'>
									<div className='h-fit w-full font-semibold'>
										{
											t("common.outdoor")
										}
									</div>
									<div className='h-fit w-full text-sm'>
										{
											t("clos.descriptionOutdoor").split("\n").map((line, index) => (
												<p
													key={index}
													className='w-fit border-l-2 border-customBrown px-2'
												>
													{line}
												</p>
											))
										}
									</div>
								</div>
							</div>
							<div className='h-fit w-full space-y-2 pb-2'>
								<div className='h-fit w-full font-semibold'>
									{
										t("common.position")
									}
								</div>
								<div className='flex h-fit w-full items-start justify-center border-l-2 border-customBrown p-2 md:justify-between md:space-x-5'>
									<div className='hidden h-fit w-[45%] text-sm md:flex md:flex-col'>
										{
											t("clos.descriptionGeo").split("\n").map((line, index) => (
												<p
													key={index}
													className='w-fit'
												>
													{line}
												</p>
											))
										}
										<br />
										<p className='w-fit' >
											<u>
												<Link href="https://www.luberon-apt.fr/">
													{
														t("common.moreInfo")
													}
												</Link>
											</u>
										</p>
									</div>
									<div className='flex h-fit w-full items-center justify-center md:w-[50%] lg:w-[45%]'>
										<iframe
											className="h-56 w-[100%] rounded-lg shadow-lg md:h-full md:min-h-96"
											src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1979.3499603330858!2d5.3720785!3d43.8696996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ca1647457c2513%3A0x8be7fa8bbb4e015b!2s969%20Rte%20de%20Bonnieux%2C%2084400%20Apt!5e1!3m2!1sfr!2sfr!4v1742980766894!5m2!1sfr!2sfr"
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