'use client'

import React from 'react'
import RoutesList from '@/src/routes/Routeslist';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import NavDropdown from './NavDropdown/NavDropdown';

function Navbar() {
    const { t } = useTranslation();

    return (
        <div className='flex h-full flex-row items-center justify-center space-x-2 py-5 md:space-x-5'>
            <Link
                href={RoutesList.home.path}
                className='flex h-full w-fit items-center justify-center px-2 text-base text-customBrown-alt hover:opacity-60 md:text-lg'>
                {
                    t('home.home')
                }
            </Link>
            <NavDropdown />
            <Link
                href={RoutesList.contact.path}
                className='flex h-full w-fit items-center justify-center px-2 text-base text-customBrown-alt hover:opacity-60 md:text-lg'>
                {
                    t('common.contact')
                }
            </Link>
        </div>
    )
}

export default Navbar