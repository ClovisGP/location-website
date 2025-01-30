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
        <div className='h-full w-full block relative'>
            <Image
                src={loadingGif}
                alt={t('common.loading')}
                fill
                className={`object-contain`} />
        </div>
    )
};

export default Loading;