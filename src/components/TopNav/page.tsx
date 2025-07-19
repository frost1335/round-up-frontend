import React from 'react'
import Link from 'next/link'

import { NotificationIcon, ProfileIcon, SearchIcon } from './icons'
import Image from 'next/image'

function TopNav() {
    return (
        <div className='absolute flex top-0 right-0 left-0 justify-between items-center py-6 px-4 bg-transparent'>
            <div>
                <Link href='/profile' className='p-2 flex rounded-full bg-white'>
                    <Image src={ProfileIcon} alt='Profile' width={16} height={16} />
                </Link>
            </div>
            <div className='flex items-center space-x-6'>
                <Link href='/search'>
                    <Image src={SearchIcon} alt='Search' width={22} height={22} />
                </Link>
                <Link href='/notifications'>
                    <Image src={NotificationIcon} alt='Notifications' width={22} height={22} />
                </Link>
            </div>
        </div>
    )
}

export default TopNav