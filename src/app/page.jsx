'use client'

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import ServicesHelper from '../utils/helpers/ServicesHelper';
import Loading from './loading';
import RoutesList from '../routes/Routeslist';
import CarouselCustom from '../components/CarouselCustom/CarouselCustom';
import HousePrevisu from '../components/HousePrevisu/housePrevisu';
import closPrevu from "@/public/images/locations/clos/garden&.jpg"
import mauragnePrevu from "@/public/images/locations/mauragne/garden.JPG"
import bergeriePrevu from "@/public/images/locations/mauragne/garden.JPG"

import Image from 'next/image';
import SVGText from '../components/SVGComponents/SVGText';


function Home() {
	const { t } = useTranslation();
	const [picturesList, setPicturesList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [textDisplayed, setTextDisplayed] = useState(true);

	async function fetchPictures() {
		try {
			setIsLoading(true);
			const res = await fetch('/api/pictures?directory=presentation');
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
			<div className="relative flex h-full w-full flex-col items-center ">
				{
					isLoading ? (
						<div className=' h-80 md:h-96 w-full'>
							<Loading />
						</div>
					) : (
						<>
							<div className='absolute right-0 left-0 bottom-0 top-0'>
								<CarouselCustom
									list={picturesList}
									nameDisplayed={!textDisplayed} />
							</div>
							<button
								className={`absolute left-1 top-1 p-1 w-12 h-12 md:top-2 md:left-2 lg:top-5 lg:left-5 hover:opacity-100 hover:bg-opacity-100 hover:bg-stone-500 bg-stone-400 bg-opacity-95 z-30 rounded-md ${textDisplayed ? "" : "opacity-50"}`}
								onClick={() => { setTextDisplayed(!textDisplayed) }}
							>
								<SVGText />
							</button>
							<div className='w-full h-full flex items-center justify-center px-2 py-5 '>
								{
									textDisplayed && (
										<div className={`w-[100%] h-[100%] md:w-[60%] md:h-[50%] lg:w-[40%] lg:h-[50%] bg-stone-300 p-5 space-y-5 md:space-y-8 lg:space-y-16 bg-opacity-95 z-10 flex flex-col items-center justify-center`} >
											<div className='font-bold text-base md:text-lg'>
												{
													t('home.welcome')
												}
											</div>
											<div className=''>
												{
													t('home.biographie')
												}
											</div>
										</div>
									)
								}
							</div>
						</>
					)
				}
			</div>
		</>
	);
}

export default Home;
