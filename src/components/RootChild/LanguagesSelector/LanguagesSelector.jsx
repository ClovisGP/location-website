"use client"

import React from 'react'
import i18nConfig from "@/i18n.config";
import { useTranslation } from 'react-i18next';
import FlagButton from "@/src/components/RootChild/LanguagesSelector/FlagButton/FlagButton"

function LanguagesSelector(props) {
    const { i18n } = useTranslation();

    /* Change language */
    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language);
    };

    /* Get Flag source based on language */
    function getFlagSrc(language) {
        switch (language) {
            case 'en':
                return "/images/flags/en.jpg";
            case 'de':
                return "/images/flags/de.jpg";
            case 'nl':
                return "/images/flags/nl.jpg";
            default:
                return "/images/flags/fr.jpg";
        }
    }

    return (
        <div className='flex h-full w-fit items-center space-x-3 md:space-x-5'>
            {i18nConfig.locales.map(language => (
                <FlagButton
                    key={language}
                    label={language}
                    onClick={() => handleLanguageChange(language)}
                    flag={getFlagSrc(language)} />
            )
            )}
        </div>
    )
}

export default LanguagesSelector
