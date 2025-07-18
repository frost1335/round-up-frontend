import React from 'react'
import Link from 'next/link'

import { NotificationIcon, ProfileIcon, SearchIcon } from './icons'
import Image from 'next/image'

function TopNav() {
    return (
        <div className='absolute flex top-0 right-0 left-0 justify-between items-center px-4 py-2 bg-transparent shadow-md'>
            <div>
                <Link href='/'>
                    <Image src={ProfileIcon} alt='Profile' />
                </Link>
            </div>
            <div>
                <Link href='/search'>
                    <Image src={SearchIcon} alt='Search' />
                </Link>
                <Link href='/notifications'>
                    <Image src={NotificationIcon} alt='Notifications' />
                </Link>
            </div>
        </div>
    )
}

export default TopNav