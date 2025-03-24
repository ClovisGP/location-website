'use client'

import React from 'react'
import RoutesList from '@/src/routes/Routeslist';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import NavDropdown from './NavDropdown/NavDropdown';

function Navbar() {
    const { t } = useTranslation();

    return (
        <div className='flex items-center justify-center flex-row h-full py-5 space-x-2 md:space-x-5'>
            <Link
                href={RoutesList.home.path}
                className='h-full w-fit hover:opacity-60 flex items-center justify-center px-2 text-customBrown-alt text-base md:text-lg'>
                {
                    t('home.home')
                }
            </Link>
            <NavDropdown />
            <Link
                href={RoutesList.home.path}
                className='h-full w-fit hover:opacity-60 flex items-center justify-center px-2 text-customBrown-alt text-base md:text-lg'>
                {
                    t('common.contact')
                }
            </Link>
        </div>
    )
}

export default Navbar