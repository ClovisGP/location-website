'use client'

import { useTranslation } from 'react-i18next';

function Home() {
	const { t } = useTranslation();

	return (
		<>
			<div className="flex h-full w-full flex-col items-center px-2 py-2">
				<div className="flex h-[60%] w-[60%] flex-col items-center justify-center space-y-8 text-center font-semibold">
					<div className="h-fit w-full flex-col items-center space-y-2">
						<div className="text-2xl">
							{t('home.welcomeTo')}
						</div>
						<div className="text-4xl">
							{t('common.parceller').toLocaleUpperCase()}
						</div>
					</div>
					<div className="text-lg">
						{t('home.welcomeText')}
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
