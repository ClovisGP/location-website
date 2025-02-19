'use client'

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import ServicesHelper from '../utils/helpers/ServicesHelper';
import Loading from './loading';
import RoutesList from '../routes/Routeslist';
import CarouselCustom from '../components/CarouselCustom/CarouselCustom';
import HousePrevisu from '../components/HousePrevisu/housePrevisu';
import closPrevu from "@/public/images/locations/clos/garden&.jpg"
import mauragnePrevu from "@/public/images/locations/mauragne/tesT.jpg"
import bergeriePrevu from "@/public/images/locations/mauragne/tesT.jpg"
import biographiePicA from "@/public/images/locations/grapes_vak.jpg"
import biographiePicB from "@/public/images/locations/harvest_tractor.jpg"
import biographiePicC from "@/public/images/locations/harvest.jpg"
import Image from 'next/image';


function Home() {
	const { t } = useTranslation();
	const [picturesList, setPicturesList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	async function fetchPictures() {
		try {
			setIsLoading(true);
			const res = await fetch('/api/pictures');
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
								{/* Location's list */}
								<div className='w-full lg:w-[50%] h-fit space-y-2 py-1 px-1 md:py-2 md:px-5'>
									<div className='w-full h-32'>
										<HousePrevisu
											url={RoutesList.clos.path}
											picture={closPrevu}
											alt={t('common.previsualisation')}
											label={t('clos.label')}
											description={'clos.description'} />
									</div>
									<div className='w-full h-32'>
										<HousePrevisu
											url={RoutesList.mauragne.path}
											picture={mauragnePrevu}
											alt={t('common.previsualisation')}
											label={t('mauragne.label')}
											description={'mauragne.description'} />
									</div>
									<div className='w-full h-32'>
										<HousePrevisu
											url={RoutesList.bergerie.path}
											picture={bergeriePrevu}
											alt={t('common.previsualisation')}
											label={t('bergerie.label')}
											description={'bergerie.description'} />
									</div>
								</div>
								{/* Biographie */}
								<div className='w-full lg:w-[50%] h-fit space-y-2 py-1 px-1 md:py-2 md:px-5 md:space-y-4 lg:space-y-6'>
									<div className='h-60 md:h-72 w-full md:px-5 lg:px-16'>
										<div className='h-[50%] w-full flex flex-row'>
											<div className='h-full w-[50%] relative'>
												<Image
													src={biographiePicA}
													alt={t('common.illustration')}
													fill
													className="object-cover"
												/>
											</div>
											<div className='h-full w-[50%] relative'>
												<Image
													src={biographiePicB}
													alt={t('common.illustration')}
													fill
													className="object-cover"
												/>
											</div>
										</div>
										<div className='h-[50%] w-full'>
											<div className='h-full w-full relative'>
												<Image
													src={biographiePicC}
													alt={t('common.illustration')}
													fill
													className="object-cover"
												/>
											</div>
										</div>
									</div>
									<div className='w-full text-sm'>
										{
											t('home.biographie')
										}
									</div>
								</div>
							</div>
						</>
					)
				}
			</div>
		</>
	);
}

export default Home;
