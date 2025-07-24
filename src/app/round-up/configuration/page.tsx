import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className='h-full flex flex-col items-center justify-between bg-gradient-to-r from-[#FFD4A3] to-[#E5CBFF]'>
            <header className='flex flex-col w-full items-center justify-start px-3 py-6 mb-14'>
                <Link href='/round-up' className='mb-4 flex w-full items-center gap-2 text-neutral-600 font-semibold p-1'>
                    <ArrowLeft className='h-6 w-6' />
                </Link>
                <div>
                    <h2 className='text-xl text-neutral-700 mb-2 text-center'>Configuration</h2>
                    <p className='text-sm text-neutral-500 text-center'>Configure as you wish</p>
                </div>
            </header>

            <main className='flex flex-1 flex-col items-center justify-center w-full px-3 py-3 shadow-[0_-40px_50px_15px_rgba(0,0,0,0.1)] bg-[#F6F8F9] shadow-[#F6F8F9]'>
                <ul className='flex items-center justify-between w-full mb-6 text-neutral-600 font-semibold text-sm'>
                    <li>1000</li>
                    <li>5000</li>
                    <li>10000</li>
                </ul>
                <Slider className='bg-[#2ACED0] text-[#2ACED0]' defaultValue={[5000]} max={10000} step={5000} color='#2ACED0' />
            </main>

            <footer className='bg-[#F6F8F9] w-full px-3 py-7 flex flex-col'>
                <div className='px-2 mb-6'>
                    <Checkbox className='border-[#2ACED0] checked:bg-[#2ACED0] border-2 text-lg' id="round-up" aria-label='Enable Round-Up' />
                    <label htmlFor="round-up" className='text-sm font-medium ml-2 text-neutral-600'>I accept the terms of `TBC Deposit`</label>
                </div>
                <Button variant='default' size={'lg'} color='#2ACED0' className='w-full px-5 py-6 bg-[#2ACED0]'>Primary Button</Button>
            </footer>
        </div>
    )
}

export default page