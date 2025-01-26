"use client"

import React from 'react'

/* Routing */
import RoutesList from "@/src/routes/Routeslist";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

/* Translation */
import { useTranslation } from 'react-i18next';

/**
 * Just the breadcrumb of the website
 */
function Breadcrumb() {
    const { t } = useTranslation();
    const pathname = usePathname().split("/").filter((x) => x); //Filter to remove the first element empty

    const findTranslation = (path) => {
        const matchedRoute = Object.values(RoutesList).find(route => route.path === path);
        return matchedRoute
            ? matchedRoute.label
            : "common.detailedView"; // If it is a id, we don't reconise it so ...
    }

    return (
        <div className='hidden h-full w-fit flex-row items-center space-x-1 px-3 py-1 text-lg font-semibold text-customBrown md:flex lg:space-x-2'>
            <Link
                key={"breadcrumb-home"}
                className='flex h-full items-center px-0.5 hover:font-bold'
                href={RoutesList.home.path} >
                {t(RoutesList.home.label)}
            </Link>
            {
                pathname && pathname.map((value) => {
                    return (
                        <div
                            key={`breadcrumb-case-${value}`}
                            className='flex h-full flex-row space-x-1 lg:space-x-2' >
                            <div className='flex h-full cursor-default items-center justify-center text-xl'>
                                {">"}
                            </div>
                            <Link
                                key={`breadcrumb-${value}`}
                                className='flex h-full items-center px-0.5 hover:text-lg'
                                href={value} >
                                {t(findTranslation(`/${value}`))}
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Breadcrumb;
