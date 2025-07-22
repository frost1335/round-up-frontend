import BottomMenu from '@/components/BottomMenu/page'
import Link from 'next/link'
import React from 'react'

function page() {
    const list = [
        { name: "Round-Up", link: "/services/round-up" },
        { name: "Кредит", link: "/services/credit" },
        { name: "Payme Plus", link: "/services/payme-plus" },
        { name: "Отсрочка платежа", link: "/services/installment" },
        { name: "Payme Tickets", link: "/services/payme-tickets" },
        { name: "Благотворительность", link: "/services/thank-you" },
    ]


    return (
        <>
            <div className='h-full bg-[#F6F8F9]'>
                <h2 className='px-4 py-4 text-lg font-semibold text-neutral-600'>Services</h2>
                <ul className='px-4 py-2 space-y-2'>
                    {list.map((item, index) => (
                        <li key={index}>
                            <Link className='flex w-full px-5 py-4 rounded-xl shadow-md text-xs text-neutral-600' href={item.link}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <BottomMenu />
        </>
    )
}

export default page