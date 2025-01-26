'use client'

/* React */
import React, { useEffect, useState } from 'react'

/* Components */
import NavDropdown from '@/src/components/NavDropdown/NavDropdown'
import CommonButton from '@/src/components/CommonButton/CommonButton';

/* Icons / Logos */
import SVGMenu from '@/src/components/SVGComponents/SVGMenu';

/* Routing */
import Breadcrumb from './Breadcrumb/Breadcrumb';

/* Translation */
import { useTranslation } from 'react-i18next';
import LanguagesSelector from '@/src/components/RootChild/LanguagesSelector/LanguagesSelector';


/**
 * The component that contains the children of the RootLayout
 */
function RootChild({ children }) {

    /**
     * Is the navigation menu is open
     */
    const [isOpen, setIsOpen] = useState(false);


    /**
     * The onClick fonction when we click on a option of the nav menu
     */
    const handleNav = () => {
        setIsOpen(false);
    }

    return (
        <div className="relative flex h-full w-full flex-col">

            {/* Header */}
            <div className="relative flex h-[10%] w-full flex-wrap items-center justify-start bg-customBrown-alt px-3 py-0 text-base text-customBrown md:text-lg lg:text-base">
                <div className='flex h-full w-[10%] md:w-[8%] lg:w-[3%] lg:justify-center lg:py-1'>
                    <CommonButton
                        name={`burgernav-button`}
                        complexContent={<SVGMenu />}
                        onClick={() => setIsOpen(!isOpen)}
                        size={"full"} />
                </div>
                <div className='h-full w-fit'>
                    <Breadcrumb />
                </div>
                <div className='absolute right-16 h-full w-fit md:right-20'>
                    <LanguagesSelector />
                </div>
            </div>

            {/* Body of a the page */}
            <div className={`w-full flex h-[90%] flex-row`}>
                <NavDropdown
                    isOpen={isOpen}
                    onClickOption={handleNav}
                />
                <div className={`flex h-full w-full overflow-hidden`}>
                    <div className={`flex h-full w-full overflow-auto`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RootChild;