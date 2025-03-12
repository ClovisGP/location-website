'use client'

import React from 'react'
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import loadingGif from '@/public/animations/loading.gif'

/**
 * The loadign animation's component
 */
function Loading() {
    const { t } = useTranslation();

    return (
        <div className='h-full w-full flex items-center justify-center flex-col space-y-5'>
            <div className="h-24 w-24 border-4 border-customBrown border-solid border-t-transparent rounded-full animate-spin"></div>
            <div className='w-full text-center text-sm'>
                {
                    t('common.loading')
                }...
            </div>
        </div>
    )
};

export default Loading;