'use client'

/* React */
import React from 'react'


/* Translation */
import { useTranslation } from 'react-i18next';
import LanguagesSelector from '@/src/components/RootChild/LanguagesSelector/LanguagesSelector';
import Navbar from './Navbar/Navbar';


/**
 * The component that contains the children of the RootLayout
 */
function RootChild({ children }) {
    const { t } = useTranslation();

    return (
        <div className="relative flex h-full w-full flex-col">

            {/* Header */}
            <div className="relative flex h-[10%] w-full flex-wrap items-center justify-center bg-customGray px-3 py-0 text-base text-customBrown md:text-lg lg:text-base">
                <Navbar />
                <div className='absolute right-2 flex h-fit w-fit items-center top-2 justify-between space-x-5 md:right-3 md:top-3'>
                    <div className='h-full w-fit'>
                        <LanguagesSelector />
                    </div>
                </div>
            </div>

            {/* Body of a the page */}
            <div className={`flex h-[90%] w-full flex-row`}>
                <div className={`flex h-full w-full overflow-hidden`}>
                    <div className={`flex h-full w-full overflow-auto`}>
                        {children}
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 right-0 h-fit w-fit rounded-t-sm bg-customGray px-1 text-xs text-customBrown-alt opacity-10 hover:opacity-100'>
                ©
                {
                    new Date().getFullYear()
                }
                {
                    t('common.websiteRight')
                }
            </div>
        </div>
    )
}

export default RootChild;