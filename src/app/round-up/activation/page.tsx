import React from 'react'
import Link from 'next/link'

import { ArrowLeft } from 'lucide-react'
import { RoundUpIcon, TBCIcon } from '../icons'
import Image from 'next/image'
import { Checkbox } from '@/components/ui/checkbox'

function page() {
    return (
        <div className='h-full flex flex-col bg-[#F6F8F9] justify-between'>
            <header className='flex items-center justify-between px-3 py-2 pt-6'>
                <Link href='/round-up' className='flex items-center gap-2 text-neutral-700 font-semibold p-1'>
                    <ArrowLeft className='h-6 w-6' />
                </Link>
            </header>
            <main className='px-3 py-5 flex flex-col items-center'>
                <h2 className='text-neutral-800 font-semibold text-2xl text-center mb-4'>
                    Enable Round-Up
                </h2>
                <p className='text-neutral-600 text-center px-4'>Rounding up your purchase will help you save money.</p>
                <div className='flex justify-center mt-2 mb-5'>
                    <Image className='h-48 w-48' src={RoundUpIcon} alt="Round Up Icon" />
                </div>
                <p className='flex items-center gap-3 text-neutral-900 font-semibold font-sans text-xl'><Image className='h-8 w-8' src={TBCIcon} alt="TBC Icon" /> TBC DEPOSIT</p>
            </main>
            <footer className='w-full px-3 py-7'>
                <div className='px-2 mb-6'>
                    <Checkbox className='border-[#2ACED0] checked:bg-[#2ACED0] border-2 text-lg' id="round-up" aria-label='Enable Round-Up' />
                    <label htmlFor="round-up" className='text-sm font-medium ml-2 text-neutral-600'>I accept the terms of `TBC Deposit`</label>
                </div>
                <Link href="/round-up/configuration" className='flex justify-center w-full px-3 py-3 rounded-xl bg-[#2ACED0] cursor-pointer'>
                    <span className='text-white font-semibold'>Activate Now</span>
                </Link>
            </footer>
        </div>
    )
}

export default page