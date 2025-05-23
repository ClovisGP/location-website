'use client'

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Loading from './loading';
import CarouselCustom from '../components/CarouselCustom/CarouselCustom';
import SVGText from '../components/SVGComponents/SVGText';
import shuffleArray from '@/src/utils/helpers/OtherHelper';

function Home() {
	const { t } = useTranslation();
	const [picturesList, setPicturesList] = useState([
		{
			label: "pic-label.foret_des_cedres",
			img: "/images/locations/presentation/foret_des_cedres.jpg"
		},
		{
			label: "pic-label.grapes_vat",
			img: "/images/locations/presentation/grapes_vak.jpg"
		},
		{
			label: "pic-label.robin_bird",
			img: "/images/locations/presentation/robin_bird.jpg"
		},
		{
			label: "pic-label.sivergue_waterfall",
			img: "/images/locations/presentation/sivergue_waterfall.jpg"
		}
	]);
	const [isLoading, setIsLoading] = useState(true);
	const [textDisplayed, setTextDisplayed] = useState(true);

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
			<div className="relative flex h-full w-full flex-col items-center bg-customGray">
				{
					isLoading ? (
						<div className='h-80 w-full md:h-96'>
							<Loading isDarkTheme={true} />
						</div>
					) : (
						<>
							<div className='absolute bottom-0 left-0 right-0 top-0'>
								<CarouselCustom
									list={picturesList}
									nameDisplayed={!textDisplayed} />
							</div>
							<button
								className={`absolute left-1 top-1 p-1 w-12 h-12 md:top-2 md:left-2 lg:top-5 lg:left-5 hover:opacity-100 hover:bg-opacity-100 hover:bg-stone-400 active:bg-stone-500 bg-stone-300 bg-opacity-95 z-30 rounded-md ${textDisplayed ? "" : "opacity-50"}`}
								onClick={() => { setTextDisplayed(!textDisplayed) }}
							>
								<SVGText />
							</button>
							<div className='flex h-full w-full items-center justify-center px-2 py-5'>
								{
									textDisplayed && (
										<div className={`z-10 flex h-[100%] w-[100%] flex-col space-y-3 items-center rounded-md bg-stone-300 bg-opacity-95 p-5 md:h-[50%] md:w-[60%] md:space-y-6 lg:h-[50%] lg:w-[40%] lg:space-y-10 overflow-y-auto`} >
											<div className='text-base font-bold md:text-lg'>
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
