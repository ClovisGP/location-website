'use client'

import { useTranslation } from 'react-i18next';
import Loading from '../loading';
import React, { useEffect, useState } from 'react'
import CarouselCustom from '@/src/components/CarouselCustom/CarouselCustom';
import Link from 'next/link';
import shuffleArray from '@/src/utils/helpers/OtherHelper';

function MauragnePage() {
	const { t } = useTranslation();
	const [picturesList, setPicturesList] = useState([
		{
			label: "pic-label.barbecue",
			img: "/images/locations/mauragne/barbecue.jpg"
		},
		{
			label: "pic-label.bathroom",
			img: "/images/locations/mauragne/bathroom.jpg"
		},
		{
			label: "pic-label.bed_room1",
			img: "/images/locations/mauragne/bed_room1.jpg"
		},
		{
			label: "pic-label.bed_room2",
			img: "/images/locations/mauragne/bed_room2.jpg"
		},
		{
			label: "pic-label.bed_room3",
			img: "/images/locations/mauragne/bed_room3.jpg"
		},
		{
			label: "pic-label.bed_room4",
			img: "/images/locations/mauragne/bed_room4.jpg"
		},
		{
			label: "pic-label.garden",
			img: "/images/locations/mauragne/garden.jpg"
		},
		{
			label: "pic-label.garden",
			img: "/images/locations/mauragne/garden&.jpg"
		},
		{
			label: "pic-label.kitchen",
			img: "/images/locations/mauragne/lavender_pool.jpg"
		},
		{
			label: "pic-label.living_room",
			img: "/images/locations/mauragne/living_room.jpg"
		},
		{
			label: "pic-label.living_room",
			img: "/images/locations/mauragne/living_room&.jpg"
		},
		{
			label: "pic-label.terrace_pool",
			img: "/images/locations/mauragne/terrace_pool.jpg"
		},
		{
			label: "pic-label.poolhouse",
			img: "/images/locations/mauragne/poolhouse.jpg"
		},
		{
			label: "pic-label.main_entrance",
			img: "/images/locations/mauragne/main_entrance.jpg"
		}
	]);
	const [isLoading, setIsLoading] = useState(true);

	async function shufflePictures() {
		try {
			setIsLoading(true);
			
			setPicturesList(shuffleArray(picturesList))
		} catch (error) {
			console.error("An error was caught in shufflePictures", error);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		shufflePictures();
	}, []);

	return (
		<>
			<div className="flex h-full w-full flex-col items-center space-y-5 px-2 py-2 md:space-y-10 lg:px-6 lg:py-4">
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
											t("mauragne.welcome")
										}
									</div>
									<div className='h-fit w-full px-2 text-sm'>
										{
											t("mauragne.description").split("\n").map((line, index) => (
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
													t("mauragne.descriptionIndoor").split("\n").map((line, index) => (
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
													t("mauragne.descriptionOutdoor").split("\n").map((line, index) => (
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
											t("mauragne.descriptionIndoor").split("\n").map((line, index) => (
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
											t("mauragne.descriptionOutdoor").split("\n").map((line, index) => (
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
											t("mauragne.descriptionGeo").split("\n").map((line, index) => (
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
											src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.685999277775!2d5.371940100000001!3d43.869909199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ca16474b0a1eff%3A0x2d84dec43eb46b1e!2s969%20Rte%20de%20Bonnieux%2C%2084400%20Apt!5e1!3m2!1sfr!2sfr!4v1742980622695!5m2!1sfr!2sfr"
											allowFullScreen
											loading="lazy"
										></iframe>
									</div>
								</div>
							</div>
						</>
					)
				}
			</div >
		</>
	)
}

export default MauragnePage;