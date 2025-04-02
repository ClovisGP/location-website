import { Inter } from "next/font/google";
import "@/src/styles/globals.css";

/* Components */
import RootChild from "@/src/components/RootChild/RootChild";

/* Translations */
import initTranslations from '@/src/utils/translations/i18n';
import TranslationsProvider from '@/src/components/TranslationsProvider/TranslationsProvider';

/* Toatify */
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Denis Gilles - Locations",
	description: "A website to show my rentals.",
	icons: { icon: '/icon.ico', },
};

async function RootLayout({ children }) {
	const { resources } = await initTranslations(['common']);

	return (
		<html>
			<body className={inter.className}>
				<TranslationsProvider
					namespaces={['common']}
					resources={resources} >
					<ToastContainer />
					<RootChild>
						{children}
					</RootChild>
				</TranslationsProvider>
			</body>
		</html>
	);
}

export default RootLayout;