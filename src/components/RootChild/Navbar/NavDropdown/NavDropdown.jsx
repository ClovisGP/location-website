'use client'

import React, { useState } from 'react'
import RoutesList from '@/src/routes/Routeslist';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

function NavDropdown() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='relative h-full w-fit'>
            <button
                className='h-full w-fit hover:opacity-60 flex items-center justify-center px-2 text-customBrown-alt text-base md:text-lg'
                onClick={() => setIsOpen(!isOpen)}
            >
                {
                    t('common.location')
                }
            </button>
            {
                isOpen &&
                (
                    <div className={`absolute top-14 lg:top-16 -left-16 bg-gray-600 shadow-lg rounded-md w-64 z-50 space-y-1 py-1`}>
                        <Link
                            href={RoutesList.clos.path}
                            className='h-full w-fit hover:opacity-60 flex items-center justify-center px-2 text-customBrown-alt text-sm md:text-base'>
                            {
                               "-> " + t('clos.label')
                            }
                        </Link>
                        <Link
                            href={RoutesList.mauragne.path}
                            className='h-full w-fit hover:opacity-60 flex items-center justify-center px-2 text-customBrown-alt text-sm md:text-base'>
                            {
                                "-> " + t('mauragne.label')
                            }
                        </Link>
                        <Link
                            href={RoutesList.bergerie.path}
                            className='h-full w-fit hover:opacity-60 flex items-center justify-center px-2 text-customBrown-alt text-sm md:text-base'>
                            {
                                "-> " + t('bergerie.label')
                            }
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default NavDropdown