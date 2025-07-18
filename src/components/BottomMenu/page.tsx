import Image from 'next/image'
import React from 'react'
import { CashFlowIcon, HomeIcon, PaymentsIcon, ServicesIcon, TransferIcon } from './icons'
import Link from 'next/link';

const link = [
    { name: 'Home', icon: HomeIcon, href: '/' },
    { name: 'Transfer', icon: TransferIcon, href: '/transfer' },
    { name: 'Payment', icon: PaymentsIcon, href: '/payment' },
    { name: 'Services', icon: ServicesIcon, href: '/services' },
    { name: 'Cash flow', icon: CashFlowIcon, href: '/cash-flow' },
];

function BottomMenu() {
    return (
        <div className='absolute px-4 py-2 bottom-0 left-0 right-0 bg-[#FFFFFF] shadow-[0_-2px_8px_rgba(0,0,0,0.1)] z-auto'>
            <ul className='flex justify-between text-xs text-center'>
                {link.map(({ name, icon, href }) => (
                    <li key={name} >
                        <Link href={href} className='flex flex-col align-middle text-[12px] text-[#757581]'>
                            <span className='text-[16px] mb-0.5 flex justify-center'>
                                <Image className='fill-amber-300 text-amber-300 text-sm' src={icon} alt={name} width={24} height={24} />
                            </span>
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BottomMenu