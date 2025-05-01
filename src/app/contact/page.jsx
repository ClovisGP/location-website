'use client'

import { useTranslation } from 'react-i18next';
import React from 'react'
import DivPic from '@/src/components/DivPic/DivPic';

function ContactPage() {
    const { t } = useTranslation();

    return (
        <>
            <div className="relative flex h-full w-full flex-col items-center px-2 justify-center">
                <div className='absolute bottom-0 left-0 right-0 top-0 -z-10'>
                    <DivPic
                        picture={"/images/locations/presentation/sivergue_waterfall.jpg"}
                        alt={t('common.backgroundPic')}
                    />
                </div>
                <div className=' h-[95%] md:h-[90%] w-full md:w-[80%] lg:md:w-[60%] rounded-md bg-stone-300 bg-opacity-95 space-y-12 flex-col items-center mx-auto overflow-auto p-2 '>
                    <div className='w-full flex-col items-center space-y-4   '>
                        <div className='text-xl font-bold'>
                            {
                                t('contact.contactUs')
                            }:
                        </div>
                        <div className='border-l-2 border-customBrown px-2'>
                            <p className='w-fit px-2'>
                                {
                                    t('contact.name')
                                }: Denis GILLES
                            </p>
                            <p className='w-fit px-2'>
                                {
                                    t('contact.email')
                                }: denis.gilles0321@orange.fr
                            </p>
                            <p className='w-fit px-2'>
                                {
                                    t('contact.phone')
                                }: +33682856910
                            </p>
                        </div>
                    </div>
                    <div className=' flex-col items-center space-y-4 w-full text-sm'>
                        <div className='text-xl font-bold'>
                            {
                                t('legalMention.legalMention')
                            }:
                        </div>
                        <div className='flex-col items-center space-y-2'>
                            <p className='w-fit font-semibold text-base'>
                                1. {
                                    t('legalMention.siteEditor')
                                }
                            </p>
                            <div className='border-l-2 border-customBrown px-2'>
                                {
                                    t('legalMention.siteEditorText').split("\n").map((line, index) => (
                                        <p
                                            key={index}
                                            className='w-fit px-2'
                                        >
                                            {line}
                                        </p>
                                    ))
                                }
                                <p className='w-fit px-4 font-semibold'>
                                    Denis GILLES
                                </p>
                                <p className='w-fit px-4'>
                                    {
                                        t('contact.email')
                                    }: denis.gilles0321@orange.fr
                                </p>
                                <p className='w-fit px-4'>
                                    {
                                        t('contact.phone')
                                    }: +33682856910
                                </p>
                                <p className='w-fit px-4'>
                                    {
                                        t('contact.address')
                                    }: 969 Route de Bonnieux, 84400 Apt
                                </p>
                            </div>
                        </div>
                        <div className='flex-col items-center space-y-2'>
                            <p className='w-fit font-semibold text-base'>
                                2. {
                                    t('legalMention.siteHost')
                                }
                            </p>
                            <div className='border-l-2 border-customBrown px-2'>
                                {
                                    t('legalMention.siteHostText').split("\n").map((line, index) => (
                                        <p
                                            key={index}
                                            className='w-fit px-2'
                                        >
                                            {line}
                                        </p>
                                    ))
                                }
                                <p className='w-fit px-4 font-semibold'>
                                    HOSTINGER
                                </p>
                                <p className='w-fit px-4'>
                                    {
                                        t('contact.address')
                                    }: HOSTINGER INTERNATIONAL LTD, 61 Lordou Vironos Street, 6023 Larnaca
                                </p>
                                <p className='w-fit px-4'>
                                    {
                                        t('contact.website')
                                    }: <a href="https://www.hostinger.fr">https://www.hostinger.fr</a>
                                </p>
                            </div>
                        </div>
                        <div className='flex-col items-center space-y-2'>
                            <p className='w-fit font-semibold text-base'>
                                3. {
                                    t('legalMention.intellectualProperty')
                                }
                            </p>
                            <div className='border-l-2 border-customBrown px-2'>
                                {
                                    t('legalMention.intellectualPropertyText').split("\n").map((line, index) => (
                                        <p
                                            key={index}
                                            className='w-fit px-2'
                                        >
                                            {line}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='flex-col items-center space-y-2'>
                            <p className='w-fit font-semibold text-base'>
                                4. {
                                    t('legalMention.responsability')
                                }
                            </p>
                            <div className='border-l-2 border-customBrown px-2'>
                                {
                                    t('legalMention.responsabilityText').split("\n").map((line, index) => (
                                        <p
                                            key={index}
                                            className='w-fit px-2'
                                        >
                                            {line}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='flex-col items-center space-y-2'>
                            <p className='w-fit font-semibold text-base'>
                                5. {
                                    t('legalMention.personalData')
                                }
                            </p>
                            <div className='border-l-2 border-customBrown px-2'>
                                {
                                    t('legalMention.personalDataText').split("\n").map((line, index) => (
                                        <p
                                            key={index}
                                            className='w-fit px-2'
                                        >
                                            {line}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage;