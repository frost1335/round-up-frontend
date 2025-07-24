import BottomMenu from '@/components/BottomMenu/page'
import Link from 'next/link'
import React from 'react'
import { DepositIcon } from './icons'
import Image from 'next/image'

function page() {
    const list = [
        { name: "Round-Up", link: "/services/round-up", icon: DepositIcon },
        { name: "Кредит", link: "/services/credit", icon: DepositIcon },
        { name: "Payme Plus", link: "/services/payme-plus", icon: DepositIcon },
        { name: "Отсрочка платежа", link: "/services/installment", icon: DepositIcon },
        { name: "Payme Tickets", link: "/services/payme-tickets", icon: DepositIcon },
        {
            name: "Благотворительность", link: "/services/thank-you", icon: DepositIcon
        },
    ]


    return (
        <>
            <div className='h-full bg-[#F6F8F9]'>
                <h2 className='px-4 py-4 pt-6 text-lg font-semibold text-neutral-600'>Services</h2>
                <ul className='px-4 py-2 space-y-2.5'>
                    {list.map((item, index) => (
                        <li key={index}>
                            <Link className='flex items-center w-full px-4 py-2 gap-4 rounded-xl text-xs text-neutral-600 shadow-[2px_2px_6px_#ccc]' href={item.link}>
                                <span>
                                    <Image src={item.icon} width={42} height={42} alt='Service Icon' />
                                </span>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <BottomMenu />
        </>
    )
}

export default page