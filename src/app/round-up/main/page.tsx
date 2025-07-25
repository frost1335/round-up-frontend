import { Bolt, ChevronRight, History, TrendingUp, Wallet, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className='h-full bg-[#F6F8F9] flex flex-col'>
            <header className='flex flex-col px-3 py-2 pt-6'>
                <Link href='/services' className='w-full flex items-center justify-end gap-2 text-neutral-700 font-semibold p-1'>
                    <X className='h-6 w-6' />
                </Link>
                <div className='px-3'>
                    <h2 className='text-xl text-neutral-700 mb-2 font-semibold'>Round-Up</h2>
                    <p className='text-sm text-neutral-500'>Automatic savings with every purchase</p>
                </div>
            </header>
            <main className='pt-6 px-2'>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col px-5 py-4 rounded-4xl bg-[#A2EDB7]'>
                        <header className='flex items-center gap-3 mb-6'>
                            <span className='bg-[#B5FCCD] flex items-center justify-center p-2 rounded-lg shadow'>
                                <Wallet className='h-7 w-7 text-neutral-500' />
                            </span>
                            <h3 className='text-neutral-500 font-medium text-sm'>In Deposit</h3>
                        </header>
                        <p className='text-xl font-medium text-neutral-800 font-sans mb-2'>400 000.00 UZS</p>
                        <span className='text-xs text-neutral-500'>
                            +12% yearly percentage
                        </span>
                    </div>
                    <div className='flex flex-col px-5 py-4 rounded-4xl bg-[#C0AAFF]'>
                        <header className='flex items-center gap-3 mb-6'>
                            <span className='bg-[#DAD2FF] flex items-center justify-center p-2 rounded-lg shadow'>
                                <TrendingUp className='h-7 w-7 text-neutral-500' />
                            </span>
                            <h3 className='text-neutral-500 font-medium text-sm'>In Deposit</h3>
                        </header>
                        <p className='text-xl font-medium text-neutral-800 font-sans mb-2'>1 230 000.00 UZS</p>
                        <span className='text-xs text-neutral-500'>
                            +12% yearly percentage
                        </span>
                    </div>
                </div>
            </main>
            <footer className='flex flex-col justify-end h-full pb-8'>
                <ul className='flex flex-col gap-3 w-full px-2 py-3'>
                    <li>
                        <Link className='flex items-center w-full px-4 py-3 bg-neutral-200 rounded-xl text-neutral-800 font-medium' href="/round-up/history"><History className='w-6 h-6 mr-3' /> History <ChevronRight className='ml-auto'/></Link>
                    </li>
                    <li>
                        <Link className='flex items-center w-full px-4 py-3 bg-neutral-200 rounded-xl text-neutral-800 font-medium' href="/round-up/configuration"><Bolt className='w-6 h-6 mr-3' /> Configuration <ChevronRight className='ml-auto' /></Link>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default page