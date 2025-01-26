'use client'

import React from 'react'

import RouteList from '@/src/routes/Routeslist';
import NavUnit from '@/src/components/NavDropdown/NavUnit/NavUnit';

/**
 * The dropdown of the navigation component
 * @param {Boolean} isOpen The current displayed state of the list 
 * @param {function} onClickOption The function called when we click on a option
 */
function NavDropdown(props) {

    return (
        <>
            {/* Dropdown menu */}
            {props.isOpen &&
                <ul className='text-alterText absolute top-[10%] z-50 flex h-[90%] w-[65%] flex-col overflow-auto border-none bg-customBrown-alt px-0.5 shadow md:w-[45%] md:px-1 lg:w-[18%]'>
                    {Object.keys(RouteList)
                        .map(key => (
                            <NavUnit
                                key={RouteList[key].label}
                                label={RouteList[key].label}
                                icon={RouteList[key].icon}
                                path={RouteList[key].path}
                                onClickOption={props.onClickOption}
                                childrenRoute={RouteList[key].children}
                            />
                        ))}
                </ul>
            }
        </>
    )
}

export default NavDropdown