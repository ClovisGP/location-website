'use client'

import React from 'react'
import { useTranslation } from 'react-i18next';

/**
 * The loadign animation's component
 * @prop isDarkTheme - OPTIONAL By default it is set to false. Is the loading on a dark background
 */
function Loading(props) {
    const { t } = useTranslation();

    return (
        <div className='flex h-full w-full flex-col items-center justify-center space-y-5'>
            <div className={`h-24 w-24 animate-spin rounded-full border-4 border-solid ${props.isDarkTheme ? "border-customBrown-alt" : "border-customBrown"}  border-t-transparent`}></div>
            <div className={`w-full text-center text-sm  ${props.isDarkTheme ? "text-customBrown-alt" : "text-customBrown"} `}>
                {
                    t('common.loading')
                }...
            </div>
        </div>
    )
};

export default Loading;