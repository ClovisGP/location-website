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
			<div className="relative flex h-full w-full flex-col items-center px-2 py-2 space-y-6 md:space-y-16 ">
				{
					isLoading ? (
						<div className=' h-80 md:h-96 w-full'>
							<Loading />
						</div>
					) : (
						<>
							<div className='absolute right-1 left-1 bottom-1 top-1'>
								<CarouselCustom
									list={picturesList}
									fullname={true} />
							</div>
						</>
					)
				}
			</div>
		</>
	);
}

export default Home;
