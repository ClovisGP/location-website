import React from 'react'
import LinkPic from '../LinkPic/LinkPic';
import { useTranslation } from 'react-i18next';

function HousePrevisu(props) {
    const { t } = useTranslation();

    return (
        <div className={`w-full h-full flex flex-row`}>
            {/* Picture */}
            <div className={`w-[40%] md:w-[25%] h-full`}>
                <LinkPic
                    url={props.url}
                    picture={props.picture}
                    alt={props.alt}
                    description={t("common.more")}
                />
            </div>
            {/* Text */}
            <div className='w-[60%] md:w-[75%] h-full p-1 px-2 lg:px-4 overflow-y-auto text-sm'>
                {/* Label */}
                <div className='font-semibold pl-1 md:pl-3 text-base'>
                    {
                        t(props.label)
                    }
                </div>
                {/* Description */}
                <div className=''>
                    {
                        t(props.description)
                    }
                </div>
            </div>
        </div>
    )
}

export default HousePrevisu;