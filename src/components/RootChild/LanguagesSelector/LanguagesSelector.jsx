"use client"

import React from 'react'
import i18nConfig from "@/i18n.config";
import { useTranslation } from 'react-i18next';
import FlagButton from "@/src/components/RootChild/LanguagesSelector/FlagButton/FlagButton"

import FRFlag from "@/public/images/flags/fr.jpg";
import ENFlag from "@/public/images/flags/en.jpg";
import DEFlag from "@/public/images/flags/de.jpg";
import NLFlag from "@/public/images/flags/nl.jpg";

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
                return ENFlag;
            case 'de':
                return DEFlag;
            case 'nl':
                return NLFlag;
            default:
                return FRFlag;
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
