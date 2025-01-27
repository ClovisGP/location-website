'use client'

import { useTranslation } from 'react-i18next';

import CarouselCustom from '../components/CarouselCustom/CarouselCustom';
import LinkPic from '../components/LinkPic/LinkPic';

import test from "../../public/images/locations/photsa.jpg";

import test2 from "../../public/images/locations/tmp_1625226486805.jpg";
import test3 from "../../public/images/locations/zack.png";

import RoutesList from '../routes/Routeslist';


function Home() {
	const { t } = useTranslation();

	return (
		<>
			<div className="flex h-full w-full flex-col items-center px-2 py-2">

				<div className='bg-green-500 h-32 w-32'>
					<LinkPic
						url={RoutesList.mauragne.path}
						picture={test}
						alt={"hello"}
						description={"salut"}
					/>
				</div>
				<div className='bg-green-800 h-52 w-52'>
					<LinkPic
						url={RoutesList.mauragne.path}
						picture={test2}
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
				</div>
			</div>
		</>
	);
}

export default Home;
