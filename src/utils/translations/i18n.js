import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import i18nConfig from '@/i18n.config';


export default async function initTranslations(namespaces, i18nInstance, resources) {

	/* Create the instance of i18n */
	i18nInstance = i18nInstance || createInstance();
	
	/* Use the plugin to work with React App */
	i18nInstance.use(initReactI18next);
	

	/* Load the translations from the file */
	if (!resources) {
		i18nInstance.use(
			resourcesToBackend(
				(language, namespace) =>
					import(`@/public/locales/${language}/${namespace}.json`)
			)
		);
	}

	/* Init the Instance of i18n */
	await i18nInstance.init({
		lng: i18nConfig.defaultLocale,
		resources,
		fallbackLng: i18nConfig.defaultLocale,
		supportedLngs: i18nConfig.locales,
		defaultNS: namespaces[0],
		fallbackNS: namespaces[0],
		ns: namespaces,
		preload: resources ? [] : i18nConfig.locales,
	});

	return {
		/**
		 * The translation function of i18n
		 * @use t('translationKey')
		 */
		t: i18nInstance.t,

		/**
		 * The instance of i18n
		 */
		i18n: i18nInstance,

		/**
		 * The resources of the i18n instance (i18nInstance.services.resourceStore.data)
		 */
		resources: i18nInstance.services.resourceStore.data
	};
}