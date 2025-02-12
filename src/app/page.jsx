'use client'

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import ServicesHelper from '../utils/helpers/ServicesHelper';
import Loading from './loading';
import LinkPic from '../components/LinkPic/LinkPic';
import RoutesList from '../routes/Routeslist';
import CarouselCustom from '../components/CarouselCustom/CarouselCustom';


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
			<div className="flex h-full w-full flex-col items-center px-2 py-2">
				{
					isLoading ? (
						<div className=' h-80 md:h-96 w-full'>
							<Loading />
						</div>
					) : (
						<div className='h-fit w-full'>
							<CarouselCustom
							list={picturesList} 
							buttonEnabled={true}/>
						</div>
					)
				}
			</div>
		</>
	);
}

export default Home;
