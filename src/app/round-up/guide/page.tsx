import React from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

function page() {
    return (
        <div className='h-full flex flex-col'>
            <header className='flex items-center justify-between px-3 py-2 pt-5'>
                <Link href='/round-up' className='flex items-center gap-2 text-neutral-700 font-semibold p-1'>
                    <ArrowLeft className='h-6 w-6' />
                </Link>
                <span className='text-neutral-700 font-semibold'>
                    Why Round Up?
                </span>
            </header>
            <main>
                <div className='px-3 py-5'>
                    <h2 className='text-neutral-700 font-semibold text-lg mb-4'>What is Round Up?</h2>
                    <p className='text-neutral-600 mb-4'>
                        Round Up is a feature that allows you to automatically round up your transactions to the nearest dollar and save the difference.
                    </p>
                    <p className='text-neutral-600 mb-4'>
                        For example, if you make a purchase of $3.50, Round Up will save $0.50 for you.
                    </p>
                    <p className='text-neutral-600 mb-4'>
                        This way, you can effortlessly save money without even noticing it!
                    </p>
                </div>
            </main>
            <footer className='mt-auto w-full px-3 py-7'>
                <Link href={"/round-up/activation"} className='flex justify-center w-full px-3 py-3 rounded-xl bg-[#0D0721]'>
                    <span className='text-[#00C0C9] font-semibold'>Next</span>
                </Link>
            </footer>
        </div>
    )
}

export default page