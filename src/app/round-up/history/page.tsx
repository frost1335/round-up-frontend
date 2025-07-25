import React from 'react'
import Link from 'next/link'

import { ArrowLeft } from 'lucide-react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { invoices } from './invoices.data'

function page() {
    return (
        <div className='h-full flex flex-col bg-[#F6F8F9] justify-between'>
            <header className='flex items-center justify-between px-3 py-2 pt-6 mb-4'>
                <Link href='/round-up/main' className='flex items-center gap-2 text-neutral-700 font-semibold p-1'>
                    <ArrowLeft className='h-6 w-6' />
                </Link>
            </header>
            <main className='h-[524px] pl-2'>
                <h2 className='px-1 text-xl text-neutral-700 mb-5'>
                    Round Up History
                </h2>
                <Table className='pl-2 h-full'>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-xs text-neutral-700">Date</TableHead>
                            {/* <TableHead className="text-xs text-neutral-700">Merchant</TableHead>
                            <TableHead className="text-xs text-neutral-700">Amount</TableHead> */}
                            <TableHead className="text-xs text-neutral-700">Round Up</TableHead>
                            <TableHead className="text-xs text-neutral-700">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className='h-full overflow-y-auto overflow-x-hidden pb-6'>
                        {
                            invoices.map((elem, idx) => (
                                <TableRow key={idx}>
                                    <TableCell className="text-xs text-neutral-700 text-[10px]">{elem.date}</TableCell>
                                    {/* <TableCell>{elem.merchant}</TableCell>
                                    <TableCell>{elem.amount}</TableCell> */}
                                    <TableCell className="text-xs text-cyan-500 font-semibold">+{elem.roundUp} so`m</TableCell>
                                    <TableCell className="text-[8px] text-neutral-700">
                                        <span className={`px-1.5 text-xs rounded-md ${elem.status === "success" ? "bg-emerald-300/70" : (elem.status === "waiting" ? "bg-amber-300/70" : "bg-red-300/70")}`}>{elem.status}</span>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default page