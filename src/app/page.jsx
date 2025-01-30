'use client'

import { useTranslation } from 'react-i18next';

import { useEffect, useState } from 'react';

import ServicesHelper from '../utils/helpers/ServicesHelper';
import Loading from './loading';


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
				<div className=' h-80 md:h-96 w-full'>
					{
						isLoading ? (
							<Loading />
						) : (
							<Loading />//replace here
						)
					}
				</div>

				{/* <div className='bg-green-500 h-32 w-32'>
					<LinkPic
						url={RoutesList.mauragne.path}
						picture={picturesList.length > 0 ? `${picturesList[0].path}` : '/images/locations/mauragne/photsa.jpg'}
						alt={"hello"}
						description={picturesList.length > 0 ? `${picturesList[0].label}` : 'test'}
					/>
				</div>
				<div className='bg-green-800 h-52 w-52'>
					<LinkPic
						url={RoutesList.mauragne.path}
						picture={test3}
						alt={"hello"}
						description={"salut"}
					/>
				</div>
				<div className='bg-blue-500 h-32 w-52'>
					<LinkPic
						url={RoutesList.mauragne.path}
						picture={test3}
						alt={"hello"}
						description={"salut"}
					/>
				</div> */}
			</div>
		</>
	);
}

export default Home;
